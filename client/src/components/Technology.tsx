import { motion } from "framer-motion";
import { FaNodeJs, FaHtml5 } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiClerk,
  SiJavascript,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

// Liste des technologies avec leurs icônes et couleurs
const technologies = [
  { name: "React", icon: <RiReactjsLine className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Clerk", icon: <SiClerk className="text-violet-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-orange-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-red-500" /> },
];

const Technologie = () => {
  return (
    <section className="pb-24">
      <motion.h2
        className="my-20 mt-20 text-center text-4xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Technologies
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="p-4 text-7xl"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: index * 0.2, // 🔥 décalage basé sur l'index
            }}
            title={tech.name}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Technologie;
