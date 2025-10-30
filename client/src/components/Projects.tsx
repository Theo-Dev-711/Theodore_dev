import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

// images
import exclusive from "../assets/exclusive.jpg";
import cvbuilder from "../assets/cvbuilder.jpg";
import Cyberpgs from "../assets/Cyberpgs3.jpg"

//icon
import { FaBoxOpen } from "react-icons/fa";

// 🚀 Données des projets
const PROJECTS = [
    {
        title: "E-Commerce Exclusive - Quality Products | Next.js & Tailwind CSS",
        image: exclusive,
        description:
            "A modern e-commerce web application built with React, TypeScript, and Tailwind CSS. It features a responsive design, product catalog, user interaction, and clean UI — ideal for learning or small businesses.",
        technologies: ["Next js 15", "React 19", "Tailwind CSS"],
        photo: "image-projet-1",
        link: "https://beta-site-v1-03.vercel.app/",
        category: "Web & Mobile",
    },
    {
        title: "Theo CV Builder | Next.js , Tailwind CSS & Daisyui",
        image: cvbuilder,
        description:
            "Generate, customize, and easily download your professional CV with Theo CV Builder. Simple, fast, and effective to land your next job.",
        technologies: ["Next js 15", "React 19", "Tailwind CSS", "Daisyui"],
        photo: "image-projet-2",
        link: "https://theo-cvbuilder.vercel.app/",
        category: "Web & Mobile",
    },
    {
        title: "CYBER-PGS | Next.js , Tailwind CSS & Daisyui",
        image: Cyberpgs,
        description:
            "Streamline your cyber café operations with this financial management system by Théodore. Secure clerk login, PostgreSQL database on Neon, Prisma ORM for efficient data handling, Cloudinary integration for images, and a sleek responsive UI for effortless management.",
        technologies: ["Next js 15", "React 19", "Tailwind CSS", "Daisyui"],
        photo: "image-projet-3",
        link: "https://theodore-cyber-manager-iaae.vercel.app/home",
        category: "Web & Mobile",
    },
    
];

const FILTERS = ["Tous", "Web", "Mobile", "Web & Mobile"];

const Project = () => {
    const [activeFilter, setActiveFilter] = useState("Tous");

    // 🔍 Filtrage dynamique des projets
    const filteredProjects =
        activeFilter === "Tous"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === activeFilter);

    return (
        <div id="projects" className="pb-10">
            {/* Titre principal */}
            <motion.h2
                className="my-16 text-center text-4xl font-bold"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Projects
            </motion.h2>

            {/* 🔘 Navigation de filtre */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 py-2 rounded-full border transition-all duration-300 ${activeFilter === filter
                            ? "bg-white text-black font-semibold"
                            : "border-gray-700 text-gray-400 hover:border-white hover:text-white"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* 💡 Aucun projet trouvé */}
            {filteredProjects.length === 0 ? (
                <motion.div
                    className="flex flex-col items-center justify-center mt-20 text-gray-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Icône animée */}
                    <motion.div
                        className="text-6xl mb-4 text-white"
                        animate={{
                            y: [0, -20, 0], // rebond vertical
                            rotate: [0, 10, -10, 0], // légère rotation
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2,
                            ease: "easeInOut",
                        }}
                    >
                        <FaBoxOpen />
                    </motion.div>

                    {/* Texte */}
                    <motion.p
                        className="text-lg animate-pulse"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.7, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        Aucun projet pour le moment 🚧
                    </motion.p>
                </motion.div>
            ) : (
                <div className="space-y-12">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 px-4"
                        >
                            {/* Image du projet */}
                            <motion.div
                                className="w-full lg:w-1/3"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.photo}
                                    className="h-72 object-cover rounded shadow-lg mx-auto"
                                />
                            </motion.div>

                            {/* Détails du projet */}
                            <motion.div
                                className="w-full lg:w-2/3 max-w-2xl"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h3 className="text-2xl font-semibold mb-3">
                                    {project.title}
                                </h3>
                                <p className="mb-4 text-gray-400 text-justify">
                                    {project.description}
                                </p>
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

                                {/* Bouton de lien */}
                                {project.link && (
                                    <div className="mt-10 max-w-36">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ease-in-out bg-gradient-to-r from-neutral-900 to-neutral-300 p-2 flex items-center justify-center gap-3 rounded-lg transform transition-transform duration-300 hover:scale-105"
                                        >
                                            <span className="font-medium">View Project</span>
                                            <FaArrowRightLong className="text-lg" />
                                        </a>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Project;
