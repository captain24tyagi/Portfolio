import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

export default function Skilll({ directionLeft, skill }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
         initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
         }}
         transition={{ duration: 1 }}
         whileInView={{ opacity: 1, x: 0 }}
         src={urlFor(skill?.image).url()}
         alt='/'
         className='rounded-full object-cover h-20 w-20 xl:w-24 xl:h-24 border border-black'
        />

        <div className='absolute opacity-0 group-hover:opacity-70 transition-duration-300 ease-in-out group-hover: bg-white h-20 w-20 xl:h-24 xl:w-24 rounded-full'>
          <div className='flex items-center justify-center h-full'>
            <p className='text-xl font-bold text-black opacity-100'>{skill.progress}%</p>
          </div>
        </div>
    </div>
  )
}