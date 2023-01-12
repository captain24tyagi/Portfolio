import { motion } from 'framer-motion';
import mypic from '../public/mypic.jpeg'
import { urlFor } from '../sanity';
import { Page } from '../typings';

type Props = {
  page: Page;
}

export default function About({ page }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col font-mono relative text-center h-screen items-center md:flex-row max-w-7xl justify-evenly mx-auto">
        <h3 className="text-3xl absolute uppercase top-24 font-mono tracking-[10px] text-blue-100 ">
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
         src={urlFor(page?.profilePic).url()}
         alt='/'
         className='-mb-10 mt-20 flex-shrink-0 relative md:rounded-lg md:h-40 w-40 rounded-full object-cover md:0 xl:h-[400px] xl:w-[400px] md:w-64 md:h-95'
        >
        </motion.img>
        
        <div className='space-y-8 px-0 md:px-20'>
          <h4 className='font-semibold text-4xl p-5 text-pink-500'>{page?.name}</h4>
          <p className='space-y-10 text-md xl:w-[600px] xl:h-[300px] md:w-[400px] md:h-[200px]'>{page?.backgroundInformation}</p>
        </div>
    </motion.div>
  )
}