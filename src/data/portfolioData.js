const baseUrl = import.meta.env.BASE_URL;

export const portfolio = {
  name: "Daniel Edjang",
  firstName: "Daniel",
  lastName: "Edjang",
  title: "Frontend Developer & UI/UX Designer",
  introduction:
    "I'm a Frontend Developer and UI/UX Designer passionate about building modern, responsive, and user-friendly digital experiences. I work with HTML, CSS, Bootstrap, JavaScript, and React to develop interactive web applications. I also use Figma to design intuitive interfaces and SQL Server to work with databases.",
  biography:
    "Based in Port Harcourt, Nigeria, I'm a Frontend Developer and UI/UX Designer passionate about building modern, responsive, and user-friendly digital experiences. I work with HTML, CSS, Bootstrap, JavaScript, and React to develop interactive web applications. I also use Figma to design intuitive interfaces and SQL Server to manage and work with databases. My goal is to combine creativity, technology, and problem-solving to build digital products that look great, work smoothly, and deliver real value.",
  portrait: `${baseUrl}images/profile.jpg.jpeg`,
  cv: `${baseUrl}CV/Daniel_Edjang_Remote_Frontend_CV_Updated.docx`,
  email: "danieledjang1@gmail.com",
  phone: "",
  whatsapp: "",
  location: "Port Harcourt, Nigeria",
  availability:
    "Open to freelance work, internships and frontend development opportunities",
  formEndpoint: "https://formsubmit.co/ajax/danieledjang1@gmail.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/danieledjang1-jpg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danieledjang1" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/1GAvG8zMSD/?mibextid=wwXIfr",
    },
    { label: "Instagram", href: "https://www.instagram.com/danieledjang1" },
  ],
  stats: [
    { value: "11", label: "Featured projects" },
    { value: "7+", label: "Tools I work with" },
    { value: "100%", label: "Dedication" },
    { value: "Always", label: "Learning" },
  ],
  skills: [
    { name: "HTML", category: "Frontend", level: 90, icon: "html" },
    { name: "CSS", category: "Frontend", level: 85, icon: "css" },
    { name: "JavaScript", category: "Frontend", level: 65, icon: "javascript" },
    { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },
    { name: "React", category: "Frontend", icon: "react" },
    { name: "Figma", category: "UI/UX Design", icon: "figma" },
    { name: "SQL Server", category: "Database", icon: "database" },
  ],
  projects: [
    {
      id: "student-dashboard",
      title: "Student Dashboard",
      category: "Frontend",
      description:
        "A responsive student dashboard with a clean interface for managing student information.",
      image: `${baseUrl}images/project1.jpg.jpeg`,
      imageAlt: "Student Dashboard project preview",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://danielstudentdashboard.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "neural-matcher",
      title: "Neural Matcher Game",
      category: "Frontend",
      description:
        "An interactive memory matching game with score tracking and responsive gameplay.",
      image: `${baseUrl}images/project2.jpg.png`,
      imageAlt: "Neural Matcher Game project preview",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://danielneuralmatcherv1.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "d-kitchen",
      title: "D-Kitchen Restaurant",
      category: "Frontend",
      description:
        "A restaurant website with a food menu, service sections and a mobile-friendly layout.",
      image: `${baseUrl}images/project3.jpg`,
      imageAlt: "D-Kitchen Restaurant project preview",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      liveUrl: "https://danieldkitchenrestaurantwebsite.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "westhill-hospital",
      title: "Westhill Hospital",
      category: "Web Project",
      description:
        "A hospital website presenting healthcare services and helping visitors find appointment and patient information.",
      image: `${baseUrl}images/westhill-hospital-preview.jpg`,
      imageAlt: "Westhill Hospital website preview",
      technologies: [],
      liveUrl: "https://westhillhospital.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "d-bank",
      title: "D-Bank",
      category: "Web Project",
      description:
        "A banking application experience with a secure sign-in interface and account registration.",
      image: `${baseUrl}images/d-bank-preview.jpg`,
      imageAlt: "D-Bank sign-in page preview",
      technologies: [],
      liveUrl: "https://d-bank1.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "dcraftcart",
      title: "Dcraftcart",
      category: "Web Project",
      description:
        "A customisation-focused online experience for bringing personal design ideas to life.",
      image: `${baseUrl}images/dcraftcart-preview.jpg`,
      imageAlt: "Dcraftcart project website preview",
      technologies: [],
      liveUrl: "https://dc-art-cart.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "dhabbit",
      title: "Dhabbit Habit Tracker",
      category: "Web Project",
      description:
        "A habit-building experience for tracking small daily wins and developing consistent routines.",
      image: `${baseUrl}images/dhabbit-preview.jpg`,
      imageAlt: "Dhabbit Habit Tracker website preview",
      technologies: [],
      liveUrl: "https://dhabbit-habit-tracker.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "dlife-guard-ai",
      title: "DLife Guard AI",
      category: "Web Project",
      description:
        "A personal AI companion prototype for wellbeing check-ins, everyday questions and routines.",
      image: `${baseUrl}images/dlife-guard-ai-preview.jpg`,
      imageAlt: "DLife Guard AI project website preview",
      technologies: [],
      liveUrl: "https://dlife-guard-ai.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "dskilllink",
      title: "DskillLink",
      category: "Web Project",
      description:
        "A service that helps people discover skilled professionals nearby.",
      image: `${baseUrl}images/dskilllink-preview.jpg`,
      imageAlt: "DskillLink project website preview",
      technologies: [],
      liveUrl: "https://dskilllink.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "mrfiga-consult",
      title: "MrFiga Corporate Consults",
      category: "Web Project",
      description:
        "A corporate consulting website introducing business support services in Port Harcourt.",
      image: `${baseUrl}images/mrfiga-consult-preview.jpg`,
      imageAlt: "MrFiga Corporate Consults website preview",
      technologies: [],
      liveUrl: "https://mrfiga-corporate-consult.netlify.app",
      repositoryUrl: "",
    },
    {
      id: "portech-agency",
      title: "Portech Agency",
      category: "Web Project",
      description:
        "A website agency landing page showcasing web design and digital solutions.",
      image: `${baseUrl}images/portech-agency-preview.jpg`,
      imageAlt: "Portech Agency website preview",
      technologies: [],
      liveUrl: "https://warm-beignet-2e9b74.netlify.app",
      repositoryUrl: "",
    },
  ],
  services: [
    {
      title: "Frontend Development",
      description:
        "Responsive, accessible interfaces built with HTML, CSS, Bootstrap, JavaScript and React.",
      icon: "layout",
    },
    {
      title: "UI/UX Design",
      description:
        "Intuitive interface layouts and design ideas explored in Figma.",
      icon: "design",
    },
    {
      title: "Business Websites",
      description:
        "Clear, mobile-friendly websites that help businesses present their services online.",
      icon: "building",
    },
    {
      title: "Personal Portfolios",
      description:
        "Professional portfolio sites that showcase your work, skills and contact details.",
      icon: "user",
    },
    {
      title: "Landing Pages",
      description:
        "Focused pages for sharing a product, service or important announcement.",
      icon: "panels",
    },
    {
      title: "Website Updates",
      description:
        "Content and layout updates for existing websites, scoped to your requirements.",
      icon: "wrench",
    },
    {
      title: "Responsive Design",
      description:
        "Layouts designed to work across phone, tablet and desktop screen sizes.",
      icon: "tablet",
    },
  ],
  samplePricing: [
    { label: "Landing page", price: 50000 },
    { label: "Personal portfolio", price: 75000 },
    { label: "Small business website", price: 150000 },
    { label: "Restaurant website", price: 120000 },
    { label: "School / hospital website", price: 200000 },
    { label: "Website maintenance", price: 20000 },
  ],
  contactServices: [
    "UI/UX Design",
    "Landing Page",
    "Personal Portfolio",
    "Business Website",
    "E-commerce Website",
    "Website Maintenance",
    "Other",
  ],
  budgetRanges: [
    "Under NGN 50,000",
    "NGN 50,000 - 100,000",
    "NGN 100,000 - 250,000",
    "NGN 250,000+",
    "Not sure yet",
  ],
};
