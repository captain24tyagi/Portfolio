import { useTypewriter, Cursor } from "react-simple-typewriter"
import Image from "next/image"
import mypic from '../public/mypic.jpeg'
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"


export default function Profile() {

    const [text, setText] = useTypewriter({
        words: ['Hi, Sarthak this side!!',
          '< Guy, who loves football />',
          '< But not more than my code />'
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center overflow-hidden space-y-10">
      <BackgroundCircles/>  
      <Image 
        className="relative h-40 w-40 rounded-full mx-auto object-cover"
        alt="/"
        src='/2.jpg'
        height={400}
        width={400}
       />
      <div className="z-20">
       <h2 className="uppercase text-sm text-blue-200 pb-5 tracking-widest ">Developer</h2>
       <h1 className="text-5xl lg:text-3xl font-sans font-semibold px-10 text-yellow-300">
        <span className="font-bold">{text}</span>
        <Cursor cursorColor="#FB923C"/>
       </h1>
     
      <div className="pt-5 space-x-10 font-mono">
        <Link href='#about'>
        <button className='herobutton'>ABOUT</button>
        </Link>
        
        <Link href='#workexperience'>
        <button className='herobutton'>EXPERIENCE</button> 
        </Link>

        <Link href='#skills'>
        <button className='herobutton'>SKILLS</button>
        </Link>

        <Link href='#projects'>
        <button className='herobutton'>PROJECTS</button>
        </Link>
      </div>
     </div>
    </div>
  )
}