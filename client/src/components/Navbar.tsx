import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from '../assets/TheoLogo.png';
const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className='mx-2' width={100} height={33} alt='logo'/>
        </a>
      </div>
      {/* section Profile~~Addresse */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href='https://cm.linkedin.com/in/th%C3%A9odore-junior-siyandji-youmbi-1163702ab' 
        target='_blank' rel='noopener noreferrer' aria-label="LinkedIn">
          <FaLinkedin/>
        </a>

        <a href='https://www.facebook.com/siyandji.junior' 
        target='_blank' rel='noopener noreferrer' aria-label="Facebook">
          <FaFacebook/>
        </a>

        <a href='https://github.com/Theo-Dev-711' 
        target='_blank' rel='noopener noreferrer' aria-label="Github">
          <FaGithub/>
        </a>
        <a href='https://www.instagram.com/theo.developpeur/' 
        target='_blank' rel='noopener noreferrer' aria-label="Instagram">
          <FaInstagram/>
        </a>
      </div>
      {/* End Section Profile~~Addresse */}
      
    </div>
  )
}

export default NavBar
