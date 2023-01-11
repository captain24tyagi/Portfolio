import React from 'react'
import { motion } from 'framer-motion'
import ExpCard from './ExpCard'

type Props = {}

export default function Workexperience({}: Props) {
  return (
    <motion.div 
     initial={{
        opacity: 0,
     }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.5 }}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className="text-3xl absolute uppercase top-24 font-mono tracking-[10px] text-blue-100 ">
            Experience
        </h3>

        <div className='w-full flex space-x-5 scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD] p-10 snap-x snap-mandatory'>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
            <ExpCard/>
        </div>
    </motion.div>
  )
}