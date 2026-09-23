import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  kotlin,
  html,
  css,
  cpp,
  reactjs,
  redux,
  tailwind,
  nodejs,
  androidjetpack,
  git,
  google,
  ocean,
  traffic,
  foodorder,
  smartbudgetai,
  python,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Android Developer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: creator,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Systems Developer (C++)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Android Jetpack",
    icon: androidjetpack,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Git",
    icon: git,
  },
];

const additionalSkills = [
  "FastAPI",
  "LangGraph",
  "Gemini API",
  "PyTorch",
  "OpenCV",
  "YOLOv5",
  "Next.js",
  "Docker",
  "Firebase",
  "REST APIs",
  "CI/CD",
];

const experiences = [
  {
    title: "Android Developer Virtual Intern",
    company_name: "Google",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2025 - March 2025",
    points: [
      "Worked on Android application development using Kotlin/Java, implementing UI components, activity lifecycle management, and API integration.",
      "Gained hands-on experience with Android Studio and modern Android development practices.",
      "Technologies Used: Kotlin/Java, XML (UI layouts), REST APIs, Firebase, Git/GitHub.",
      "Integrated third-party REST APIs to enable real-time data fetching, improving app responsiveness and delivering dynamic user experiences.",
    ],
  },
];

const Achievements = [
  {
    description:
      "Participated in Synapse.AI Hackathon organized by Delhi Technological University and contributed to the development of an innovative solution.",
    name: "DTU Synapse.AI",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b5/DTU%2C_Delhi_official_logo.png",
  },
  {
    description:
      "Developed an Ocean Hazards Intelligence Platform at SIH 2025 for [Ministry of Earth Sciences (MoES)], integrating real-time social media analytics and crowdsourced reporting.",
    name: "SIH 2025",
    image: "https://i.ytimg.com/vi/znMbKz6ZPno/maxresdefault.jpg",
  },
];

const projects = [
  {
    name: "Ocean Hazards Intelligence Platform",
    description:
      "A real-time ocean hazard intelligence platform built for the Ministry of Earth Sciences (SIH 2025), integrating social media analytics, crowdsourced reporting, and live hazard alerts to help coastal communities stay safe.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJS",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
    ],
    image: ocean,
    source_code_link: "https://github.com/namankkapoor7/ocean-hazard-intelligence-platform",
  },
  {
    name: "Smart Traffic Management System",
    description:
      "An AI-powered traffic management system using computer vision and deep learning to detect vehicles, analyse traffic density in real time, and dynamically adjust signal timings to reduce congestion.",
    tags: [
      {
        name: "OpenCv",
        color: "blue-text-gradient",
      },
      {
        name: "Pytorch",
        color: "green-text-gradient",
      },
      {
        name: "YOLOv5",
        color: "pink-text-gradient",
      },
    ],
    image: traffic,
    source_code_link: "https://github.com/Kushagra1612/Smart-Traffic-Management-System",
  },
  {
    name: "Food Order App",
    description:
      "A full-stack food ordering application where users can browse restaurants, add items to cart, and place orders seamlessly — built with a responsive UI and real-time order management.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: foodorder,
    source_code_link: "https://github.com/Kushagra1612/Food_Ordering_App",
  },
  {
    name: "SmartBudget AI",
    description:
      "An AI-powered personal finance manager to track expenses, manage budgets, and get smart insights — powered by Gemini AI, anomaly detection, and financial health scoring.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FastAPI",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "LangGraph",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini API",
        color: "green-text-gradient",
      },
    ],
    image: smartbudgetai,
    source_code_link: "https://github.com/Kushagra1612/SmartBudget-AI",
    live_link: "https://smartbudgetaii.vercel.app/",
  },
];

export { services, technologies, additionalSkills, experiences, Achievements, projects };
