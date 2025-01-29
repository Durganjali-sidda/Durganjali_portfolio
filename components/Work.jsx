// import { assets, workData } from "@/assets/assets";
// import React from "react";
// import Image from "next/image";
// import { motion } from "motion/react";

// const Work = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       id="work"
//       className="w-full px-[12%] py-10 scroll-mt-20"
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-Ovo"
//       >
//         My Portfolio
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-Ovo"
//       >
//         My latest work
//       </motion.h2>
//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.7 }}
//         className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
//       >
//         Welcome to my web development portfolio! Explore a range of projects
//         that showcase my skills in front-end and back-end development using the
//         MERN stack, reflecting my passion for coding and building web
//         applications
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6, delay: 0.9 }}
//         className="grid grid-cols-auto my-10 gap-5 dark:text-black"
//       >
//         {workData.map((project, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             key={index}
//             className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg
//            relative cursor-pointer group"
//             style={{ backgroundImage: `url(${project.bgImage})` }}
//           >
//             <div
//               className="bg-white w-10/12 rounded-md absolute bottom-5
//              left-1/2 -translate-x-1/2 py-3 px-5 flex
//              items-center justify-between duration-500 group-hover:bottom-7"
//             >
//               <div>
//                 <h2 className="font-semibold">{project.title}</h2>
//                 <p className="text-sm text-gray-700">{project.decsription}</p>
//               </div>
//               <div
//                 className="border rounded-full border-black w-9
//                aspect-square flex items-center justfy-center
//             shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
//               >
//                 <Image src={assets.send_icon} alt="send icon" className="w-5" />
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//       <motion.a
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1.1, delay: 0.5 }}
//         href=""
//         className="w-max flex items-center justify-center gap-2
//       text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10
//       mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
//       >
//         Show more{" "}
//         <Image
//           src={
//             isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
//           }
//           alt="right arrow"
//         />
//       </motion.a>
//     </motion.div>
//   );
// };

// export default Work;

import { assets, workData } from "@/assets/assets";
import React, { useState, useRef,useEffect} from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false); // For toggling show all projects
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project
  const showMoreRef = useRef(null); // Reference for show more button scroll

  // Handle project click to open the description card
  const handleProjectClick = (project) => {
    setSelectedProject(project); // Set the selected project to show details
  };

  // Toggle between showing 4 or all projects
  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (showMoreRef.current) {
      showMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close the description card
  const closeDescriptionCard = () => {
    setSelectedProject(null);
  };

  // Ensure the component renders consistently
   useEffect(() => {
    // Client-side only logic (e.g., initialize states)
    setShowAll(false);
  }, []);

  // Determine the projects to display (either 4 or all)
  const displayedProjects = showAll ? workData : workData.slice(0, 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my web development portfolio! Explore a range of projects
        that showcase my skills in front-end and back-end development using the
        MERN stack.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            onClick={() => handleProjectClick(project)}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href="#work"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
        onClick={toggleShowAll}
      >
        {showAll ? "Show less" : "Show more"}{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="right arrow"
        />
      </motion.a>
      <div ref={showMoreRef}></div> {/* Reference the Show More section */}
      {/* Display Description Card when a project is selected */}
      {selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex justify-center items-center bg-opacity-90 dark:bg-opacity-90 transition-all duration-500 ease-in-out ${
            isDarkMode ? "bg-black" : "bg-white"
          }`}
        >
          <div
            className="absolute top-4 right-4 text-2xl cursor-pointer"
            onClick={closeDescriptionCard}
            aria-label="Close"
            style={{ color: isDarkMode ? "#fff" : "#000" }} // Close button color depending on the theme
          >
            &times;
          </div>
          <div
            className={` p-6 rounded-lg shadow-lg max-w-4xl w-[80vw] mx-auto transition-all duration-500 ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black "
            }`}
            style={{
              transition: "all 0.3s ease",
              border: isDarkMode ? "none" : "2px solid #ccc", // For light mode, add border
            }}
          >
            <div className="relative">
              {/* Close button inside the card */}
              <div
                className="absolute top-2 right-2 text-2xl cursor-pointer"
                onClick={closeDescriptionCard}
                aria-label="Close"
                style={{
                  color: isDarkMode ? "#fff" : "#000",
                }}
              >
                &times;
              </div>
              <h3 className="text-3xl font-semibold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-lg mb-4">
                {selectedProject.details.description}
              </p>
              <h4 className="font-semibold text-xl mb-2">Key Features:</h4>
              <ul className="list-disc pl-6 mb-4">
                {selectedProject.details.keyFeatures.map((feature, idx) => (
                 <li key={idx} className="text-lg">{feature}</li>
                ))}
              </ul>
              
              <a
                href={selectedProject.details.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Work;
