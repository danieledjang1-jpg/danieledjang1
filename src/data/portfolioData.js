const baseUrl = import.meta.env.BASE_URL;

export const portfolio = {
  name: "Daniel Edjang",
  firstName: "Daniel",
  lastName: "Edjang",
  title: "Frontend Web Developer",
  introduction:
    "I build responsive websites using HTML, CSS, Bootstrap and JavaScript. I enjoy creating clean, modern and user-friendly web interfaces.",
  biography:
    "I'm a developer based in Port Harcourt, Nigeria, passionate about creating responsive, modern and user-friendly websites. I enjoy solving problems with HTML, CSS, Bootstrap and JavaScript, and keep learning as I build useful digital experiences.",
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
    { value: "03", label: "Featured projects" },
    { value: "4+", label: "Core technologies" },
    { value: "100%", label: "Dedication" },
    { value: "Always", label: "Learning" },
  ],
  skills: [
    { name: "HTML", category: "Frontend", level: 90, icon: "html" },
    { name: "CSS", category: "Frontend", level: 85, icon: "css" },
    { name: "JavaScript", category: "Frontend", level: 65, icon: "javascript" },
    { name: "Bootstrap", category: "Frontend", icon: "bootstrap" },
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
  ],
  services: [
    {
      title: "Frontend Development",
      description:
        "Responsive, accessible interfaces built with HTML, CSS, Bootstrap and JavaScript.",
      icon: "layout",
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
