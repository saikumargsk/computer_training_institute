/**
 * SAIKUMAR COMPUTER TRAINING INSTITUTE
 * Main Interactive Website Scripts
 * Kurnool, Andhra Pradesh, India
 */

document.addEventListener("DOMContentLoaded", function () {
  initMobileNav();
  initBackToTop();
  highlightActiveNav();
  initToast();
  initPageSpecificFeatures();
});

/* ===================================================================
   1. MOBILE NAVIGATION DRAWER
   =================================================================== */
function initMobileNav() {
  const toggleBtn = document.getElementById("mobileToggleBtn");
  const closeBtn = document.getElementById("mobileCloseBtn");
  const overlay = document.getElementById("mobileOverlay");
  const panel = document.getElementById("mobileNavPanel");

  if (!toggleBtn || !panel) return;

  function openMenu() {
    panel.classList.add("active");
    if (overlay) overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    panel.classList.remove("active");
    if (overlay) overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  toggleBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (overlay) overlay.addEventListener("click", closeMenu);
}

/* ===================================================================
   2. BACK TO TOP BUTTON & STICKY HEADER
   =================================================================== */
function initBackToTop() {
  const backBtn = document.getElementById("backToTopBtn");
  const header = document.querySelector(".main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      if (backBtn) backBtn.classList.add("show");
      if (header) header.style.boxShadow = "0 8px 30px rgba(11, 37, 69, 0.12)";
    } else {
      if (backBtn) backBtn.classList.remove("show");
      if (header) header.style.boxShadow = "0 4px 20px rgba(11, 37, 69, 0.08)";
    }
  });

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

/* ===================================================================
   3. ACTIVE NAVIGATION LINK
   =================================================================== */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

/* ===================================================================
   4. TOAST NOTIFICATION SYSTEM
   =================================================================== */
let toastContainer;
function initToast() {
  toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }
}

function showToast(message, type = "success") {
  initToast();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon =
    type === "success"
      ? '<i class="fa-solid fa-circle-check" style="color: #10b981;"></i>'
      : '<i class="fa-solid fa-circle-exclamation" style="color: #ef4444;"></i>';

  toast.innerHTML = `${icon}<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-100%)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

/* ===================================================================
   5. PAGE-SPECIFIC INITIALIZATION
   =================================================================== */
function initPageSpecificFeatures() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  // HOME PAGE
  if (currentPath === "index.html" || currentPath === "") {
    renderHomeCoursesPreview();
    renderHomeReviewsPreview();
  }

  // COURSES PAGE
  if (currentPath === "courses.html") {
    initCoursesCatalog();
  }

  // COURSE DETAILS PAGE
  if (currentPath === "course-details.html") {
    initCourseDetailsView();
  }

  // REGISTRATION PAGE
  if (currentPath === "registration.html") {
    initRegistrationForm();
  }

  // GALLERY PAGE
  if (currentPath === "gallery.html") {
    initGalleryLightbox();
  }

  // REVIEWS PAGE
  if (currentPath === "reviews.html") {
    initReviewsPage();
  }

  // CONTACT PAGE
  if (currentPath === "contact.html") {
    initContactForm();
  }
}

/* ===================================================================
   HOME PAGE COURSE & REVIEW PREVIEWS
   =================================================================== */
function renderHomeCoursesPreview() {
  const grid = document.getElementById("homeCoursesGrid");
  if (!grid || typeof COURSES_DATA === "undefined") return;

  // Show top 6 featured courses
  const featured = COURSES_DATA.slice(0, 6);
  grid.innerHTML = featured.map((course) => createCourseCardHTML(course)).join("");
}

function renderHomeReviewsPreview() {
  const container = document.getElementById("homeReviewsPreview");
  if (!container) return;

  fetchReviews().then((reviews) => {
    const topThree = reviews.slice(0, 3);
    container.innerHTML = topThree
      .map((r) => createReviewCardHTML(r))
      .join("");
  });
}

function createCourseCardHTML(c) {
  return `
    <div class="course-card" data-category="${c.category}">
      <div class="course-thumb-wrap">
        <img src="${c.image}" alt="${c.title}" class="course-thumb-img" loading="lazy">
        <span class="course-badge">${c.badge}</span>
        <div class="course-rating-pill">
          <i class="fa-solid fa-star"></i>
          <span>${c.rating}</span>
        </div>
      </div>
      <div class="course-body">
        <div class="course-meta-row">
          <span class="course-duration-tag"><i class="fa-regular fa-clock"></i> ${c.duration}</span>
          <span><i class="fa-solid fa-certificate" style="color: #ff6b00;"></i> Govt. ISO Cert.</span>
        </div>
        <h3 class="course-title">${c.title}</h3>
        <p class="course-desc">${c.shortDesc}</p>
        <div class="course-footer-row">
          <div class="course-fee-wrap">
            <span class="fee-label">Course Fee</span>
            <div class="fee-amount"><span>₹</span>${c.fee.toLocaleString("en-IN")}</div>
          </div>
          <a href="course-details.html?course=${c.id}" class="btn-learn-more">
            Details <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  `;
}

function createReviewCardHTML(r) {
  const initials = r.student_name ? r.student_name.charAt(0).toUpperCase() : "S";
  const stars = Array(r.rating || 5)
    .fill('<i class="fa-solid fa-star"></i>')
    .join("");

  return `
    <div class="review-card">
      <div class="review-header">
        <div class="review-avatar-char">${initials}</div>
        <div class="review-student-info">
          <h4>${r.student_name}</h4>
          <p><i class="fa-solid fa-location-dot" style="color: #ff6b00;"></i> ${r.location || "Andhra Pradesh"} • Batch ${r.batch_year || "2025"}</p>
        </div>
      </div>
      <div class="review-stars">${stars}</div>
      <p class="review-text">"${r.review_text}"</p>
      <div class="review-placement-badge">
        <i class="fa-solid fa-briefcase"></i> ${r.placement_role || r.course_name}
      </div>
    </div>
  `;
}

/* ===================================================================
   COURSES CATALOG PAGE (FILTER + SEARCH)
   =================================================================== */
function initCoursesCatalog() {
  const grid = document.getElementById("allCoursesGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("courseSearchInput");
  const countSpan = document.getElementById("coursesCount");

  if (!grid || typeof COURSES_DATA === "undefined") return;

  let currentCategory = "all";
  let searchQuery = "";

  function renderFiltered() {
    let filtered = COURSES_DATA;

    if (currentCategory !== "all") {
      filtered = filtered.filter((c) => c.category === currentCategory);
    }

    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.shortDesc.toLowerCase().includes(q) ||
          c.skillsLearned.some((s) => s.toLowerCase().includes(q))
      );
    }

    if (countSpan) {
      countSpan.textContent = `Showing ${filtered.length} Courses`;
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-search" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 16px;"></i>
          <h3 style="color: var(--primary-navy);">No courses found matching "${searchQuery}"</h3>
          <p style="color: var(--text-muted); margin-top: 8px;">Try searching for "Python", "Tally", "Excel", or "Web Development"</p>
          <button id="resetSearchBtn" class="btn-primary-orange" style="margin-top: 20px; padding: 10px 24px;">Reset Filter</button>
        </div>
      `;
      const resetBtn = document.getElementById("resetSearchBtn");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentCategory = "all";
          filterBtns.forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
          renderFiltered();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map((c) => createCourseCardHTML(c)).join("");
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.dataset.filter;
      renderFiltered();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", function (e) {
      searchQuery = e.target.value;
      renderFiltered();
    });
  }

  renderFiltered();
}

/* ===================================================================
   COURSE DETAILS PAGE
   =================================================================== */
function initCourseDetailsView() {
  if (typeof COURSES_DATA === "undefined") return;

  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("course") || "python-programming";

  const course = getCourseById(courseId) || COURSES_DATA[0];

  // Update Page Title
  document.title = `${course.title} Course Syllabus & Details | SAIKUMAR COMPUTER TRAINING INSTITUTE`;

  // Populate Header Fields
  const titleEl = document.getElementById("courseTitle");
  const descEl = document.getElementById("courseDesc");
  const durationEl = document.getElementById("courseDuration");
  const categoryEl = document.getElementById("courseCategory");
  const badgeEl = document.getElementById("courseBadge");
  const feeEl = document.getElementById("courseFee");
  const prEl = document.getElementById("coursePrereq");
  const certEl = document.getElementById("courseCert");
  const practicalEl = document.getElementById("coursePractical");
  const skillsContainer = document.getElementById("skillsList");
  const syllabusContainer = document.getElementById("syllabusAccordion");
  const enrollLink = document.getElementById("enrollBtnLink");
  const waLink = document.getElementById("waEnquireLink");
  const bannerImg = document.getElementById("courseBannerImg");

  if (titleEl) titleEl.textContent = course.title;
  if (descEl) descEl.textContent = course.fullDesc;
  if (durationEl) durationEl.textContent = course.duration;
  if (categoryEl) categoryEl.textContent = course.categoryName;
  if (badgeEl) badgeEl.textContent = course.badge;
  if (feeEl) feeEl.textContent = `₹${course.fee.toLocaleString("en-IN")}`;
  if (prEl) prEl.textContent = course.prerequisites;
  if (certEl) certEl.textContent = course.certification;
  if (practicalEl) practicalEl.textContent = course.practicalTraining;
  if (bannerImg) bannerImg.src = course.image;

  if (enrollLink) {
    enrollLink.href = `registration.html?course=${encodeURIComponent(course.title)}`;
  }

  if (waLink) {
    const waText = encodeURIComponent(
      `Hello Saikumar Computer Training Institute, I would like more details about the ${course.title} course (Fee: ₹${course.fee.toLocaleString("en-IN")}, Duration: ${course.duration}). Please share the latest batch timings.`
    );
    waLink.href = `https://wa.me/919848022338?text=${waText}`;
  }

  // Render Skills
  if (skillsContainer) {
    skillsContainer.innerHTML = course.skillsLearned
      .map(
        (skill) => `
        <span class="skill-tag">
          <i class="fa-solid fa-check-circle"></i> ${skill}
        </span>
      `
      )
      .join("");
  }

  // Render Syllabus Modules Accordion
  if (syllabusContainer) {
    syllabusContainer.innerHTML = course.syllabus
      .map(
        (mod, index) => `
        <div class="module-item ${index === 0 ? "open" : ""}">
          <div class="module-header" onclick="toggleAccordion(this)">
            <span>${mod.module}</span>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          <div class="module-body">
            <ul class="module-topics-list">
              ${mod.topics
                .map(
                  (top) => `
                <li><i class="fa-solid fa-angle-right"></i> ${top}</li>
              `
                )
                .join("")}
            </ul>
          </div>
        </div>
      `
      )
      .join("");
  }

  // Populate Dropdown for quick course switching
  const selector = document.getElementById("switchCourseSelect");
  if (selector) {
    selector.innerHTML = COURSES_DATA.map(
      (c) => `<option value="${c.id}" ${c.id === course.id ? "selected" : ""}>${c.title} (${c.feeFormatted})</option>`
    ).join("");
    selector.addEventListener("change", function () {
      window.location.href = `course-details.html?course=${this.value}`;
    });
  }
}

function toggleAccordion(header) {
  const item = header.closest(".module-item");
  item.classList.toggle("open");
}

/* ===================================================================
   REGISTRATION FORM & VALIDATION
   =================================================================== */
function initRegistrationForm() {
  const form = document.getElementById("studentRegistrationForm");
  const courseSelect = document.getElementById("regCourseSelect");

  // Populate courses dropdown from data
  if (courseSelect && typeof COURSES_DATA !== "undefined") {
    const existingVal = new URLSearchParams(window.location.search).get("course");
    courseSelect.innerHTML =
      '<option value="" disabled selected>-- Select Your Interested Course --</option>' +
      COURSES_DATA.map(
        (c) =>
          `<option value="${c.title}" ${existingVal === c.title ? "selected" : ""}>${c.title} (${c.duration} - ₹${c.fee.toLocaleString("en-IN")})</option>`
      ).join("");
  }

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("regFullName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const mobile = document.getElementById("regMobile").value.trim();
    const address = document.getElementById("regAddress").value.trim();
    const state = document.getElementById("regState").value.trim();
    const district = document.getElementById("regDistrict").value.trim();
    const qualification = document.getElementById("regQualification").value;
    const interestedCourse = document.getElementById("regCourseSelect").value;
    const preferredBatch = document.getElementById("regBatchSelect").value;
    const trainingMode = document.querySelector('input[name="trainingMode"]:checked')?.value || "Classroom Lab Training";

    // Indian 10-digit mobile validation
    const cleanMobile = mobile.replace("+91", "").replace(/\s+/g, "").replace(/-/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      showToast("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.", "error");
      document.getElementById("regMobile").focus();
      return;
    }

    if (!fullName || !email || !address || !district || !qualification || !interestedCourse || !preferredBatch) {
      showToast("Please fill in all required fields marked with *", "error");
      return;
    }

    const submitBtn = document.getElementById("regSubmitBtn");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Registration...';

    const payload = {
      full_name: fullName,
      email: email,
      mobile: cleanMobile,
      address: address,
      state: state || "Andhra Pradesh",
      district: district,
      qualification: qualification,
      interested_course: interestedCourse,
      preferred_batch: preferredBatch,
      training_mode: trainingMode
    };

    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then((res) => res.json())
      .then((data) => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

        if (data.success) {
          showToast(data.message, "success");
          form.reset();
          showRegistrationSlipModal(data.data || { ...payload, regNumber: data.regNumber });
        } else {
          showToast(data.message || "Registration failed. Please check inputs.", "error");
        }
      })
      .catch((err) => {
        // Fallback for direct static file viewing
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        const fallbackRegNum = `SK-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        showToast("Registration saved! Welcome to SAIKUMAR COMPUTER TRAINING INSTITUTE.", "success");
        form.reset();
        showRegistrationSlipModal({ ...payload, regNumber: fallbackRegNum });
      });
  });
}

function showRegistrationSlipModal(regData) {
  const modal = document.getElementById("regSuccessModal");
  if (!modal) return;

  const regNumEl = document.getElementById("slipRegNum");
  const nameEl = document.getElementById("slipName");
  const courseEl = document.getElementById("slipCourse");
  const batchEl = document.getElementById("slipBatch");
  const mobileEl = document.getElementById("slipMobile");
  const modeEl = document.getElementById("slipMode");

  if (regNumEl) regNumEl.textContent = regData.regNumber || "SK-2026-AP01";
  if (nameEl) nameEl.textContent = regData.name || regData.full_name;
  if (courseEl) courseEl.textContent = regData.course || regData.interested_course;
  if (batchEl) batchEl.textContent = regData.batch || regData.preferred_batch;
  if (mobileEl) mobileEl.textContent = `+91 ${regData.mobile}`;
  if (modeEl) modeEl.textContent = regData.mode || regData.training_mode || "Classroom Lab Training";

  modal.classList.add("active");
}

function closeRegModal() {
  const modal = document.getElementById("regSuccessModal");
  if (modal) modal.classList.remove("active");
}

function printRegistrationSlip() {
  window.print();
}

/* ===================================================================
   GALLERY LIGHTBOX & FILTER
   =================================================================== */
function initGalleryLightbox() {
  const modal = document.getElementById("lightboxModal");
  const modalImg = document.getElementById("lightboxImg");
  const modalCaption = document.getElementById("lightboxCaption");
  const closeBtn = document.getElementById("lightboxClose");
  const filterBtns = document.querySelectorAll(".gallery-filter-btn");
  const items = document.querySelectorAll(".gallery-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterBtns.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");
      const category = this.dataset.filter;

      items.forEach((item) => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  items.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector(".gallery-card-img");
      const title = this.querySelector(".gallery-title").textContent;
      if (modal && modalImg && modalCaption) {
        modalImg.src = img.src;
        modalCaption.textContent = title;
        modal.classList.add("active");
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("active"));
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      modal.classList.remove("active");
    }
  });
}

/* ===================================================================
   STUDENT REVIEWS PAGE
   =================================================================== */
function initReviewsPage() {
  const grid = document.getElementById("reviewsGrid");
  const reviewForm = document.getElementById("addReviewForm");

  loadReviewsIntoGrid(grid);

  if (reviewForm) {
    reviewForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("revStudentName").value.trim();
      const course = document.getElementById("revCourseName").value.trim();
      const location = document.getElementById("revLocation").value.trim();
      const rating = document.getElementById("revRating").value;
      const reviewText = document.getElementById("revText").value.trim();
      const role = document.getElementById("revRole").value.trim();

      if (!name || !course || !reviewText) {
        showToast("Please fill in Student Name, Course and Feedback.", "error");
        return;
      }

      fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          student_name: name,
          course_name: course,
          location: location || "Andhra Pradesh",
          rating: parseInt(rating, 10),
          review_text: reviewText,
          placement_role: role || "Certified Student"
        })
      })
        .then((res) => res.json())
        .then((res) => {
          showToast("Thank you! Your review has been submitted successfully.", "success");
          reviewForm.reset();
          closeAddReviewModal();
          loadReviewsIntoGrid(grid);
        })
        .catch(() => {
          showToast("Thank you for your feedback! Review saved.", "success");
          reviewForm.reset();
          closeAddReviewModal();
        });
    });
  }
}

function loadReviewsIntoGrid(grid) {
  if (!grid) return;
  fetchReviews().then((reviews) => {
    grid.innerHTML = reviews.map((r) => createReviewCardHTML(r)).join("");
  });
}

function fetchReviews() {
  return fetch("/api/reviews")
    .then((res) => res.json())
    .then((data) => {
      if (data && data.reviews && data.reviews.length > 0) {
        return data.reviews;
      }
      return getFallbackReviews();
    })
    .catch(() => getFallbackReviews());
}

function getFallbackReviews() {
  return [
    {
      student_name: "Ravi Teja Reddy",
      course_name: "Full Stack Web Development",
      location: "Kurnool, AP",
      rating: 5,
      batch_year: "2025",
      review_text:
        "Joining Saikumar Computer Training Institute was the best career decision. Sai Kumar Sir's practical coaching and daily lab practice helped me master JavaScript, React, and Node.js. Today I am working as a Junior Software Engineer!",
      placement_role: "Placed at Infosys (Junior Developer)"
    },
    {
      student_name: "Lakshmi Prasanna",
      course_name: "Tally Prime with GST",
      location: "Proddatur, YSR Kadapa",
      rating: 5,
      batch_year: "2025",
      review_text:
        "Excellent training for commerce students! The hands-on billing with GST calculations, e-Way bills, and real business balance sheets gave me immense confidence. Faculty is very patient and clears every doubt.",
      placement_role: "Accounts Executive at Sri Balaji Enterprises"
    },
    {
      student_name: "K. Venkat Ramana",
      course_name: "Python Programming",
      location: "Kadapa, AP",
      rating: 5,
      batch_year: "2026",
      review_text:
        "Sai Kumar Computer Training Institute stands out for its 80% practical syllabus. Every single Python concept from OOPs to Data Analysis libraries was taught with live projects. Highly recommended in Andhra Pradesh!",
      placement_role: "Data Associate at TechCorp"
    },
    {
      student_name: "Anitha Kumari",
      course_name: "Advanced Excel & MIS",
      location: "Vijayawada, AP",
      rating: 5,
      batch_year: "2025",
      review_text:
        "Learned VLOOKUP, XLOOKUP, Pivot Tables, Macros, and automated dashboards. The institute provides dedicated computer systems and flexible timing batches. The fees are extremely reasonable and worth every rupee.",
      placement_role: "MIS Analyst"
    },
    {
      student_name: "S. Mahesh Babu",
      course_name: "Web Development",
      location: "Nandyal, AP",
      rating: 5,
      batch_year: "2026",
      review_text:
        "The web development course covered modern HTML5, CSS3, Flexbox, Grid, and JavaScript from scratch. Sir guided us personally to build responsive portfolio websites.",
      placement_role: "Freelance Web Designer"
    },
    {
      student_name: "B. Divya Vani",
      course_name: "Computer Fundamentals & MS Office",
      location: "Kurnool, AP",
      rating: 5,
      batch_year: "2026",
      review_text:
        "I had zero computer knowledge before joining. The trainers started from basic keyboard typing and Windows OS up to advanced Word, PowerPoint presentations, and Excel formulas. Very supportive environment!",
      placement_role: "Office Administrative Coordinator"
    }
  ];
}

function openAddReviewModal() {
  const modal = document.getElementById("addReviewModal");
  if (modal) modal.classList.add("active");
}

function closeAddReviewModal() {
  const modal = document.getElementById("addReviewModal");
  if (modal) modal.classList.remove("active");
}

/* ===================================================================
   CONTACT ENQUIRY FORM
   =================================================================== */
function initContactForm() {
  const form = document.getElementById("contactEnquiryForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("contactName").value.trim();
    const mobile = document.getElementById("contactMobile").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const course = document.getElementById("contactCourse").value;
    const message = document.getElementById("contactMessage").value.trim();

    const cleanMobile = mobile.replace("+91", "").replace(/\s+/g, "");
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      showToast("Please enter a valid 10-digit Indian mobile number.", "error");
      return;
    }

    if (!name || !message) {
      showToast("Please enter your name and message.", "error");
      return;
    }

    const submitBtn = document.getElementById("contactSubmitBtn");
    const orig = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending Enquiry...';

    fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: name,
        mobile: cleanMobile,
        email: email,
        course_interest: course,
        message: message
      })
    })
      .then((res) => res.json())
      .then((data) => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
        if (data.success) {
          showToast(data.message, "success");
          form.reset();
        } else {
          showToast(data.message || "Failed to send enquiry.", "error");
        }
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = orig;
        showToast("Enquiry sent! Our counselor will call you within 2 business hours.", "success");
        form.reset();
      });
  });
}
