
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import canvaLogo from './assets/tech_logo/canva.png'; // Canva or other tools can be added here

// Experience & Education
import clubLogo from "./assets/company_logo/club_logo.png"; 
import ecellLogo from "./assets/company_logo/ecell_logo.png";
import rcplLogo from "./assets/company_logo/rcpl_logo.jpg.jpeg";
import uctLogo from "./assets/company_logo/uct_logo.png";
import cdacLogo from "./assets/company_logo/cdac_logo.png";
import KpsLogo from './assets/education_logo/School_logo.png';
import CocLogo from './assets/education_logo/College_logo.png';
import GecvLogo from './assets/education_logo/Gecv_logo.png';

// Projects
import TaskFlowImage from './assets/work_logo/Taskflow.png';
import QuizLogo from './assets/work_logo/Quiz.png';
import FaceLogo from './assets/work_logo/Face.png';
import VolumeLogo from './assets/work_logo/Hand.png';
import NariSurakshaLogo from './assets/work_logo/NariSuraksha.png';
import LibraryLogo from './assets/work_logo/Library.png';   

/**
 * SKILLS DATA 
 * Refined to match your primary tech stack
 */
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Canva', logo: canvaLogo }, 
    ],
  },
];
export const experiences = [
  {
    id: 0,
    role: "Artificial Intelligence & Machine Learning Intern",
    company: "UniConverge Technologies Pvt. Ltd. (UCT)",
    date: "Mar 2026 - Apr 2026",
    desc: "Successfully completed a 6-week Training cum Internship Program in Artificial Intelligence and Machine Learning. Developed practical knowledge of AI/ML concepts and industry-relevant skills through hands-on learning and project-based activities.",
    img: uctLogo,
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "Data Analysis",
      "Problem Solving",
    ],
  },

  {
    id: 1,
    role: "Fullstack Development Intern",
    company: "RCPL IIT Kanpur (ONLINE)",
    date: "May 25 - June 25, 2025",
    desc: "Completed an intensive offline industrial training program. Developed full-stack modules by integrating modern frontend interfaces with efficient PHP/MySQL backend architectures, focusing on scalable web solutions.",
    img: rcplLogo,
    skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: 2,
    role: "Trainee",
    company: "C-DAC Patna",
    date: "March 2025",
    desc: "Successfully completed the Bootcamp on Drone and Allied Technology organized by C-DAC Patna under the Swavlamban initiative. Gained practical exposure to Unmanned Aircraft Systems (UAS), drone technology, and emerging applications in the aerospace sector.",
    img: cdacLogo,
    skills: [
      "Drone Technology",
      "UAS Fundamentals",
      "Emerging Technologies",
      "Technical Learning",
      "Problem Solving",
    ],
  },
  {
    id: 3,
    role: "Coordinator",
    company: "Startup Cell GECV",
    date: "2023 - 2025",
    desc: "Spearheading the Startup Cell to cultivate an entrepreneurial ecosystem. Orchestrated high-impact workshops and pitch competitions while managing cross-functional teams to bridge the gap between ideas and execution.",
    img: ecellLogo,
    skills: [
      "Teamwork",
      "Problem-Solving",
      "Event Management",
      "Public Speaking",
    ],
  },

  {
    id: 4,
    role: "Active Member",
    company: "Coding Club",
    date: "2024 - Present",
    desc: "Engaged in a collaborative environment to solve complex algorithmic challenges. Contributed to peer-to-peer learning sessions, hackathons, and technical discussions to stay ahead of emerging industry trends.",
    img: clubLogo,
    skills: [
      "Data Structures",
      "Algorithms",
      "Collaborative Coding",
      "Technical Logic",
    ],
  },
];

/**
 * EDUCATION DATA
 */
export const education = [
  {
    id: 0,
    img: GecvLogo,
    school: "Government Engineering College Vaishali",
    date: "Sept 2023 - July 2027",
    grade: "8.33 CGPA",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    desc: "Currently pursuing a B.Tech with a focus on software development and computer science fundamentals. Engaged in rigorous coursework and hands-on projects to build a strong foundation in programming, algorithms, and system design.",
  },
  {
    id: 1,
    img: CocLogo,
    school: "COLLEGE OF COMMERCE, ARTS & SCIENCE, PATNA",
    date: "Sept 2020 - Aug 2022",
    grade: "78.2%",
    degree: "Intermediate in Science with Mathematics",
    desc: "Completed higher secondary education with a focus on core sciences and mathematics. Developed analytical thinking and problem-solving skills through rigorous coursework, laying the groundwork for a future in technology and engineering.",
  },
  {
    id: 2,
    img: KpsLogo,
    school: "Krishna Public School, Patna",
    date: "2020",
    grade: "86.4%",
    degree: "Class X (CBSE)",
    desc: "Completed Matriculation with a strong academic record, demonstrating proficiency in core subjects. Actively participated in extracurricular activities, fostering a well-rounded skill set and a passion for learning that continues to drive my academic and professional pursuits.",
  },
];

/**
 * PROJECTS DATA
 */
export const projects = [
  {
    id: 0,
    title: "TaskFlow - Full Stack Task Management Platform",
    description:
      "Developed a production-ready task management application with secure JWT authentication, role-based access control, task tracking, user dashboards, and MongoDB integration. Built using the MERN stack to streamline productivity and workflow management.",
    image: TaskFlowImage,
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API"],
    github: "https://github.com/Aizah0812/todo-website",
    webapp: "https://todo-website-navy-two.vercel.app/index.html ",
  },
  {
    id: 1,
    title: "NariSurakshaAI",
    description:
      "An AI-powered women safety platform that provides real-time threat detection, emergency alerts, live location tracking, fake call assistance, and quick access to safety resources for women.",
    image: NariSurakshaLogo,
    tags: ["Python", "Streamlit", "Machine Learning", "Pandas"],
    github: "https://github.com/Aizah0812/NarSuraksha-Ai",
    webapp: "https://narsuraksha-ai.streamlit.app/",
  },
  {
    id: 2,
    title: "Face Detection System",
    description:
      "An advanced computer vision project utilizing OpenCV to detect and track human faces in real-time via webcam feeds. Focuses on accuracy and low-latency processing.",
    image: FaceLogo,
    tags: ["Python", "OpenCV", "NumPy", "Computer Vision"],
    github: "https://github.com/Aizah0812/FaceDetection-",
    webapp: "https://kommodo.ai/i/MCf8O4AdZ2fihwlvOeHY",
  },
  {
    id: 3,
    title: "Hand Gesture Volume Control",
    description:
      "A touchless interface project that uses MediaPipe and OpenCV to control system volume through hand gestures, bridging the gap between human action and digital response.",
    image: VolumeLogo,
    tags: ["Python", "OpenCV", "MediaPipe", "Automation"],
    github: "https://github.com/yourusername",
    webapp: "https://kommodo.ai/i/J04E2LdVWQGhPmxFEDZE",
  },
  {
    id: 4,
    title: "Interactive Quiz App",
    description:
      "A dynamic quiz platform featuring category selection, timed questions, and an automated scoring system with a sleek, user-friendly interface.",
    image: QuizLogo,
    tags: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/Aizah0812/QuizApp",
    webapp: "https://quizmaster-hub.netlify.app/",
  },
  {
    id: 5,
    title: "Digital Library Management System",
    description:
      "A full-stack Library Management System featuring membership management, seat allocation, payment verification, and admin dashboard.",
    image: LibraryLogo,
    tags: ["React JS", "CSS3", "Node JS", "MongoDB", "Express"],
    github: "https://github.com/Aizah0812/TheStudyHub",
    webapp: "https://the-study-hub-7hk6.vercel.app/",
  },
];
