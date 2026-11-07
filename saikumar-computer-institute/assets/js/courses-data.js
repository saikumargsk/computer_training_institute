/**
 * SAIKUMAR COMPUTER TRAINING INSTITUTE
 * Centralized Course Catalog & Syllabus Database
 * All fees in Indian Rupees (₹) - Andhra Pradesh, India
 */

const COURSES_DATA = [
  {
    id: "computer-fundamentals",
    title: "Computer Fundamentals",
    category: "foundations",
    categoryName: "Computer Basics",
    duration: "1 Month",
    fee: 2500,
    feeFormatted: "₹2,500",
    badge: "Beginner Friendly",
    rating: 4.9,
    reviewsCount: 142,
    image: "assets/images/course-fundamentals.jpg",
    shortDesc: "Master basic computer operations, typing skills in English and Telugu, Windows 11 OS, and safe internet browsing.",
    fullDesc: "This foundational course is designed for school students, college starters, and adults who wish to gain complete computer literacy. Starting from hardware essentials, you will learn hands-on keyboard typing, file and folder management, digital email communication, online banking security, and government portal navigation.",
    practicalTraining: "Daily 1 hour dedicated lab practice on modern PC with typing software, document creation, and digital internet tasks.",
    skillsLearned: [
      "Computer Hardware & Software Fundamentals",
      "Touch Typing Mastery (English & Regional fonts)",
      "Windows 11 Navigation, Settings & File Systems",
      "Internet, Email, Google Workspace & Cloud Storage",
      "Cyber Safety, Antivirus & Secure Online Transactions",
      "Printer, Scanner & Peripherals Operation"
    ],
    syllabus: [
      {
        module: "Module 1: Introduction to Computer Systems",
        topics: ["Input/Output devices, CPU, RAM, Storage types", "Setting up computer system and operating peripherals", "Motherboard, ports (USB, HDMI, LAN) identification"]
      },
      {
        module: "Module 2: Operating System (Windows 11)",
        topics: ["Desktop customization, taskbar, start menu", "File Explorer: Creating, copying, moving, and organizing files", "Control Panel, Settings, Device Manager basics"]
      },
      {
        module: "Module 3: Typing Proficiency",
        topics: ["Correct finger positioning & home row practice", "Speed building exercises (Goal: 30+ WPM)", "Official letter typing format and layout"]
      },
      {
        module: "Module 4: Internet, Web & Cloud Tools",
        topics: ["Web browsing with Chrome, Edge, search techniques", "Gmail: Composing, attaching documents, labels", "Google Drive, Google Docs, downloading & uploading files", "Online utility bill payments, UPI safety, cyber ethics"]
      }
    ],
    prerequisites: "No prior computer knowledge required. Anyone can join.",
    certification: "Certificate in Computer Fundamentals (CCF) - ISO Certified"
  },
  {
    id: "ms-office",
    title: "MS Office Suite (Word, Excel, PowerPoint)",
    category: "office",
    categoryName: "Office & Accounting",
    duration: "2 Months",
    fee: 3500,
    feeFormatted: "₹3,500",
    badge: "Most Popular",
    rating: 5.0,
    reviewsCount: 310,
    image: "assets/images/course-msoffice.jpg",
    shortDesc: "Complete official office automation training covering MS Word, MS Excel, MS PowerPoint, and MS Outlook.",
    fullDesc: "MS Office is the core requirement for every administrative, commercial, and corporate office job in India. In this course, you will learn to draft official letters, design resumes, calculate financial tables, create automated sheets, and deliver captivating slide presentations.",
    practicalTraining: "100% practical lab assignments creating real invoices, student mark sheets, official memorandums, and corporate presentation decks.",
    skillsLearned: [
      "Advanced Document Formatting & Mail Merge in Word",
      "Excel Formulas (SUM, AVERAGE, IF, VLOOKUP, COUNTIF)",
      "Data Filtering, Sorting, Conditional Formatting & Charts",
      "PowerPoint Animation, Slide Transitions & Visual Storytelling",
      "Office Printing, PDF Exporting & Document Security",
      "Professional Email Communication via MS Outlook"
    ],
    syllabus: [
      {
        module: "Module 1: Microsoft Word 2024",
        topics: ["Text formatting, styles, page setup, margins, headers & footers", "Tables, SmartArt, shapes, images, watermarks", "Mail Merge for mass letters, certificates & envelopes", "Review tab: Track changes, comments, spell check"]
      },
      {
        module: "Module 2: Microsoft Excel 2024",
        topics: ["Worksheet navigation, cell referencing (Relative, Absolute)", "Mathematical, Statistical & Logical formulas (SUM, IF, AND, OR)", "Data sorting, advanced filtering, conditional formatting", "2D/3D Charts, sparklines, data visualization", "Page break preview and print setup for large tables"]
      },
      {
        module: "Module 3: Microsoft PowerPoint 2024",
        topics: ["Slide layouts, templates, themes, Slide Master", "Inserting video, audio, icons, infographics", "Custom animations, trigger effects, transitions", "Presenter view, slideshow recording, exporting as MP4 video"]
      },
      {
        module: "Module 4: Microsoft Outlook & Office Integration",
        topics: ["Configuring email accounts, calendar scheduling", "Meeting invites, task management, contacts address book", "Exporting and linking Excel tables into Word and PPT"]
      }
    ],
    prerequisites: "Basic understanding of computer operations.",
    certification: "Diploma in Office Automation (DOA) - ISO 9001:2015"
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel & MIS Reporting",
    category: "office",
    categoryName: "Office & Accounting",
    duration: "1.5 Months",
    fee: 4500,
    feeFormatted: "₹4,500",
    badge: "High Demand",
    rating: 4.9,
    reviewsCount: 185,
    image: "assets/images/course-advexcel.jpg",
    shortDesc: "Master XLOOKUP, Pivot Tables, Power Query, Dynamic MIS Dashboards, and automated business analytics.",
    fullDesc: "Designed for commerce graduates, managers, accountants, and data professionals. Go beyond basic spreadsheets to master advanced nested lookup functions, multi-table Pivot Tables, automated data cleansing using Power Query, and interactive executive reporting dashboards.",
    practicalTraining: "Hands-on case studies with real Indian business sales datasets, inventory logs, and payroll registers.",
    skillsLearned: [
      "Modern Lookup Formulas (XLOOKUP, INDEX, MATCH, CHOOSE)",
      "Complex Aggregations (SUMIFS, COUNTIFS, AVERAGEIFS)",
      "Pivot Tables, Slicers, Timelines & Calculated Fields",
      "Dynamic Dashboard Design with Interactive KPI Cards",
      "Power Query: Data ETL, Merging, Appending & Cleaning",
      "Introduction to Excel Macros & Automation"
    ],
    syllabus: [
      {
        module: "Module 1: Advanced Formula Arsenal",
        topics: ["XLOOKUP vs VLOOKUP vs HLOOKUP", "INDEX-MATCH two-way lookup, OFFSET, INDIRECT", "Dynamic Array formulas: UNIQUE, FILTER, SORT, SEQUENCE, XMATCH", "Text & Date formulas: TEXT, DATEDIF, NETWORKDAYS, EOMONTH"]
      },
      {
        module: "Module 2: Data Analysis & Audit Tools",
        topics: ["Advanced Conditional Formatting with formula rules", "Data Validation with dependent drop-down lists", "Formula auditing, trace precedents, error handling with IFERROR", "What-If Analysis: Goal Seek, Data Tables, Scenario Manager"]
      },
      {
        module: "Module 3: Pivot Tables & Power Query",
        topics: ["Building robust Pivot Tables from scratch", "Grouping dates, numbers, custom sorting, calculated items", "Connecting multiple slicers to synchronize multiple charts", "Power Query editor: unpivoting, merging columns, transforming dirty data"]
      },
      {
        module: "Module 4: Executive MIS Dashboards",
        topics: ["Principles of clean dashboard UI/UX in Excel", "Designing Sales, Financial, and HR Performance Dashboards", "Automating monthly report refreshes in single click"]
      }
    ],
    prerequisites: "Familiarity with basic MS Excel.",
    certification: "Certified MIS & Advanced Excel Specialist"
  },
  {
    id: "tally-prime",
    title: "Tally Prime with GST & Accounting",
    category: "office",
    categoryName: "Office & Accounting",
    duration: "2.5 Months",
    fee: 5500,
    feeFormatted: "₹5,500",
    badge: "Job Oriented",
    rating: 5.0,
    reviewsCount: 275,
    image: "assets/images/course-tally.jpg",
    shortDesc: "Complete computerized accounting with GST billing, e-Way bills, TDS, inventory, and balance sheet finalization.",
    fullDesc: "Tally Prime is the gold standard accounting software in India. This course trains you to handle complete books of accounts for small to large enterprises in Andhra Pradesh and across India. Covers GST rates, voucher creation, inventory tracking, payroll, and final audited balance sheet preparation.",
    practicalTraining: "Live company accounting simulation with genuine GST invoices, purchase orders, bank statements, and tax challans.",
    skillsLearned: [
      "Double Entry Bookkeeping & Golden Rules of Accounting",
      "Tally Prime Setup, Company Creation & Chart of Accounts",
      "All Accounting Vouchers (Payment, Receipt, Journal, Contra)",
      "GST Invoicing (CGST, SGST, IGST) & e-Invoice/e-Way Bill",
      "Inventory Management (Stock Groups, Items, Units, Godowns)",
      "Bank Reconciliation Statement (BRS) & Profit/Loss Audit"
    ],
    syllabus: [
      {
        module: "Module 1: Accounting Foundations & Tally Interface",
        topics: ["Manual accounting principles, journalizing, ledger posting, trial balance", "Company creation in Tally Prime, security controls, backup & restore", "Ledger and group configuration"]
      },
      {
        module: "Module 2: Inventory & Trade Management",
        topics: ["Stock groups, categories, units of measure (Kgs, Pcs, Boxes)", "Multiple Godowns/Warehouses management", "Purchase orders, sales orders, delivery notes, rejection notes"]
      },
      {
        module: "Module 3: GST Compliance & Invoicing",
        topics: ["Understanding Indian GST structure (HSN/SAC codes, GST slabs)", "Configuring intra-state (CGST+SGST) and inter-state (IGST) sales", "e-Way bill generation and e-Invoicing integration", "GST returns overview: GSTR-1, GSTR-3B, GSTR-2B reconciliation"]
      },
      {
        module: "Module 4: Banking, TDS & Financial Statements",
        topics: ["Bank reconciliation (manual & automated BRS)", "TDS deduction, payment challans, and reports", "Generating Balance Sheet, Profit & Loss A/c, Cash Flow statements", "Year-end closing procedures and audit trail features"]
      }
    ],
    prerequisites: "10th/Intermediate or Degree (Commerce background beneficial but not mandatory).",
    certification: "Certified Professional Tally & GST Accountant (CPTA)"
  },
  {
    id: "python-programming",
    title: "Python Programming (Core & Advanced)",
    category: "programming",
    categoryName: "Programming",
    duration: "2.5 Months",
    fee: 7500,
    feeFormatted: "₹7,500",
    badge: "Industry #1",
    rating: 4.9,
    reviewsCount: 220,
    image: "assets/images/course-python.jpg",
    shortDesc: "Learn Python 3 from basics to OOPs, data structures, file handling, database connectivity, and data libraries.",
    fullDesc: "Python is the most versatile programming language in the modern software industry. Our comprehensive course takes you from basic algorithmic thinking to advanced object-oriented design and practical real-world automation scripts. Ideal for engineering students, BCA/MCA graduates, and career switchers.",
    practicalTraining: "Build 5+ hands-on projects including Student Management System, Automated Web Scraper, and Data Visualization Dashboard.",
    skillsLearned: [
      "Python 3 Syntax, Data Types & Control Structures",
      "Functions, Decorators, Generators & Lambda Expressions",
      "Object-Oriented Programming (Classes, Inheritance, Polymorphism)",
      "File Handling, JSON, CSV & SQLite Database Integration",
      "NumPy & Pandas Foundations for Data Analysis",
      "Building Desktop GUI with Tkinter / Web Automation"
    ],
    syllabus: [
      {
        module: "Module 1: Python Core Foundations",
        topics: ["Setting up Python 3, VS Code, virtual environments", "Variables, Dynamic Typing, Arithmetic & Logical Operators", "Conditional statements (if-elif-else) and Loops (for, while, range)", "Strings and string slicing methods"]
      },
      {
        module: "Module 2: Data Structures & Functional Python",
        topics: ["Lists, Tuples, Sets, Dictionaries in depth", "List & Dictionary comprehensions", "Functions: args, kwargs, scope, recursion, lambda functions", "Built-in modules: math, random, datetime, os, sys"]
      },
      {
        module: "Module 3: OOPs & Exception Handling",
        topics: ["Classes, objects, constructors (__init__), self parameter", "Encapsulation, Data abstraction, Multiple Inheritance, Method Overriding", "Try-Except-Finally blocks, Custom Exceptions, Assertions", "File handling: reading and writing text, CSV, and JSON files"]
      },
      {
        module: "Module 4: Database & Introduction to Libraries",
        topics: ["Connecting Python to SQLite/MySQL with CRUD operations", "NumPy arrays, mathematical operations, slicing", "Pandas DataFrames: loading data, filtering, grouping", "Capstone Project: End-to-end database-driven application"]
      }
    ],
    prerequisites: "Basic computer familiarity. Logical curiosity.",
    certification: "Certified Python Developer (CPD) - Industry Recognized"
  },
  {
    id: "java-programming",
    title: "Java Programming (Core & Enterprise)",
    category: "programming",
    categoryName: "Programming",
    duration: "3 Months",
    fee: 8000,
    feeFormatted: "₹8,000",
    badge: "Enterprise",
    rating: 4.9,
    reviewsCount: 195,
    image: "assets/images/course-java.jpg",
    shortDesc: "Master Core Java, JVM architecture, OOPs, Collections framework, Multithreading, JDBC, and Spring Boot basics.",
    fullDesc: "Java powers banking, enterprise portals, and IT giants worldwide. In this intensive practical course, you will master the Java platform, deep-dive into the Collections framework, multithreaded architecture, and build robust database applications using JDBC.",
    practicalTraining: "Develop a complete Banking Management System with user authentication, transaction history, and MySQL integration.",
    skillsLearned: [
      "JDK, JRE & JVM Internals, Memory Management (Stack vs Heap)",
      "Strict Object-Oriented Principles (Encapsulation, Polymorphism)",
      "Java Collections Framework (ArrayList, LinkedList, HashMap, Tree)",
      "Exception Handling, Custom Exceptions & Garbage Collection",
      "Multithreading, Concurrency & Synchronization",
      "JDBC Database Programming with MySQL"
    ],
    syllabus: [
      {
        module: "Module 1: Java Basics & OOP Mastery",
        topics: ["Data types, operators, flow control, loops, switch-case", "Classes, objects, constructors, 'this' and 'super' keywords", "Method overloading, overriding, dynamic method dispatch", "Abstract classes, interfaces, multiple inheritance via interfaces"]
      },
      {
        module: "Module 2: Advanced Java Concepts",
        topics: ["String, StringBuilder, StringBuffer, immutability", "Packages, access specifiers, JAR files", "Wrapper classes, Autoboxing and Unboxing", "Checked vs Unchecked Exceptions, try-with-resources"]
      },
      {
        module: "Module 3: Collections & Generics Framework",
        topics: ["List interface (ArrayList, LinkedList, Vector)", "Set interface (HashSet, LinkedHashSet, TreeSet)", "Map interface (HashMap, LinkedHashMap, TreeMap)", "Iterators, Comparable & Comparator, Generics"]
      },
      {
        module: "Module 4: Multithreading & JDBC Connectivity",
        topics: ["Creating threads (Thread class vs Runnable interface)", "Thread lifecycle, synchronization, deadlock prevention", "JDBC Architecture, DriverManager, Connection, Statement, PreparedStatement", "Executing SQL queries, ResultSet, Transaction commit and rollback"]
      }
    ],
    prerequisites: "Basic programming logic or C fundamentals recommended.",
    certification: "Certified Java Professional (CJP)"
  },
  {
    id: "c-cpp-programming",
    title: "C and C++ Programming",
    category: "programming",
    categoryName: "Programming",
    duration: "2 Months",
    fee: 4500,
    feeFormatted: "₹4,500",
    badge: "Core Foundation",
    rating: 4.8,
    reviewsCount: 165,
    image: "assets/images/course-cpp.jpg",
    shortDesc: "The ultimate bedrock of computer science. Master pointers, memory management, algorithms, and C++ OOPs.",
    fullDesc: "Every serious programmer needs strong foundations in C and C++. This course is essential for B.Tech, MCA, and Diploma students aiming for campus placements. You will understand how computers execute instructions in memory, demystify pointers, and master object-oriented C++ with Standard Template Library (STL).",
    practicalTraining: "Solve 100+ coding problems and build terminal-based games and record management systems.",
    skillsLearned: [
      "Algorithm Design, Flowcharts & Problem Solving",
      "Memory Addresses, Pointers & Dynamic Allocation (malloc/free)",
      "Arrays, Strings, Structures & Unions in C",
      "C++ Classes, Objects, Constructors & Destructors",
      "Operator Overloading, Inheritance & Virtual Polymorphism",
      "C++ Standard Template Library (vector, stack, queue, map)"
    ],
    syllabus: [
      {
        module: "Module 1: C Language Core Foundations",
        topics: ["Structure of a C program, compilation & linking process", "Data types, operators, format specifiers, typecasting", "Control structures: if, nested if, switch-case", "Loops: for, while, do-while, break, continue"]
      },
      {
        module: "Module 2: Arrays, Strings, Pointers & Memory",
        topics: ["1D & 2D Arrays, matrix manipulations, string functions", "Functions: pass by value vs pass by reference, recursion", "Pointers: Pointer arithmetic, double pointers, pointer to arrays", "Dynamic Memory Allocation: malloc(), calloc(), realloc(), free()", "Structures, Unions, and File Handling (fopen, fprintf, fscanf)"]
      },
      {
        module: "Module 3: Object-Oriented Programming with C++",
        topics: ["Differences between C and C++, cin/cout, reference variables", "Classes, objects, access specifiers (private, public, protected)", "Constructors: Default, Parameterized, Copy, Destructors", "Friend functions, Friend classes, 'this' pointer"]
      },
      {
        module: "Module 4: Advanced C++ & STL",
        topics: ["Operator overloading (unary and binary)", "Inheritance types (Single, Multiple, Hierarchical, Hybrid)", "Virtual functions, pure virtual functions, abstract classes", "C++ STL containers: vector, list, pair, map, iterators, algorithms"]
      }
    ],
    prerequisites: "None. Perfect starter course for engineering and science students.",
    certification: "Certificate in C & C++ Programming"
  },
  {
    id: "web-development",
    title: "Web Development (HTML, CSS, JavaScript)",
    category: "webdev",
    categoryName: "Web & Full Stack",
    duration: "2 Months",
    fee: 6500,
    feeFormatted: "₹6,500",
    badge: "Trending",
    rating: 5.0,
    reviewsCount: 240,
    image: "assets/images/course-webdev.jpg",
    shortDesc: "Learn to build modern, responsive, mobile-first websites with HTML5, CSS3, Flexbox, Grid, and JavaScript ES6+.",
    fullDesc: "Become a frontend web developer! Learn modern web standards to craft stunning, interactive websites that look incredible on mobile phones, tablets, and desktop computers. You will learn DOM manipulation, modern ES6+ JavaScript, responsive layouts, and how to host your websites online for free.",
    practicalTraining: "Build 4 responsive websites including a personal portfolio, business landing page, and interactive JavaScript application.",
    skillsLearned: [
      "Semantic HTML5 Markup & Accessible Web Standards",
      "Modern CSS3, Animations, Transitions & Gradients",
      "Flexbox & CSS Grid Layout Systems",
      "Mobile-First Responsive Design with Media Queries",
      "JavaScript ES6+ (DOM, Events, LocalStorage, Fetch API)",
      "Git, GitHub & Live Website Deployment"
    ],
    syllabus: [
      {
        module: "Module 1: HTML5 Architecture",
        topics: ["HTML page structure, head, meta tags, semantic tags", "Text, hyperlinks, lists, tables, media (audio, video, iframe)", "HTML5 forms: input types, validations, placeholders, buttons"]
      },
      {
        module: "Module 2: Modern CSS3 Styling & Layouts",
        topics: ["Selectors, specificity, box model (margin, border, padding, content)", "Colors, gradients, typography, box-shadows, rounded borders", "CSS Flexbox: flex containers, align-items, justify-content", "CSS Grid: grid-template-columns, areas, gap", "Responsive design: viewport meta, CSS media queries"]
      },
      {
        module: "Module 3: JavaScript ES6+ Programming",
        topics: ["Variables (let, const), data types, functions, arrow functions", "DOM manipulation: querySelector, createElement, innerHTML, classList", "Event Listeners: click, input, submit, scroll, keydown", "Arrays, Objects, Array methods (map, filter, reduce)", "Working with JSON, LocalStorage, and Fetch API"]
      },
      {
        module: "Module 4: Practical Web Projects & Hosting",
        topics: ["Creating interactive UI components (modals, sliders, accordions)", "CSS frameworks introduction (Bootstrap/Tailwind)", "Version control with Git & GitHub", "Deploying live websites on Netlify / GitHub Pages"]
      }
    ],
    prerequisites: "Basic computer familiarity.",
    certification: "Certified Frontend Web Developer"
  },
  {
    id: "fullstack-development",
    title: "Full Stack Web Development",
    category: "webdev",
    categoryName: "Web & Full Stack",
    duration: "4.5 Months",
    fee: 14500,
    feeFormatted: "₹14,500",
    badge: "Placement Star",
    rating: 5.0,
    reviewsCount: 290,
    image: "assets/images/course-fullstack.jpg",
    shortDesc: "Complete MERN / Python Full Stack course: React.js, Node.js, Express, MongoDB, MySQL, and cloud deployment.",
    fullDesc: "Our flagship career-transforming program. Learn frontend engineering with React.js, build high-performance server APIs with Node.js and Express, integrate relational and NoSQL databases, implement secure JWT authentication, and deploy production-ready full stack web applications.",
    practicalTraining: "Build 2 major enterprise full stack projects: An E-Commerce Portal and an Institute Management System with live payment gateway.",
    skillsLearned: [
      "Modern React.js (Hooks, Components, Router, State Management)",
      "Node.js Runtime & Express.js REST API Architecture",
      "MongoDB / Mongoose ODM & MySQL Relational Database",
      "Authentication & Security with JWT & Password Hashing",
      "CRUD Operations, API Testing with Postman",
      "Cloud Deployment, DevOps Basics & CI/CD on Render / AWS"
    ],
    syllabus: [
      {
        module: "Module 1: Advanced Frontend & React.js",
        topics: ["ES6+ Javascript mastery (destructuring, spread, async/await, promises)", "React concepts: JSX, components, props, state", "React Hooks: useState, useEffect, useRef, useContext, custom hooks", "React Router DOM v6 for single-page applications", "Tailwind CSS integration and component styling"]
      },
      {
        module: "Module 2: Backend Engineering with Node & Express",
        topics: ["Node.js architecture, event loop, npm packages", "Building REST APIs with Express.js router & middleware", "Request/Response handling, status codes, CORS setup", "Error handling, validation middleware, logging"]
      },
      {
        module: "Module 3: Database Engineering & Security",
        topics: ["MongoDB Atlas & Mongoose schema design", "MySQL database integration with Sequelize/Knex", "User authentication: bcrypt hashing, JSON Web Tokens (JWT)", "Role-based access control (Admin, Student, Faculty)"]
      },
      {
        module: "Module 4: Capstone Project & Placement Prep",
        topics: ["Full Stack E-Commerce / LMS capstone development", "Stripe / Razorpay payment gateway integration", "Deploying frontend on Vercel and backend on Render/AWS", "Interview prep: DSA basics, mock technical interviews, resume building"]
      }
    ],
    prerequisites: "Graduation or Diploma in any stream (B.Tech, BCA, B.Sc, B.Com). Passion for coding.",
    certification: "Master Diploma in Full Stack Web Development (MDFSD)"
  },
  {
    id: "data-analytics",
    title: "Data Analytics (Power BI, Excel, SQL, Python)",
    category: "data",
    categoryName: "Data & Databases",
    duration: "3 Months",
    fee: 11000,
    feeFormatted: "₹11,000",
    badge: "Top Salary",
    rating: 4.9,
    reviewsCount: 205,
    image: "assets/images/course-data-analytics.jpg",
    shortDesc: "Master data visualization, SQL queries, Power BI DAX, Excel modeling, and Python data manipulation.",
    fullDesc: "Data analysts are in extreme demand across IT, finance, retail, and healthcare. This course trains you to convert raw business data into actionable visual insights. Learn the complete analytics pipeline: extracting data using SQL, cleaning it, modeling it, and creating interactive executive dashboards in Power BI.",
    practicalTraining: "Analyze real Indian retail, banking, and telecom datasets to solve business problems and predict trends.",
    skillsLearned: [
      "Advanced Excel for Business Modeling & Statistical Functions",
      "Complex SQL Queries, Window Functions & Subqueries",
      "Power BI Desktop: Power Query ETL, Data Modeling, Star Schema",
      "DAX Measures, Calculated Columns & Time Intelligence",
      "Python for Data Analytics: Pandas, NumPy, Seaborn & Matplotlib",
      "Storytelling with Data & Executive Presentation Skills"
    ],
    syllabus: [
      {
        module: "Module 1: Excel for Data Analysis",
        topics: ["Data cleaning, removing duplicates, text to columns, Flash Fill", "Descriptive statistics, variance, standard deviation, trends", "Advanced Pivot Tables, calculated fields, dynamic charts"]
      },
      {
        module: "Module 2: SQL for Data Analytics",
        topics: ["SELECT, WHERE, GROUP BY, HAVING, ORDER BY", "INNER, LEFT, RIGHT, FULL OUTER JOINS", "Subqueries, Common Table Expressions (CTEs)", "Window functions: ROW_NUMBER(), RANK(), DENSE_RANK(), NTILE()"]
      },
      {
        module: "Module 3: Power BI Visualization & DAX",
        topics: ["Connecting to Excel, SQL, CSV data sources in Power BI", "Data modeling: Relationships, Cardinality (1:*, *:*), Star schema", "DAX basics: CALCULATE, FILTER, RELATED, SUMX, AVERAGEA", "Time intelligence DAX: YTD, MTD, SAMEPERIODLASTYEAR", "Building interactive dashboards with KPI cards, bar, line, and matrix visuals"]
      },
      {
        module: "Module 4: Python for Data Science Basics",
        topics: ["Pandas DataFrame operations, handling missing values", "Data visualization with Matplotlib and Seaborn charts", "Exploratory Data Analysis (EDA) on a real company dataset"]
      }
    ],
    prerequisites: "Any graduate or final year student. Basic math/logical comfort.",
    certification: "Certified Professional Data Analyst (CPDA)"
  },
  {
    id: "sql-database",
    title: "SQL & Database Management (MySQL & Oracle)",
    category: "data",
    categoryName: "Data & Databases",
    duration: "1.5 Months",
    fee: 4500,
    feeFormatted: "₹4,500",
    badge: "Essential",
    rating: 4.8,
    reviewsCount: 155,
    image: "assets/images/course-sql.jpg",
    shortDesc: "Master relational database architecture, DDL/DML, complex joins, views, stored procedures, triggers, and transactions.",
    fullDesc: "Databases are the foundation of all software applications. In this course, you will master SQL (Structured Query Language) using both MySQL and Oracle. Gain hands-on expertise in database design, entity relationship diagrams (ERD), normalization, indexing, and writing high-performance queries.",
    practicalTraining: "Design and manage complete relational databases for a hospital, college, and bank with live schema creation.",
    skillsLearned: [
      "Relational Database Concepts, RDBMS Architecture & Keys",
      "DDL (CREATE, ALTER, DROP) & DML (INSERT, UPDATE, DELETE)",
      "Complex Multi-Table Joins & Correlated Subqueries",
      "Database Normalization (1NF, 2NF, 3NF, BCNF)",
      "Stored Procedures, User Defined Functions & Triggers",
      "Indexing, Query Optimization & Transaction Management (ACID)"
    ],
    syllabus: [
      {
        module: "Module 1: RDBMS & SQL Fundamentals",
        topics: ["Introduction to databases, DBMS vs RDBMS", "Entity-Relationship (ER) Modeling, Primary Key, Foreign Key, Unique, Not Null", "DDL commands: CREATE, ALTER, DROP, TRUNCATE, RENAME", "DML commands: INSERT, UPDATE, DELETE, MERGE"]
      },
      {
        module: "Module 2: Querying & Joins",
        topics: ["SELECT statement with WHERE, LIKE, IN, BETWEEN, IS NULL", "Aggregate functions: COUNT, SUM, AVG, MIN, MAX", "GROUP BY and HAVING clauses", "Joins: INNER JOIN, LEFT OUTER, RIGHT OUTER, FULL OUTER, CROSS JOIN, SELF JOIN"]
      },
      {
        module: "Module 3: Subqueries, Views & Constraints",
        topics: ["Single-row, multi-row, and correlated subqueries", "Creating and managing Views for security", "Integrity constraints and cascading referential integrity", "Database normalization principles (1NF through 3NF)"]
      },
      {
        module: "Module 4: Advanced Database Programming",
        topics: ["PL/SQL / MySQL Stored Procedures with IN, OUT parameters", "Creating and executing Database Triggers", "Indexes: Clustered vs Non-clustered, performance tuning", "Transactions: COMMIT, ROLLBACK, SAVEPOINT, ACID properties"]
      }
    ],
    prerequisites: "Basic computer familiarity.",
    certification: "Certified SQL Database Administrator (CSDA)"
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing (SEO, SMM, Google Ads)",
    category: "marketing",
    categoryName: "Digital Marketing",
    duration: "2 Months",
    fee: 6000,
    feeFormatted: "₹6,000",
    badge: "Career Track",
    rating: 4.9,
    reviewsCount: 190,
    image: "assets/images/course-digital-marketing.jpg",
    shortDesc: "Learn Search Engine Optimization, Google Ads campaigns, Instagram & Facebook marketing, content strategy, and analytics.",
    fullDesc: "Learn how modern businesses get discovered and generate sales online! This practical digital marketing course equips you to run successful Google search campaigns, master organic ranking through SEO, execute social media ads on Meta (Facebook & Instagram), and analyze marketing ROI using Google Analytics.",
    practicalTraining: "Create and optimize live ad campaigns, conduct keyword research, and design marketing creatives using Canva.",
    skillsLearned: [
      "On-Page, Off-Page & Technical Search Engine Optimization (SEO)",
      "Keyword Research using Google Keyword Planner & Ubersuggest",
      "Google Search, Display & Video Ads Campaign Management",
      "Social Media Marketing (Meta Ads Manager, Instagram Reels strategy)",
      "Google Analytics 4 (GA4) & Google Search Console",
      "Email Marketing, Lead Generation & Graphic Design with Canva"
    ],
    syllabus: [
      {
        module: "Module 1: Search Engine Optimization (SEO)",
        topics: ["How search engines crawl, index, and rank websites", "On-page SEO: Title tags, meta descriptions, headings, alt text, URL structure", "Technical SEO: Sitemap.xml, robots.txt, mobile responsiveness, site speed", "Off-page SEO: Backlinks, guest blogging, local business citations"]
      },
      {
        module: "Module 2: Google Ads (PPC)",
        topics: ["Google Ads account setup, campaign structures", "Search Ads: Quality score, ad rank, bid strategies, negative keywords", "Display Network & YouTube video ads", "Conversion tracking and remarketing tags"]
      },
      {
        module: "Module 3: Social Media Marketing (SMM)",
        topics: ["Meta Business Suite & Ads Manager setup", "Targeting audiences: Demographics, interests, lookalike audiences", "Crafting high-converting ad creatives and copywriting", "Organic growth tactics on Instagram, Facebook, and LinkedIn"]
      },
      {
        module: "Module 4: Analytics, Email & Lead Funnels",
        topics: ["Google Analytics 4 setup, event tracking, user journeys", "Email marketing with Mailchimp/Sendinblue", "Canva graphic design for promotional social posts and flyers", "Freelancing on Upwork and Fiverr as a digital marketer"]
      }
    ],
    prerequisites: "Basic internet browsing knowledge.",
    certification: "Certified Digital Marketing Professional (CDMP)"
  }
];

// Helper functions for courses
function getCourseById(id) {
  return COURSES_DATA.find(c => c.id === id);
}

function getAllCourses() {
  return COURSES_DATA;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COURSES_DATA, getCourseById, getAllCourses };
}
