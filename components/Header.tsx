import { motion } from "framer-motion"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"
import { Social } from "../typings"

type Props = {
  socials: Social[];
}

export default function Header({ socials }: Props) {
  return (
        <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 p-5">
           <motion.div
            initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            
            className='flex flex-row items-center'
           >
            <SocialIcon
              url="https://www.instagram.com/captain24tyagi/"
              fgColor="white"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://www.instagram.com/captain24tyagi/"
              fgColor="white"
              bgColor="transparent"
            />

            <SocialIcon
              url="https://www.instagram.com/captain24tyagi/"
              fgColor="white"
              bgColor="transparent"
            />

           </motion.div>

           <motion.div
            initial={{
                opacity: 0,
                x: 500,
                scale: 0.5
            }}
            animate={{
                opacity: 1,
                x: 0,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className='flex flex-row items-center'
           >

            <Link href='#contact'>
            <SocialIcon
              bgColor="transparent"
              fgColor='white'
              network="email"
              className="cursor-pointer"
            />
            </Link>
  
            <p className=" uppercase hidden md:inline-flex text-sm">Get In Touch</p>
           </motion.div>

        </header>
  )
}