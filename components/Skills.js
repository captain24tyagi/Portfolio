import React, { useState, useEffect } from 'react'
import Skilll from './Skilll';
import { motion } from 'framer-motion';
import db from '@/firebase';


export default function Skills() {

  const [skills, setSkills] = useState([]);

  useEffect(() => {
    db.collection("skill").onSnapshot((snapshot) => {
      setSkills(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])
  
  return (
     
    <motion.div 
    className='h-screen flex flex-col font-mono relative items-center text-center justify-evenly mx-auto'>
        <h3 className='uppercase absolute text-blue-200 tracking-[10px] text-3xl lg:top-10 top-20'>
            Skills
        </h3>

        <h3 className='uppercase absolute text-white tracking-[3px] text-3sm lg:top-20 top-28'>
            Hover over a skill for skill proficiency
        </h3>

        <div className=' grid grid-cols-4 gap-5 pt-20'>
          {skills.slice(0, skills.length / 2).map((skill) => (
            <Skilll
             key={skill.title}
             skill={skill.image}
             skillprog={skill.progress}
            />
          ))}

          {skills.slice(skills.length / 2, skills.length).map((skill) => (
            <Skilll
             key={skill.title}
             skill={skill.image}
             skillprog={skill.progress}
             directionLeft
            />
          ))}
          
          
        </div>
    </motion.div>
  )
}