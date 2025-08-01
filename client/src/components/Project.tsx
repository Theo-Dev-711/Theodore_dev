import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import virtualImg from "../assets/virtual.jpeg";
import vente from "../assets/vente.jpeg"
import startup from "../assets/startup.jpg"
import Alowishus from "../assets/Alowishus.jpg"
import exclusive from "../assets/exclusive.jpg"
import cvbuilder from "../assets/cvbuilder.jpg"

const PROJECTS = [
  {
    title: "Staff Attendance Management",
    image:
      "https://raw.githubusercontent.com/kushald/ravi-kumar-assets/refs/heads/main/assets/projects/project-1.webp",
    description:
      "A web-based attendance management application developed with React TSX and Tailwind CSS on the front end, offering a modern and responsive interface. The back end is powered by Node.js and Express, with a MySQL database. Authentication is handled via Clerk.",
    technologies: ["React.js", "Mysql", "Tailwind CSS", "Clerk"],
    photo: "image-Projet-1",
    link: ""
  },
  {
    title: "Hardware Store Inventory Management",
    image:
      "https://raw.githubusercontent.com/kushald/ravi-kumar-assets/refs/heads/main/assets/projects/project-2.webp",
    description:
      "A stock management app built with React TSX and Tailwind CSS. Node.js and MySQL power the backend. Clerk ensures secure user auth. Ideal for small business inventory tracking.",
    technologies: ["React.js", "Mysql", "Tailwind CSS", "Clerk"],
    photo: "image-projet-2",
    link: ""
  },
  {
    title: "Custom Virtual Landing Page",
    image: virtualImg,
    description:
      "A modern and responsive landing page built with React TSX and Tailwind CSS, deployed with Vercel. Ideal for showcasing a project or personal brand, no backend required.",
    technologies: ["React.tsx", "Tailwind CSS"],
    photo: "image-projet-3",
    link: "https://siyandji-virtualr.vercel.app/"
  },
  {
    title: "Modern E-Commerce Starter App with React & Tailwind",
    image: vente,
    description:
      "A modern and responsive e-commerce landing page, built with React TSX and Tailwind CSS, and deployed via Vercel.Perfect for showcasing an online store, products, or a personal brand.Sleek design, mobile-friendly layout, and smooth animations for an optimal user experience.No backend required for the demo — easily connectable to platforms like Firebase, Stripe, or Shopify for full functionality.",
    technologies: ["React.tsx", "Tailwind CSS", "React-Slick"],
    photo: "image-projet-4",
    link: "https://siyandji-e-commerce.vercel.app/"
  },
  {
    title: "Responsive Landing Page for Tech Startups | Next.js & Tailwind CSS",
    image: startup,
    description:
      "Modern and responsive landing page for a tech startup. Built with React, Tailwind CSS, and Aos animations. Perfect for showcasing a product, app, or tech service with style and high performance.",
    technologies: ["Next js 15","React.tsx", "Tailwind CSS", "React-Slick", "Aos"],
    photo: "image-projet-5",
    link: "https://siyandji-startup-tech.vercel.app/"
  },
  {
    title: "E-commerce Website for Alowishus Delicious Coffee | Next.js & Tailwind CSS",
    image: Alowishus,
    description:
      "E-commerce website for Alowishus Delicious Coffee, developed with Next.js 15, Tailwind CSS, and Framer Motion. Fully responsive, SEO-friendly, and optimized for high performance.",
    technologies: ["Next js 15","React.tsx", "Tailwind CSS", "React-Slick", "Aos"],
    photo: "image-projet-5",
    link: "https://siyandji-premium-caffe.vercel.app/"
  },
  {
    title: "E-Commerce Exclusive - Quality Products | Next.js & Tailwind CSS",
    image: exclusive,
    description:
      "A modern e-commerce web application built with React, TypeScript, and Tailwind CSS. It features a responsive design, product catalog, user interaction, and clean UI — ideal for learning or small businesses.",
    technologies: ["Next js 15", "React 19", "Tailwind CSS",],
    photo: "image-projet-6",
    link: "https://beta-site-v1-03.vercel.app/"
  },
  {
    title: "Theo CV Builder | Next.js , Tailwind CSS & Daisyui",
    image: cvbuilder,
    description:
      "Generate, customize, and easily download your professional CV with Theo CV Builder. Simple, fast, and effective to land your next job.",
    technologies: ["Next js 15", "React 19", "Tailwind CSS", "Daisyui"],
    photo: "image-projet-7",
    link: "https://theo-cvbuilder.vercel.app/"
  },
];

const Project = () => {
  return (
    <div className="pb-4">
      <motion.h2
        className="my-20 text-center text-4xl font-bold"
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
            <motion.div
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <img
                src={project.image}
                alt={project.photo}
                className="h-72 object- rounded shadow-lg mx-auto"
              />
            </motion.div>

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
              {project.link && (
                <div className="mt-10 max-w-36">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ease-in-out bg-gradient-to-r from-neutral-900 to-neutral-300 p-2 flex items-center justify-center gap-3 rounded-lg transform transition-transform duration-300 hover:scale-105">
                    <span className="font-medium">View Project</span>
                    <FaArrowRightLong className="text-lg" />
                  </a>
                </div>

              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
