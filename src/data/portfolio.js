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
    position: "Freshman Chaperone",
    employmentType: "Volunteer",
    location: "Bekasi, Indonesia",
    startDate: "2025-06-13",
    endDate: "2026-07-03",
    current: false,
    description:
      "Supported freshman activities and collaborated with other volunteers during university orientation.",
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
  { name: "C", category: "Languages", level: "Working", sortOrder: 1 },
  { name: "Java", category: "Languages", level: "Learning", sortOrder: 2 },
  {
    name: "JavaScript",
    category: "Languages",
    level: "Learning",
    sortOrder: 3,
  },
  { name: "Python", category: "Languages", level: "Working", sortOrder: 4 },
  {
    name: "TypeScript",
    category: "Languages",
    level: "Learning",
    sortOrder: 5,
  },
  { name: "HTML", category: "Frontend", level: "Working", sortOrder: 6 },
  { name: "CSS", category: "Frontend", level: "Working", sortOrder: 7 },
  { name: "React", category: "Frontend", level: "Learning", sortOrder: 8 },
  { name: "Next.js", category: "Frontend", level: "Learning", sortOrder: 9 },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    level: "Learning",
    sortOrder: 10,
  },
  { name: "Node.js", category: "Backend", level: "Learning", sortOrder: 11 },
  { name: "Express", category: "Backend", level: "Learning", sortOrder: 12 },
  { name: "NestJS", category: "Backend", level: "Learning", sortOrder: 13 },
  { name: "MongoDB", category: "Databases", level: "Learning", sortOrder: 14 },
  {
    name: "PostgreSQL",
    category: "Databases",
    level: "Learning",
    sortOrder: 15,
  },
  { name: "Prisma", category: "Databases", level: "Learning", sortOrder: 16 },
  { name: "Docker", category: "Tools", level: "Learning", sortOrder: 17 },
  { name: "Git & GitHub", category: "Tools", level: "Working", sortOrder: 18 },
];

export const projects = [
  {
    title: "Realla Web",
    slug: "realla-web",
    projectType: "Personal project",
    goal: "Present professional identity, experience, technical skills, and selected work in a cohesive portfolio.",
    status: "completed",
    shortDescription:
      "A portfolio platform presenting professional identity, experience, technical skills, and project case studies.",
    description:
      "A personal portfolio platform originally developed with React, TypeScript, Vite, and a full-stack architecture. This Elara version is being rebuilt as a static frontend, with locally defined portfolio data and direct contact links.",
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "Express",
      "MongoDB",
      "Docker",
    ],
    repositoryUrl: "https://github.com/EllaUktolseja/realla-web",
    liveUrl: "",
    featured: true,
    sortOrder: 1,
  },
  {
    title: "Rookees",
    slug: "rookees",
    projectType: "Group project",
    goal: "Introduce the browkies product, showcase its presentation, and make it easy for customers to submit reviews or place orders.",
    status: "ongoing",
    shortDescription:
      "A youthful product showcase for a brownie-cookie treat, designed to introduce the product and connect with potential customers.",
    description:
      "A product-focused website built around visual storytelling, product presentation, and direct customer contact.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repositoryUrl: "https://github.com/EllaUktolseja/rookees",
    liveUrl: "",
    featured: true,
    sortOrder: 2,
  },
  {
    title: "GY-O-REAL E-Commerce",
    slug: "gy-o-real-e-commerce",
    goal: "Build an e-commerce experience with a storefront, API, and relational data foundation.",
    status: "ongoing",
    shortDescription:
      "A full-stack e-commerce platform with a modern storefront, API, and relational database.",
    description:
      "An e-commerce project using Next.js, NestJS, PostgreSQL, and Prisma. The platform is being developed in stages, from application foundations and catalog functionality toward commerce workflows.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "Docker",
    ],
    progress: 55,
    currentFocus: [
      "Product and category API foundations",
      "Connecting the storefront to the backend",
      "Planning authentication, cart, and checkout workflows",
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
    goal: "Showcase baked products and collect community feedback through a dedicated web experience.",
    status: "planning",
    shortDescription:
      "A planned cookie showcase and community feedback platform for gathering real-world product feedback.",
    description:
      "A planned web application combining product presentation with a community feedback workflow.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    repositoryUrl: "https://github.com/EllaUktolseja/FoodFoundry",
    liveUrl: "",
    featured: true,
    sortOrder: 4,
  },
  {
    title: "Food Waste",
    slug: "food-waste",
    goal: "Connect customers with discounted surplus food to help make excess food more accessible and reduce waste.",
    status: "completed",
    shortDescription:
      "A marketplace prototype connecting users with discounted surplus food.",
    description:
      "A mobile-first marketplace concept focused on reducing food waste and making surplus food more accessible.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Docker", "Go"],
    repositoryUrl: "",
    liveUrl: "",
    featured: false,
    sortOrder: 5,
  },
  {
    title: "Veritas",
    slug: "veritas",
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
