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
    title: "App Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "androidjetpack",
    icon: androidjetpack,
  }
];

const experiences = [
  {
    title: "Android Developer Virtual Intern",
    company_name: "Google",
    icon: google,
    iconBg: "#383E56",
    date: "Jan 2025 - March 2025",
    points: ["Worked on Android application development using Kotlin/Java, implementing UI components, activity lifecycle management, and API integration.",
              "Gained hands-on experience with Android Studio and modern Android development practices.",
              "Technologies Used: Kotlin/Java, XML (UI layouts), REST APIs, Firebase, Git/GitHub.",
              "Working on APIs acts as a bridge that allows two software applications to communicate with each other."
    ],
  },
];

const Achievements = [
  {
   description: "Participated in Synapse.AI Hackathon organized by Delhi Technological University and contributed to the development of an innovative solution.",
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
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
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
];

export { services, technologies, experiences, Achievements, projects };
