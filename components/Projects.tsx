import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
}

const projects = [1, 2, 3, 4, 5];

export default function Projects({ projects }: Props) {
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

       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 pt-20 scrollbar scrollbar-track-black/20 scrollbar-thumb-[#93C5FD]'>
       {projects.map((project, i) => (
          <div key={project._id}
           className='w-screen flex-shrink-0 flex flex-col snap-center items-center justify-center p-20 space-y-5 md:p-44 h-screen'>
          <motion.img
            initial={{
              opacity: 0,
              y: -300,
            }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y:-50 }}
            transition={{ duration: 1.2 }}
            src={urlFor(project.image).url()}
            alt='/'
            height={100}
            width={400}
          />
          <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
            <h4 className='text-3xl font-semibold text-blue-100/80 text-center'>
              <span className='text-blue-300'>
                  Project {i + 1} of {projects.length}: {" "}
              </span>
                {project.title}
            </h4>

            <p className="text-lg xl:text-center md:text-left">
                {project.summary}
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