import { motion } from 'framer-motion';
import mypic from '../public/mypic.jpeg'

export default function About() {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col font-mono relative text-center h-screen items-center md:flex-row max-w-7xl justify-evenly mx-auto">
        <h3 className="text-3xl absolute uppercase top-24 lg:top-10 font-mono tracking-[10px] text-blue-100 ">
            About
        </h3>
        <motion.img
         initial={{
            opacity: 0,
            x: -200,
         }}
         transition={{
            duration: 1.2
         }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         src='/1.jpg'
         alt='/'
         className='-mb-10 mt-20 flex-shrink-0 relative md:rounded-lg md:h-40 w-20 md\:w-40 rounded-full object-cover md:0 xl:h-[400px] xl:w-[400px] md:w-64 md:h-95'
        >
        </motion.img>
        
        <div className='space-y-8 px-0 md:px-20'>
          <h4 className='font-semibold text-4xl p-5 text-pink-500'>Sarthak Tyagi</h4>
          <p className='space-y-10 text-xs md:text-base xl:w-[600px] xl:h-[300px] md:w-[400px] md:h-[200px]'>Myself Sarthak Tyagi, a web-developer, currently pursuing my B.Tech from SRM Institute of Science and Technology, Ramapuram, Chennai, IV year, in Computer Science and Engineering. Born and brought up in Delhi, i did my schooling from ASN Senior Secondary School, Mayur vihar, Delhi. I just love being surrounded by my friends, to hang out with them and to interact with people as much as i can, as it is only through interaction that you can share thoughts and get to know various other things going there in the world and how people approach certain set of things and situations. I am a kind of person who loves to lead and the guy who stongly believes in teamwork, as i believe if someone who can do wonders individually, then a group  of such individuals can together make phenomenol stuff.</p>
        </div>
    </motion.div>
  )
}