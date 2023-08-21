import React from 'react'
import { motion } from 'framer-motion'


export default function Skilll({ directionLeft, skill, skillprog }) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
         initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         src={skill}
         alt='/'
         className='rounded-full object-cover md:h-20 md:w-20 h-10 w-10 border border-black'
        />

        <div className='absolute opacity-0 group-hover:opacity-70 transition-duration-300 ease-in-out group-hover: bg-white h-10 w-10 md:h-20 md:w-20 xl:h-24 xl:w-24 rounded-full'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>{skillprog}%</p>
          </div>
        </div>
    </div>
  )
}