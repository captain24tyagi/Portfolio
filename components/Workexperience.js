import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'
import db from '@/firebase';


export default function Workexperience() {

  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    db.collection("experience").onSnapshot((snapshot) => {
      setExperiences(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <motion.div 
     initial={{
        opacity: 0,
     }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="text-3xl absolute uppercase lg:top-10 top-24 font-mono tracking-[10px] text-blue-200">
            Experience
        </h3>

        <div className='w-full flex space-x-5 overflow-x-scroll scrollbar scrollbar-track-black/20 scrollbar-thumb-[#FB923C] p-10 snap-x snap-mandatory mt-14'>
            {experiences.map((experience) => (
              <ExpCard
               key={experience.title}
               title={experience.title}
               company={experience.company}
               date={experience.date}
               image={experience.companyLogo}
               point1={experience.bul1}
               point2={experience.bul2}
               point3={experience.bul3}
               point4={experience.bul4}
              />
            ))}
        </div>
    </motion.div>
  )
}