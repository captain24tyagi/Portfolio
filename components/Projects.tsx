import React from 'react'
import { motion } from 'framer-motion'

type Props = {

}

const projects = [1, 2, 3, 4, 5];

export default function Projects({}: Props) {
  return (
    <motion.div
     initial={{
        opacity: 0,
     }}
     whileInView={{ opacity: 1 }}
     transition={{ duration: 1.2 }}
     viewport={{ once: true }}
     className='h-screen flex flex-col relative font-mono justify-evenly overflow-hidden z-0 md:flex-row text-left max-w-full items-center mx-auto'
    >
    <h3 className='top-24 text-3xl absolute tracking-[10px] uppercase text-blue-200'>Projects</h3>

       <div className='relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-20 scrollbar'>
       {projects.map((project, i) => (
          <div key={i}
           className='w-screen flex-shrink-0 flex flex-col snap-center items-center justify-center p-20 space-y-5 md:p-44 h-screen'>
          <motion.img
            initial={{
              opacity: 0,
              y: -300,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y:-50 }}
            transition={{ duration: 1.2 }}
            src='https://cdn.arstechnica.net/wp-content/uploads/2022/07/netflix-800x450.jpg'
            alt='/'
            height={100}
            width={400}
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-3xl font-semibold text-blue-100/80 text-center'>
              <span className='text-white'>
                  Project {i + 1} of {projects.length}: 
              </span>
               Abc
            </h4>

            <p className="text-lg xl:text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate velit quas perspiciatis officiis vitae ratione dignissimos suscipit numquam, ad dolorum magnam quisquam quod, voluptas nihil necessitatibus quidem, expedita iste.
            </p>

          </div>

          </div>
        ))}
       </div> 
        


        <div className='w-full absolute top-[30%] h-[500px] left-0 bg-[#93C5FD]/10 -skew-y-12'>

        </div>
    </motion.div>
  )
}