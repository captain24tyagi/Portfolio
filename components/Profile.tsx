import { useTypewriter, Cursor } from "react-simple-typewriter"
import Image from "next/image"
import mypic from '../public/mypic.jpeg'
import BackgroundCircles from "./BackgroundCircles"
import Link from "next/link"
import { Page } from "../typings"
import { urlFor } from "../sanity"

type Props = {
  page: Page
}

export default function Profile({ page }: Props) {

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
        src={urlFor(page?.heroImage).url()}
        height={400}
        width={400}
       />
      <div className="z-20">
       <h2 className="uppercase text-sm text-blue-200 pb-5 tracking-widest ">{page?.role}</h2>
       <h1 className="text-5xl lg:text-3xl font-sans font-semibold px-10 text-yellow-300">
        <span className="font-bold">{text}</span>
        <Cursor cursorColor="#FB923C"/>
       </h1>
     
      <div className="pt-5">
        <Link href='#about'>
        <button className='herobutton'>About</button>
        </Link>
        
        <Link href='#workexperience'>
        <button className='herobutton'>Experience</button> 
        </Link>

        <Link href='#skills'>
        <button className='herobutton'>Skills</button>
        </Link>

        <Link href='#projects'>
        <button className='herobutton'>Projects</button>
        </Link>
      </div>
     </div>
    </div>
  )
}