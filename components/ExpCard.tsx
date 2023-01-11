import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {}

export default function ExpCard({}: Props) {
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
          src='https://cdn.britannica.com/04/171104-050-AEFE3141/Steve-Jobs-iPhone-2010.jpg'
          alt='/'
        />

        <div className='px-0 md:px-10'>
           <h4 className='text-3xl font-light'>CEO of Apple</h4>
           <p className='font-bold text-2xl mt-1'>Apple</p>
            <div className='flex space-x-2 my-2'>
            <Image
             className='h-10 w-10 rounded-full'
             src='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png'
             alt='/'
             height={200}
             width={200}
           />
           <Image
             className='h-10 w-10 rounded-full'
             src='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png'
             alt='/'
             height={200}
             width={200}
           />
           <Image
             className='h-10 w-10 rounded-full'
             src='https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png'
             alt='/'
             height={200}
             width={200}
           />
            </div>
           <p className='uppercase py-5 ml-5 text-white'>Started work.... Ended</p>
          
           <ul className='list-disc space-y-3 ml-5 text-sm'>
            <li>Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points Summary Points</li>
           </ul>
           
        </div>
    </article>
  )
}