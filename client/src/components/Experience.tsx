import { motion } from "framer-motion";

const DATA = [
  {
    title: "Web Developer Junior - IsDevExperts S.A.S",
    date: "2024 - 2025",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum, incidunt sunt nostrum quae quas, iure ipsum obcaecati harum ipsa culpa cum esse itaque totam, enim rem voluptatum suscipit in? Soluta doloremque nostrum officiis omnis aut explicabo recusandae dolor mollitia dolore repellat voluptatibus, quod iure amet numquam hic ipsum? Nobis, ratione? Praesentium, alias cupiditate. Earum iusto perspiciatis saepe suscipit velit? Exercitationem aspernatur fugiat iure odio obcaecati pariatur, quos enim quisquam expedita aliquam iusto molestias eum consectetur delectus tempora consequuntur.",
    technologies: ["React-tsx", "Nodejs", "Clerk", "JavaScript"],
  },
  {
    title: "Web Developer Junior - IsDevExperts S.A.S",
    date: "2025 - Present",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eum, incidunt sunt nostrum quae quas, iure ipsum obcaecati harum ipsa culpa cum esse itaque totam, enim rem voluptatum suscipit in? Soluta doloremque nostrum officiis omnis aut explicabo recusandae dolor mollitia dolore repellat voluptatibus, quod iure amet numquam hic ipsum? Nobis, ratione? Praesentium, alias cupiditate. Earum iusto perspiciatis saepe suscipit velit? Exercitationem aspernatur fugiat iure odio obcaecati pariatur, quos enim quisquam expedita aliquam iusto molestias eum consectetur delectus tempora consequuntur.",
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
