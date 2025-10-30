
import { useState } from 'react';
import profile from '../assets/TheoProfile.jpeg';
import { motion } from 'framer-motion'
import { Loader2 } from "lucide-react"; // un spinner sympa





const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}
const Hero = () => {
  const Data = {
    HERO_CONTENT: `Full-stack web developer with Three years of experience, passionate about modern technologies like React (TSX), Next.js, Tailwind CSS, Node.js, and Express. I enjoy creating clean and dynamic interfaces, and I continue to improve every day to develop powerful applications. My goal is to join a motivated team where I can continuously learn, contribute, and grow.
Stack: React TSX, Tailwind CSS, Node.js, Express, MySQL, Git, Clerk
Values: Clean code, constant learning, user experience`
  };



  const handleDownload = () => {
    setDownloading(true);

    // après 2 secondes, on arrête l’animation
    // (juste pour simuler le téléchargement)
    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const [downloading, setDownloading] = useState(false);
  return (
    <div id="acceuil" className="pb-4 lg:mb-36 mt-20">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center p-8 lg:p-8">
            <motion.img
              src={profile}
              alt='profile'
              width={650}
              height={650}
              className='border border-stone-900 rounded-3xl filter grayscale'
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>
        {/* Role */}
        <motion.div className='w-full lg:w-1/2'
          initial="hidden"
          animate="visible"
          variants={containerVariants}>

          <div className='flex flex-col items-center lg:items-start mt-10'>
            <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tight max-sm:text-6xl sm:text-6xl lg:text-7xl'>Theodore Dev</motion.h2>
            <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl text-transparent'>Web Developer</motion.span>
            <motion.p variants={childVariants} className='my-2 w-full text-justify  py-6 text-xl leading-relaxed p-8 max-sm:p-4'>{Data.HERO_CONTENT}</motion.p> {/* Accéder à HERO_CONTENT */}
            <motion.a
              href="/Cv-Siyandji_youmbi_Theodore_junior.pdf"
              download="Cv-Siyandji_youmbi_Theodore_junior.pdf"
              onClick={handleDownload}
              whileTap={{ scale: 0.9 }}
              className="bg-white flex items-center justify-center gap-2 mx-auto rounded-full px-6 py-3 text-sm text-stone-800 mb-10 shadow-md cursor-pointer"
            >
              {downloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  >
                    <Loader2 className="w-4 h-4" />
                  </motion.div>
                  <span>Downloading...</span>
                </>
              ) : (
                <span>Download Resume</span>
              )}
            </motion.a>
          </div>
        </motion.div>
        {/* End Role */}
      </div>
    </div>
  );
}

export default Hero;