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
  ju,
  gotland,
  destinationgotland,
  upwork,
  ChapterChaser,
  Jonkoping
} from "../assets";

export const navLinks = [{
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

const socialLinks = [{
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


const services = [{
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

const technologies = [{
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

const experiences = [{
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
  {
    title: "Freelancer Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#383E56",
    date: "October 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Study tutor",
    company_name: "Region Gotland",
    icon: gotland,
    iconBg: "#383E56",
    date: "October 2020 - June 2022",
    points: [
      "Provided academic support to students in computer science courses, including Data Structures and Algorithms, Web Development, and Mobile Development.",
      "Facilitated group discussions and provided one-on-one assistance to students to help them understand complex concepts.",
      "Graded assignments and provided constructive feedback to students.",
    ],
  },
  {
    title: "Terminal Staff",
    company_name: "Destination Gotland",
    icon: destinationgotland,
    iconBg: "#383E56",
    date: "June 2021 - August 2023",
    points: [
      "As a terminal staff at Destination Gotland in Visby, I handled customer service tasks such as bookings and check-ins, contributing to an efficient and safe flow of passengers, which strengthened my skills in communication and organization."
    ]
  }
];

const educations = [{
  title: "Bachelor of Science in computer science: \b Software Development and Mobile Platforms",
  company_name: "Jönköping University",
  icon: ju,
  iconBg: "#383E56",
  date: "August 2022 - June 2025",
  points: [
    "I'm geared up to dive into the tech industry with a robust foundation in computer engineering, honed through my studies in Software Engineering and Mobile Platforms. My education has equipped me with cutting-edge skills in web and mobile app development, emphasizing seamless integration for peak performance and security. Beyond technical prowess, I've cultivated a knack for solving complex problems, embracing creativity, and fostering collaboration. With an eye on the future, I'm ready to contribute to innovative projects or pursue advanced studies, all while understanding the crucial interplay between technology and business processes.",
    "Relevant courseWork: Data Structures and Algorithms, Web Development, Android Development, iOS Development, Software Engineering, Object Oriented Programming, OOA/D, Databases"
  ],
}];

const testimonials = [{
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },

  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [{
    name: "Interactive Developer's Showcase",
    description: "A personal portfolio that goes beyond the ordinary, crafted with React.js and styled with Tailwind CSS. This site is not just a resume but an immersive experience, powered by Three.js to display my projects in 3D, showcasing my skills and the creative solutions I bring to web development.",
    tags: [{
        name: "react.js",
        color: "text-blue-500",
      },
      {
        name: "three.js",
        color: "text-green-500",
      },
      {
        name: "tailwindcss",
        color: "text-teal-500",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Habib97SE/HabibDev",
  },
  {
    name: "Chapter Chaser",
    description: "Chapter Chaser is a SwiftUI-based iOS app designed to help book enthusiasts discover, organize, and track their reading.",
    tags: [{
        name: "swift",
        color: "text-orange-500",
      },
      {
        name: "swiftui",
        color: "text-purple-500",
      },
      {
        name: "API Integration",
        color: "text-pink-500",
      },
    ],
    image: ChapterChaser,
    source_code_link: "https://github.com/Habib97SE/Chapter-Chaser",
  },
  {
    name: "JKPG City",
    description: "A web application that helps users discover the best places to visit in Jönköping, Sweden. Users can explore the city's attractions, restaurants, and events, all in one place.",
    tags: [{
        name: "react.js",
        color: "text-blue-500",
      },
      {
        name: "Express.js",
        color: "text-yellow-500",
      },
      {
        name: "MySQL",
        color: "text-blue-700",
      },
    ],
    image: Jonkoping,
    source_code_link: "https://github.com/Habib97SE/jkpgcity",
  },
];




const contact = {
  title: "Get in Touch",
  subtitle: "Contact.",
  description: "I'm always on the lookout for new opportunities and collaborations. Whether you have a project in mind or just want to say hello, don't hesitate to reach out. Fill out the form, so I'll get back to you as soon as possible!",
  nameLabel: "Name",
  namePlaceholder: "Your name here...",
  emailLabel: "Email",
  emailPlaceholder: "Your email address...",
  messageLabel: "Message",
  messagePlaceholder: "Your message here...",
  buttonLabel: "Send",
  buttonLabelSending: "Sending...",
  errorSendingEmail: "Something went wrong, please try again later.",
  successSendingEmail: "Your message has been sent successfully.",
  errorInvalidEmail: "Please enter a valid email address.",
  errorEmptyFields: "Please fill in all fields.",
  declinePrivacyPolicy: "You have declined our privacy policy. You can't send a message without accepting it.",
  acceptPrivacyPolicy: "You have accepted our privacy policy.",
  privacyPolicyDescription: "By submitting your name and email, you consent to allow me to store and use your information for the sole purpose of responding to your inquiry. Your data will be handled in accordance with our privacy practices, ensuring protection and confidentiality. I will not share your information with any third party, and you can request to delete your data at any time.",
  privacyPolicyTitle: "Privacy Policy",
  acceptPrivacyPolicyLabel: "Accept",
  declinePrivacyPolicyLabel: "Decline",
}


export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  educations,
  socialLinks,
  contact
};