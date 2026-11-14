export const profile = {
  name: "Gabriella Uktolseja",
  headline: "Undergraduate Software Engineer",
  bio: "Computer science student who enjoys turning ideas into useful digital products. Interested in full-stack development, software engineering, and building practical web experiences.",
  email: "agatha.uktolseja@gmail.com",
  location: "Bekasi, Indonesia",
  imageUrl: "/images/profilePict.jpg",
  linkedinUrl: "https://www.linkedin.com/in/ellauktolseja/",
  githubUrl: "https://github.com/EllaUktolseja",
  whatsappUrl: "https://wa.me/6285710304280",
};

export const experiences = [
  {
    company: "BINUS University",
    position: "Part-Time Laboratory Assistant",
    employmentType: "Part Time",
    location: "Bekasi, Indonesia",
    startDate: "2025-09-09",
    endDate: "2026-09-09",
    current: false,
    description:
      "Supported programming laboratory sessions and assisted students in understanding programming concepts and solving practical exercises using Java, Python, and C.",
    technologies: ["Java", "Python", "C"],
  },
  {
    company: "BINUS University",
    position: "Freshman Partner",
    employmentType: "Contract",
    location: "Bekasi, Indonesia",
    startDate: "2025-09-08",
    endDate: "2026-07-13",
    current: false,
    description:
      "Executed a year-long mentorship program with weekly check-ins to guide freshmen through university transitions, achieving zero dropouts and a 100% orientation completion rate.",
    technologies: [],
  },
  {
    company: "BINUS University",
    position: "Freshman Leader",
    employmentType: "Contract",
    location: "Bekasi, Indonesia",
    startDate: "2025-08-18",
    endDate: "2025-09-04",
    current: false,
    description:
      "Mentored 50+ incoming freshmen through academic and social transitions while facilitating interactive orientation sessions on campus policies and resources to foster early engagement.",
    technologies: [],
  },
];

export const educations = [
  {
    institution: "BINUS University",
    degree: "Sarjana Komputer (S.Kom)",
    field: "Computer Science",
    startDate: "2023-09-08",
    endDate: "2028-08-08",
    description:
      "Studying computer science, software engineering, databases, algorithms, and web application development.",
  },
];

export const skills = [
  {
    name: "C",
    category: "Programming Languages",
    level: "Working",
    sortOrder: 1,
  },
  {
    name: "Python",
    category: "Programming Languages",
    level: "Familiar",
    sortOrder: 2,
  },
  {
    name: "Java",
    category: "Programming Languages",
    level: "Familiar",
    sortOrder: 3,
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    level: "Learning",
    sortOrder: 4,
  },
  {
    name: "TypeScript",
    category: "Programming Languages",
    level: "Learning",
    sortOrder: 5,
  },

  {
    name: "HTML",
    category: "Frontend",
    level: "Working",
    sortOrder: 6,
  },
  {
    name: "CSS",
    category: "Frontend",
    level: "Working",
    sortOrder: 7,
  },
  {
    name: "React",
    category: "Frontend",
    level: "Learning",
    sortOrder: 8,
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Learning",
    sortOrder: 9,
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Learning",
    sortOrder: 10,
  },

  { name: "Node.js", category: "Backend", level: "Learning", sortOrder: 11 },
  { name: "Express", category: "Backend", level: "Learning", sortOrder: 12 },
  { name: "NestJS", category: "Backend", level: "Learning", sortOrder: 13 },

  {
    name: "MySQL",
    category: "Database & ORM",
    level: "Working",
    sortOrder: 14,
  },
  {
    name: "MongoDB",
    category: "Database & ORM",
    level: "Learning",
    sortOrder: 15,
  },
  {
    name: "PostgreSQL",
    category: "Database & ORM",
    level: "Learning",
    sortOrder: 16,
  },
  {
    name: "Prisma",
    category: "Database & ORM",
    level: "Learning",
    sortOrder: 17,
  },

  {
    name: "Git & GitHub",
    category: "Tools & DevOps",
    level: "Familiar",
    sortOrder: 18,
  },
  {
    name: "Docker",
    category: "Tools & DevOps",
    level: "Familiar",
    sortOrder: 19,
  },

  {
    name: "Linux (Ubuntu)",
    category: "Operating Systems",
    level: "Familiar",
    sortOrder: 20,
  },

  { name: "AWS", category: "Cloud", level: "Learning", sortOrder: 21 },
];

export const projects = [
  {
    title: "Realla Web",
    slug: "realla-web",
    projectType: "Personal project",
    year: 2026,
    role: "Web Designer and Developer",
    contribution:
      "Designed and developed the website using vanilla HTML, CSS, and JavaScript, including product presentation, customer review integration, and WhatsApp ordering flow.",
    description:
      "A personal portfolio platform originally developed using React, TypeScript, and Vite, with an Express and MongoDB backend. The project explored a full-stack portfolio architecture, although the backend deployment was not successfully completed.",
    goal: "Present professional identity, experience, technical skills, and selected work in a cohesive portfolio.",
    status: "completed",
    shortDescription:
      "A portfolio platform presenting professional identity, experience, technical skills, and project case studies.",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Express",
      "MongoDB",
      "Docker",
    ],
    repositoryUrl: "https://github.com/EllaUktolseja/realla-web",
    previewImage: "/images/projects/realla-web/thumbnail.png",
    screenshots: [
      {
        src: "/images/projects/realla-web/screenshots/home.png",
        title: "Home Page",
        description: "The main landing page and personal introduction.",
      },
      {
        src: "/images/projects/realla-web/screenshots/projects.png",
        title: "Projects Page",
        description: "An overview of selected portfolio projects.",
      },
      {
        src: "/images/projects/realla-web/screenshots/project-detail.png",
        title: "Project Detail",
        description: "A detailed presentation of an individual project.",
      },
    ],
    liveUrl: "",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Rookees",
    slug: "rookees",
    projectType: "Academic project",
    year: 2026,
    role: "Web Designer and Developer",
    contribution:
      "Designed and developed the website using vanilla HTML, CSS, and JavaScript, including product presentation, customer review integration, and WhatsApp ordering flow.",
    goal: "Introduce the browkies product, showcase its presentation, and make it easy for customers to submit reviews or place orders.",
    status: "ongoing",
    shortDescription:
      "A youthful product showcase for a brownie-cookie treat, designed to introduce the product and connect with potential customers.",
    description:
      "A product showcase website for an artisanal browkies business. Built with vanilla HTML, CSS, and JavaScript, the website presents product information, collects customer reviews through Google Apps Script, and provides direct WhatsApp ordering.",
    technologies: ["HTML", "CSS", "JavaScript", "Google Apps Script"],
    repositoryUrl: "https://github.com/EllaUktolseja/rookees",
    liveUrl: "",
    featured: true,
    sortOrder: 2,
  },
  {
    title: "GY-O-REAL E-Commerce",
    slug: "gy-o-real-e-commerce",
    projectType: "Personal project",
    year: 2026,
    role: "Web Designer and Developer",
    contribution:
      "Established an initial monorepo structure, configured PostgreSQL and Prisma, and implemented early category and product CRUD APIs. The existing implementation is being reassessed as part of a broader system redesign.",
    goal: "Build an e-commerce experience with a storefront, API, and relational data foundation.",
    status: "ongoing",
    shortDescription:
      "A full-stack e-commerce platform with a modern storefront, API, and relational database.",
    description:
      "A planned full-stack e-commerce platform intended to follow real-world commerce system practices. The project is undergoing architectural planning and redesign, covering application structure, database design, commerce workflows, and cloud deployment strategy before the next implementation phase.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    currentFocus: [
      "Reassessing the existing system architecture and application structure",
      "Planning production-ready e-commerce workflows and database design",
      "Evaluating cloud infrastructure and deployment strategy",
    ],
    milestones: [
      { title: "Monorepo foundation", completed: true },
      { title: "API foundation", completed: true },
      { title: "Database foundation", completed: true },
      { title: "Catalog functionality", completed: true },
      { title: "Commerce workflows", completed: false },
      { title: "Testing and deployment", completed: false },
    ],
    repositoryUrl: "https://github.com/EllaUktolseja/GY-O-REAL-E-Commerce",
    liveUrl: "",
    featured: true,
    sortOrder: 3,
  },
  {
    title: "FoodFoundry",
    slug: "foodfoundry",
    projectType: "Personal project",
    year: 2026,
    role: "Project Designer",
    contribution:
      "Designed the overall structure and user experience for the cookie showcase and community feedback platform.",
    goal: "Showcase baked products and collect community feedback through a dedicated web experience.",
    status: "planning",
    shortDescription:
      "A planned full-stack food discovery and review platform covering restaurants, street food, local cuisine, and packaged food products.",
    description:
      "A full-stack food review platform concept designed to help users discover and explore different kinds of food. From restaurants and local street food to packaged products, the platform aims to bring food experiences and community reviews together as a useful reference for people looking for something new to try.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    repositoryUrl: "https://github.com/EllaUktolseja/FoodFoundry",
    liveUrl: "",
    featured: true,
    sortOrder: 4,
  },
  {
    title: "Food Waste",
    slug: "food-waste",
    projectType: "Academic project",
    year: 2026,
    goal: "Connect customers with discounted surplus food to help make excess food more accessible and reduce waste.",
    role: "Web Designer and Frontend Developer",
    contribution:
      "Designed and developed the frontend of a marketplace prototype, focusing on user experience and mobile-first design.",
    status: "completed",
    shortDescription:
      "A food surplus marketplace that helps restaurants sell discounted leftover food while allowing consumers to discover and order affordable meals for self-pickup.",
    description:
      "A food surplus marketplace designed to reduce restaurant food waste by connecting merchants with consumers looking for more affordable meals. Restaurants can list surplus food that is still safe for consumption at discounted prices, while consumers can discover nearby offers, place orders, make payments, and collect their purchases directly from the merchant. The platform provides separate experiences for consumers and merchants, supporting a more sustainable approach to food distribution.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Docker", "Go"],
    repositoryUrl: "",
    liveUrl: "",
    featured: false,
    sortOrder: 5,
  },
  {
    title: "Veritas",
    slug: "veritas",
    projectType: "Academic project",
    year: 2026,
    role: "Web Designer and Frontend Developer",
    contribution:
      "Designed and developed the frontend of a fake-news detection platform, focusing on user experience and data visualization.",
    goal: "Help users assess potentially misleading news through text analysis and machine-learning workflows.",
    status: "completed",
    shortDescription:
      "A machine learning platform for analyzing potentially misleading news content.",
    description:
      "A web-based fake-news detection project using NLP and machine learning, with article analysis and URL-based content extraction workflows.",
    technologies: [
      "JavaScript",
      "Python",
      "Flask",
      "BERT",
      "Logistic Regression",
      "Docker",
    ],
    repositoryUrl: "https://github.com/EllaUktolseja/Veritas",
    liveUrl: "",
    featured: false,
    sortOrder: 6,
  },
  {
    title: "Affili.io",
    slug: "affilio",
    projectType: "Competition project",
    year: 2026,
    role: "Web Designer and Frontend Developer",
    contribution:
      "Designed and developed the frontend of a market intelligence platform, focusing on user experience and data visualization.",
    goal: "Support affiliate marketers in exploring product opportunities through market and trend information.",
    status: "completed",
    shortDescription:
      "A market intelligence concept for affiliate marketers evaluating product opportunities.",
    description:
      "A platform concept for monitoring product trends, exploring opportunities, and supporting data-informed affiliate marketing decisions.",
    technologies: ["Next.js", "React", "Vercel"],
    repositoryUrl: "https://github.com/EllaUktolseja/Affili.io-Alibaba",
    liveUrl: "",
    featured: false,
    sortOrder: 7,
  },
  {
    title: "JobSeek",
    slug: "jobseek",
    projectType: "Academic project",
    year: 2026,
    role: "Web Designer and Frontend Developer",
    contribution:
      "Designed and developed the frontend of a job recommendation platform, focusing on user experience and data visualization.",
    goal: "Recommend job opportunities that align with a user profile using a trained model.",
    status: "completed",
    shortDescription:
      "A machine learning application for recommending relevant job opportunities.",
    description:
      "An interactive job recommendation project built around a trained model and a Streamlit interface.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
    repositoryUrl: "https://github.com/EllaUktolseja/AIJobSeeker",
    liveUrl: "",
    featured: false,
    sortOrder: 8,
  },
  {
    title: "Gradia",
    slug: "gradia",
    projectType: "Personal project",
    year: 2026,
    role: "Project Designer",
    contribution:
      "Designed the overall structure and user experience for the AI-assisted grading platform.",
    goal: "Explore how AI-assisted workflows could support academic grading and assessment.",
    status: "planning",
    shortDescription:
      "A planned AI-assisted grading platform for academic assessment workflows.",
    description:
      "A proposed platform to help organize submissions, support grading workflows, and provide assessment insights.",
    technologies: ["React", "TypeScript", "Node.js", "Gemini API"],
    repositoryUrl: "https://github.com/EllaUktolseja/Gradia",
    liveUrl: "",
    featured: false,
    sortOrder: 9,
  },
  {
    title: "Rewoven",
    slug: "rewoven",
    projectType: "Personal project",
    year: 2026,
    role: "Project Designer",
    contribution:
      "Designed the overall structure and user experience for the digital platform exploring reuse and sustainable product workflows.",
    goal: "Explore a digital workflow for reuse and sustainable product transformation.",
    status: "planning",
    shortDescription:
      "A planned digital platform exploring reuse and sustainable product workflows.",
    description:
      "A concept for a future application focused on reuse, transformation, and sustainability-oriented workflows.",
    technologies: ["React", "TypeScript", "Node.js"],
    repositoryUrl: "https://github.com/EllaUktolseja/Rewoven",
    liveUrl: "",
    featured: false,
    sortOrder: 10,
  },
  {
    title: "ChainPulse",
    slug: "chainpulse",
    projectType: "Personal project",
    year: 2026,
    role: "Project Designer",
    contribution:
      "Designed the overall structure and user experience for the monitoring platform.",
    goal: "Surface service health, events, and operational signals in a monitoring dashboard.",
    status: "planning",
    shortDescription:
      "A planned monitoring platform for service health and operational visibility.",
    description:
      "A concept for a monitoring dashboard that could surface system health, events, and operational insights.",
    technologies: ["React", "TypeScript", "Node.js"],
    repositoryUrl: "https://github.com/EllaUktolseja/Chainpulse",
    liveUrl: "",
    featured: false,
    sortOrder: 11,
  },
];

export const getProjects = () =>
  [...projects].sort((a, b) => a.sortOrder - b.sortOrder);

export const getProjectBySlug = (slug) =>
  projects.find((project) => project.slug === slug) ?? null;
