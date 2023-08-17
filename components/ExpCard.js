import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ExpCard({ title, company, image, date, point1, point2, point3, point4 }) {

  return (
    <article className='flex flex-col font-mono rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
     md:w-[400px] mt-20 xl:w-[600px] snap-center p-10 bg-[#404040] hover:opacity-90 opacity-60 
     transition-opacity duration-200 overflow-hidden cursor-pointer text-white'>
        <motion.img
          initial={{
            opacity: 0,
            y: -100
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 1 }}
          viewport={{ once: true }}
          className='w-28 h-28 rounded-full object-cover object-top'
          src={image}
          alt='/'
        />

        <div className='px-0 md:px-10'>
           <h4 className='text-3xl font-light text-yellow-400'>{title}</h4>
           <p className='font-bold text-2xl mt-1'>{company}</p>
           <p className='uppercase py-5 ml-5 text-white'>
              {date}
            </p>
          
           <ul className='list-disc space-y-3 ml-5 md:text-sm text-xs'>
            <li>{point1}</li>
            <li>{point2}</li>
            <li>{point3}</li>
            <li>{point4}</li>
           </ul>
           
        </div>
    </article>
  )
}