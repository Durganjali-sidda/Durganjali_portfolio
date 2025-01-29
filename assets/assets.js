import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    title: "Multi Vendor Food App ",
    description: "Mern Stack",
    bgImage: "/work-1.png",
    details: {
      description:
        "I developed a multivendor food app that facilitates vendors to manage their profiles, firms, and product listings. The backend is built using Express.js and Node.js, providing robust API endpoints for handling data such as vendor details, firm information, and product listings. The frontend is created with React, which allows vendors to submit forms for these details, and dynamically retrieves and displays data from the backend.",
      keyFeatures: [
        "Backend Development: Created a scalable backend with Express.js and Node.js to handle API requests and manage database interactions.",
        "Frontend Development: Built a React dashboard for vendors to easily submit and manage their information, with a functional connection to the backend API.",
        "Database Integration: Integrated with a database (such as PostgreSQL or MongoDB) for storing vendor and product details.",
        "API Documentation: Developed comprehensive backend API documentation, outlining all routes and expected responses to facilitate ease of use for developers and future integration.",
        "Backend-Frontend Interaction: Gained practical knowledge of how the frontend and backend communicate, particularly in handling form submissions and data retrieval.",
        "This project has been a great learning experience in full-stack development, providing insights into backend API development, frontend-backend interaction, and database management."
      ],
      
      githubLink: "https://eatsy-food-app-react.vercel.app/",
    },
  },
  {
    title: "Portfolio",
    description: "Next.js, Tailwind CSS",
    bgImage: "/work-2.png",
    details: {
      description: 
        "I built my portfolio using Next.js and Tailwind CSS to create a high-performance, SEO-friendly, and visually engaging website. Unlike traditional React single-page applications, this project utilizes Next.js pre-rendering techniques (Static Generation and Server-Side Rendering) to enhance speed and efficiency. It includes dark mode and light mode functionality for a better user experience, as well as dynamic animations using Framer Motion.",
      keyFeatures: [
        "Next.js Pre-rendering: Implemented Static Generation (SG) and Server-Side Rendering (SSR) to optimize performance and improve SEO.",
        "Dark Mode & Light Mode: Integrated theme toggling using React state to switch between dark and light themes dynamically.",
        "Tailwind CSS for Styling: Used utility-first styling with Tailwind CSS to achieve a modern and responsive design.",
        "Dynamic Asset Handling: Managed assets efficiently using imports, enabling optimized image loading and rendering.",
        "Framer Motion Animations: Added smooth animations and transitions for enhanced interactivity and user engagement.",
        "Optimized Performance: Utilized Next.js Image Optimization, lazy loading, and responsive design principles to ensure fast loading times.",
        "Fully Responsive Design: Ensured seamless adaptability across all screen sizes, enhancing accessibility and user experience."
      ],
      githubLink: "https://github.com/username/portfolio"
    }
  },


  {
    title: "Web Chat Application",
    description: "MERN Stack, Tailwind CSS, Zustand, Axios, JWT",
    bgImage: "/work-3.png",
    details: {
        description: "I built a real-time web chat application using the MERN stack (MongoDB, Express.js, React, Node.js) with Zustand for global state management and Axios for seamless API communication. The app features JWT-based authentication for secure login, WebSockets for real-time messaging, and a responsive UI with Tailwind CSS.",
        keyFeatures: [
            "User Authentication: Implemented JWT authentication for secure login, signup, and session management.",
            "State Management with Zustand: Used Zustand to efficiently manage authentication state, user sessions, and online user tracking.",
            "API Communication with Axios: Integrated Axios for making asynchronous HTTP requests between the frontend and backend.",
            "Real-Time Messaging: Used WebSockets (Socket.io) to enable real-time chat functionality and online user tracking.",
            "MERN Stack: Built a scalable backend with Express.js and Node.js, with MongoDB as the database and React for the frontend.",
            "Tailwind CSS Styling: Designed a responsive and modern UI with Tailwind CSS.",
            "Optimized Performance: Ensured smooth performance with efficient API handling, WebSocket connections, and real-time state updates."
        ],
        githubLink: "https://fullstack-chat-app-0czu.onrender.com"
    }
  },
  {
    title: "Capstone Projects",
    description: "HTML, CSS, JS, Node.js, Express, MongoDB",
    bgImage: "/work-4.png",
    details: {
      description:
        "A series of 5 capstone projects designed to master HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB. Each project focuses on a specific concept, helping to build a strong foundation in full-stack web development.",
      keyFeatures: [
        "HTML: Implemented core HTML concepts, including forms, tables, and semantic elements.",
        "CSS: Styled web pages using CSS, focusing on layouts, colors, typography, and responsive design.",
        "JavaScript: Built interactive features with JavaScript, including form validation and dynamic content updates.",
        "Backend API: Created RESTful API routes using Node.js and Express.js to handle CRUD operations.",
        "API & Database Integration: Integrated MongoDB for data storage and connected it to the backend API for data persistence."
      ],
      githubLink: "https://github.com/username/capstone-projects"
    }
  },
  
  
  {
    title: "Push_up Logger",
    description: "Flask, SQLite",
    bgImage: "/work-5.png",
    details: {
      description: 
        "A Flask-based web application to log and track push-ups, featuring user authentication and secure password handling using Flask-Login and Werkzeug. It uses SQLite for user data storage and provides sign-up, login, and logout functionality.",
      keyFeatures: [
        "User Authentication: Implemented sign-up, login, and logout functionality with Flask-Login.",
        "Password Security: Used Werkzeug's generate_password_hash and check_password_hash for secure password handling.",
        "Form Handling: Created forms for user input and validation during sign-up and login.",
        "Database Integration: Integrated SQLite to store user data and authentication details.",
        "Flask Routing: Defined routes for user authentication and redirection between pages.",
        "Flask Blueprint: Organized authentication routes using Flask Blueprints for modularity."
      ],
      githubLink: "https://pushups-logger-po15.onrender.com/"
    }
  },
  
  
  {
    title: "Frontend Projects",
    description: "React, JSX, Hooks, State Management",
    bgImage: "/work-6.png",
    details:{
    description: 
    "A series of React-based web applications to build proficiency in React concepts such as JSX, hooks, state management, routing, and component design. These projects aim to strengthen skills in creating interactive and dynamic user interfaces.",
    keyFeatures: [
    "JSX: Learned how to use JSX to write HTML-like code within JavaScript for UI design.",
    "State Management: Gained experience in managing component states with useState and useEffect hooks.",
    "Component Design: Built reusable and modular components to structure the user interface efficiently.",
    "React Router: Implemented React Router for handling navigation and routing between different pages.",
    "Event Handling: Created interactive elements with event listeners to trigger actions such as form submissions or button clicks.",
    "API Integration: Integrated third-party APIs to fetch and display dynamic data from external sources.",
    "Conditional Rendering: Applied conditional rendering to show or hide UI elements based on state or props.",
    "Form Handling: Developed forms with validation and state management for user inputs."
    ],
    githubLink: "https://github.com/Durganjali-sidda/React"
   }
  },
  {
    title: "HTML, CSS, JavaScript Projects",
    description: "HTML, CSS, JavaScript",
    bgImage: "/work-7.png",
    details: {
      description: 
        "A collection of projects to master core web development skills in HTML, CSS, and JavaScript. These projects focus on building static and dynamic web pages to strengthen frontend development skills.",
      keyFeatures: [
        "HTML: Built static web pages with essential HTML elements (forms, tables, media).",
        "CSS: Applied advanced styling techniques including Flexbox, Grid, and animations.",
        "Responsive Design: Used media queries to create responsive layouts across devices.",
        "JavaScript: Added interactivity with DOM manipulation, event handling, and functions.",
        "API Integration: Worked with APIs to dynamically fetch and display data on web pages."
      ],
      githubLink: "https://github.com/Durganjali-sidda/HTML-CSS-_JAVASCRIPT-PROJECTS"
    }
  }

];


export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js,Python,c++",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Civil Engineering",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
