import {motion} from "framer-motion"
const Infos = [
    {
        addresse:"3PWP+GG Douala",
        tel:"673-330-148",
        Email:"Theodoredev711@gmail.com",
    }
]

const Contact = () => {
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
                        whileInView={{opacity:1, x: 1}}
                        initial={{opacity: 1, x: 100}}
                        transition={{duration: 1}}
                        >{info.tel}</motion.p>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">{info.Email}</a>
                </div>
            ))}
        </div>
      
    </div>
  )
}

export default Contact
