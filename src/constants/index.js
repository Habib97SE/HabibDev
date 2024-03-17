import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  kubernetes,
  carrent,
  jobit,
  tripguide,
  luday,
  python,
  flask,
  swift,
  springboot,
  github,
  linkedin,
  x,
  project1,
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
    id: "social-media",
    title: "Social Media",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const socialLinks = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/Habib97SE",
    username: "Habib97SE",
    icon: github,
    description: "My GitHub profile, you can see my projects and contributions.",
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/habibhezarehee/",
    username: "Habib Hezarehee",
    icon: linkedin,
    description: "My LinkedIn profile, you can see my professional background and experiences.",
  },
  {
    id: 3,
    title: "X (Twitter)",
    link: "https://twitter.com/Habib97SE",
    username: "Habib97SE",
    icon: x,
    description: "My Twitter profile, you can see my thoughts and updates.",
  }
]


const services = [
  {
    title: "Frontend Developer",
    icon: web,
    description: "I can build scalable and responsive web applications using modern web technologies like React.js, Next.js, and Tailwind CSS."
  },
  {
    title: "iOS Developer",
    icon: mobile,
    description: "I can develop native iOS applications using Swift and SwiftUI, and also integrate with backend services."
  },
  {
    title: "Backend Developer",
    icon: backend,
    description: "I can develop scalable and efficient backend services using Node.js, Express.js, and Spring boot."
  },
  {
    title: "Java Developer",
    icon: creator,
    description: "I can develop Java applications using Spring Boot, and also integrate with backend services."
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },

];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Luday AB",
    icon: luday,
    iconBg: "#383E56",
    date: "March 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to create high-quality products, employing Agile methodologies to ensure adaptability and efficient project progression.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Interactive Developer's Showcase:",
    description: "A personal portfolio that goes beyond the ordinary, crafted with React.js and styled with Tailwind CSS. This site is not just a resume but an immersive experience, powered by Three.js to display my projects in 3D, showcasing my skills and the creative solutions I bring to web development.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, socialLinks };
