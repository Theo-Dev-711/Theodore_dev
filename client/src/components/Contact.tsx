import {motion} from "framer-motion"
const Infos = [
    {
        addresse:"3PWP+GG Douala",
        tel:"673-330-148",
        Email:"juniordev711@gmail.com",
    }
]

const Contact = () => {
    const whatsappNumber = "237673330148";
    const message = `Bonjour Theodore Dev, est-ce possible d'avoir un site web professionnel ? 💻✨
        Nous pouvons débuter dès confirmation. Merci !`;
    const encoded = encodeURIComponent(message);
    const link = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    // mailtoLink
    const email = "juniordev711@gmail.com";

    const subject = "Demande de création de site web";
    const body = `Bonjour Theodore Dev,

Je suis intéressé par la création d'un site web professionnel. 
Pouvez-vous me donner plus de détails sur vos offres et disponibilités ?

Merci !`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

     // Tu peux afficher ou utiliser ce lien

  return (
    <div className='border-t border-stone-900  '>
        <motion.h2
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 1, y: -100}}
            transition={{duration: 0.5}}
         className='my-10 mb-10 text-4xl text-center mt-16'>Get In Touch</motion.h2>
        <div className=''>
            {Infos.map((info, index)=>(
                <div className='flex flex-col gap-4 items-center justify-center mb-20' key={index}>
                    <motion.p
                        whileInView={{opacity:1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}}
                        >{info.addresse}</motion.p>
                    <motion.p
                        className="cursor-pointer"
                        whileInView={{opacity:1, x: 1}}
                        initial={{opacity: 1, x: 100}}
                        transition={{duration: 1}}
                    ><a href={link} target="_blank" rel="noopener noreferrer">Call Me for a Work {info.tel}</a></motion.p>
                    <a href={mailtoLink} target="_blank" rel="noopener noreferrer">{info.Email}</a>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Contact
