import { motion } from "framer-motion";

const DATA = [
  {
    title: "Web Developer Junior - IsDevExperts S.A.S",
    date: "2024 - 2025",
    description:
      "Active participation in the design and development of modern and responsive web interfaces using React with TypeScript (TSX) and Tailwind CSS.Creation of dynamic web pages integrating interactive components, while respecting modern design and accessibility principles.Implementation of front-end logic, state management, REST API calls, and integration with authentication systems.Worked collaboratively with the back-end team and used Git for code versioning.Performance optimization and adaptation to different screen formats to ensure a seamless user experience.",
    technologies: ["React-tsx", "Nodejs", "Clerk", "JavaScript"],
  },
  {
    title: "Web Developer Fullstack Junior - IsDevExperts S.A.S",
    date: "2025 - Present",
    description:
      "Design and development of complete web interfaces in React TSX with Tailwind CSS, connected to a Node.js backend.Development of interactive and responsive components: forms, dynamic tables, statistical dashboards, and notification systems.Implementation of secure authentication via Clerk, application state management with React Hooks, and communication with the backend via Axios.Contribution to relational database architecture (MySQL) and implementation of server logic for query processing (CRUD, validations).Use of Git for versioning and team collaboration, with a constant focus on code maintainability and performance.",
    technologies: ["React-tsx", "Nodejs", "Clerk", "JavaScript"],
  },
];

const Experience = () => {
  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mt-24 pb-24"
      >
        Experience
      </motion.h1>

      <div>
        {DATA.map((data, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap max-sm:justify-center max-sm:gap-6 lg:justify-center p-4"
          >
            {/* Date animée à gauche */}
            <motion.div
              className="w-full lg:w-1/4"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="max-lg:mb-3">{data.date}</span>
            </motion.div>

            {/* Contenu animé à droite */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-transparent">
                {data.title}
              </h3>
              <p className="mb-4 text-stone-400">{data.description}</p>
              {data.technologies.map((tech, index) => (
                <span
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium inline-block mb-2"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
