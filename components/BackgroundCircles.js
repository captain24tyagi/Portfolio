import { motion } from 'framer-motion';


export default function BackgroundCircles() {
  return (
    <motion.div
       initial={{
        opacity: 0,
       }}
       animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
       }}
       transition={{
        duration: 2.5,
       }}
       className="relative items-center flex justify-center mt-20"
       >
       <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='rounded-full border border-[#93C5FD] opacity-20 h-[700px] w-[700px] absolute mt-52 animate-pulse'/>
    </motion.div>
  )
}