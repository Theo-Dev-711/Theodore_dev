import { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import logo from '../assets/TheoLogo.png';

const SECTIONS = [
  { id: "acceuil", label: "Home" },
  { id: "technology", label: "Technologies" },
  { id: "projects", label: "My Projects" },
  { id: "landingPage", label: "Landing Page" },
  { id: "experience", label: "Experience" },
];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // décalage avant la section
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });

      setActiveSection(id);
      setIsMobileOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  backdrop-blur-md px-6  flex items-center justify-between border-b border-gray-800">
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="/" aria-label="Home">
          <img src={logo} width={85} height={28} alt="logo" />
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 text-base font-medium">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`px-3 py-1.5 rounded-full border text-sm transition-all duration-300 ${activeSection === section.id
                ? "bg-white text-black font-semibold"
                : "border-gray-700 text-gray-400 hover:border-white hover:text-white"
              }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden md:flex gap-3 text-xl">
        <a href="https://cm.linkedin.com/in/th%C3%A9odore-junior-siyandji-youmbi-1163702ab" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.facebook.com/siyandji.junior" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://github.com/Theo-Dev-711" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/theo.developpeur/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      {/* Mobile burger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-2xl">
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 flex flex-col items-center py-4 gap-4 md:hidden">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-4 py-2 rounded-full border w-3/4 text-center text-sm transition-all duration-300 ${activeSection === section.id
                  ? "bg-white text-black font-semibold"
                  : "border-gray-700 text-gray-400 hover:border-white hover:text-white"
                }`}
            >
              {section.label}
            </button>
          ))}

          <div className="flex gap-4 text-xl mt-3">
            <a href="https://cm.linkedin.com/in/th%C3%A9odore-junior-siyandji-youmbi-1163702ab" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/siyandji.junior" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://github.com/Theo-Dev-711" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.instagram.com/theo.developpeur/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
