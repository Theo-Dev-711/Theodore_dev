import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import virtualImg from "../assets/virtual.png";

const PROJECTS = [
  {
    title: "Staff Attendance Management",
    image:
      "https://raw.githubusercontent.com/kushald/ravi-kumar-assets/refs/heads/main/assets/projects/project-1.webp",
    description:
      "A web-based attendance management application developed with React TSX and Tailwind CSS on the front end, offering a modern and responsive interface. The back end is powered by Node.js and Express, with a MySQL database to store user, attendance, and leave information. Authentication is handled via Clerk, and features like GPS position verification, QR code scanning, and inactivity detection enhance the overall experience. The result is a smooth and secure solution for real-time employee tracking.",
    technologies: ["React.js", "Mysql", "Tailwind Css", "Clerk"],
    photo: "image-Projet-1",
    link: ""
  },
  {
    title: "Hardware Store Inventory Management",
    image:
      "https://raw.githubusercontent.com/kushald/ravi-kumar-assets/refs/heads/main/assets/projects/project-2.webp",
    description:
      "A web-based stock management application built with React TSX and Tailwind CSS, offering a modern, intuitive, and responsive interface. The back end is powered by Node.js and Express, with a MySQL database to handle products and stock operations. Secure user authentication is managed through Clerk. This solution is designed to provide simple, efficient, and real-time inventory management, ideal for small businesses.",
    technologies: ["React.js", "Mysql", "Tailwind Css", "Clerk"],
    photo: "image-projet-2",
    link: ""
  },
  {
    title: "Custom Virtual Landing Page",
    image: virtualImg,
    description:
      "A modern and responsive landing page, designed with React TSX and Tailwind CSS, is ideal for showcasing a project, brand, or personal portfolio. The interface features smooth navigation, clean animations, and a clear presentation of content without a backend. Deployed via Vercel, it guarantees speed, accessibility, and a professional design, suitable for both desktop and mobile.",
    technologies: ["React.tsx", "Tailwind Css"],
    photo: "image-projet-3",
    link: "https://siyandji-virtualr.vercel.app/"
  },
  
  
];

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 -mt-1 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 px-4"
          >
            {/* Image à gauche */}
            <motion.div
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                width={300}
                height={300}
                src={project.image}
                alt={project.photo}
                className="rounded shadow-lg mx-auto"/>
            </motion.div>

            {/* Texte à droite */}
            <motion.div
              className="w-full lg:w-2/3 max-w-2xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="mb-4 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-stone-900 text-white px-3 py-1 text-sm rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-10 max-w-36  ">
                <a
                  href={project.link} target="_blank" rel="noopener noreferrer"
                  className="bg-gradient-to-r from-neutral-900 to-neutral-300 p-2 flex rounded-lg items-center justify-center gap-3 
                  hover:bg-white hover:text-black transition duration-300">
                  <span>Started</span>                
                  <FaArrowRightLong />
                </a>

              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
