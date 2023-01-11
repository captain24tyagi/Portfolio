import React from 'react'
import Skill from './Skill';
import { motion } from 'framer-motion';

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    className='h-screen flex flex-col font-mono relative items-center text-center justify-evenly mx-auto'>
        <h3 className='uppercase absolute text-blue-100 tracking-[10px] text-3xl top-24'>
            Skills
        </h3>

        <h3 className='uppercase absolute text-white tracking-[3px] text-3sm top-36'>
            Hover over a skill for skill proficiency
        </h3>

        <div className=' grid grid-cols-4 gap-5 pt-20'>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
          <Skill/>
        </div>
    </motion.div>
  )
}