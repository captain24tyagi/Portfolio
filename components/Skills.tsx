import React from 'react'
import Skilll from './Skilll';
import { motion } from 'framer-motion';
import { Skill } from "../typings"


type Props = {
  skills: Skill[];
}

export default function Skills({ skills }: Props) {
  return (
    <motion.div 
    className='h-screen flex flex-col font-mono relative items-center text-center justify-evenly mx-auto'>
        <h3 className='uppercase absolute text-blue-200 tracking-[10px] text-3xl top-24'>
            Skills
        </h3>

        <h3 className='uppercase absolute text-white tracking-[3px] text-3sm top-36'>
            Hover over a skill for skill proficiency
        </h3>

        <div className=' grid grid-cols-4 gap-5 pt-20'>
          {skills.slice(0, skills.length / 2).map((skill) => (
            <Skilll
             key={skill._id}
             skill={skill}
            />
          ))}

          {skills.slice(skills.length / 2, skills.length).map((skill) => (
            <Skilll
             key={skill._id}
             skill={skill}
             directionLeft
            />
          ))}
          
          
        </div>
    </motion.div>
  )
}