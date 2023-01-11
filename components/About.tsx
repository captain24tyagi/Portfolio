import { motion } from 'framer-motion';
import mypic from '../public/mypic.jpeg'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="flex flex-col font-mono relative text-center h-screen items-center md:flex-row max-w-7xl justify-evenly mx-auto">
        <h3 className="text-3xl absolute uppercase top-24 font-mono tracking-[10px] text-blue-100 ">
            About
        </h3>
        <motion.img
         initial={{
            opacity: 0,
            x: -200,
         }}
         transition={{
            duration: 1.2
         }}
         whileInView={{ opacity: 1, x: 0 }}
         viewport={{ once: true }}
         src='https://pbs.twimg.com/profile_images/1573887808540147712/VGMbvUnj_400x400.jpg'
         alt='/'
         className='-mb-10 mt-20 flex-shrink-0 relative md:rounded-lg md:h-40 w-40 rounded-full object-cover md:0 xl:h-[400px] xl:w-[400px] md:w-64 md:h-95'
        >
        </motion.img>
        
        <div className='space-y-8 px-0 md:px-20'>
          <h4 className='font-semibold text-4xl p-5'>Helloo World!!</h4>
          <p className='space-y-10 text-md xl:w-[600px] xl:h-[300px] md:w-[400px] md:h-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur repellat itaque esse dignissimos omnis eius debitis! Cum perferendis nemo ipsum suscipit, voluptates laborum recusandae illo vel laboriosam saepe velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dicta assumenda veniam repellat, qui est temporibus corrupti, quo accusantium eum minus dolores officia. Amet voluptatem distinctio accusamus quos, dignissimos sed! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repellat autem suscipit, ducimus similique magnam consequatur assumenda delectus quasi voluptatem aperiam quidem corrupti doloremque minus reiciendis neque nulla expedita quos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatibus possimus corporis molestias cum excepturi facere ipsum. Nihil quod necessitatibus aliquam cupiditate perspiciatis alias labore nisi sit. Eum, quo accusantium.</p>
        </div>
    </motion.div>
  )
}