import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form"
import { Cursor, useTypewriter } from "react-simple-typewriter"

type Props = {}

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
}

export default function Contact({}: Props) {

  const [write, setWrite ] = useTypewriter({
     words: ['Lets Connect'],
     loop: true,
     delaySpeed: 2000,
  });

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:sarthak2002tyagi@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}. (${formData.email})`
  }

  return (
    <div className='h-screen relative flex flex-col justify-evenly text-center items-center font-mono mx-auto overflow-hidden max-w-full
    md:flex-row px-10 pt-10 md:text-left'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-3xl text-blue-200'>Contact</h3>

      <div className='flex flex-col space-y-7'>
        
        <h3 className='text-3xl text-center p-8 mt-20'>I have just got that you are looking for.{" "}
          <span className='text-blue-300'>
            {write}<Cursor cursorColor="yellow"/>
          </span>
        </h3>

        <div className='space-y-5'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className="text-blue-300 h-10 w-10 animate-pulse" />
            <p className="text-xl">+91 9868757238</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className="text-blue-300 h-10 w-10 animate-pulse" />
            <p className="text-xl">sarthak2002tyagi@gmail.com</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className="text-blue-300 h-10 w-10 animate-pulse" />
            <p className="text-xl">Essen House, Stanza living, Chennai-600089</p>
          </div>
        </div>

        <form
         onSubmit={handleSubmit(onSubmit)}
         className="flex flex-col space-y-2 w-fit mx-auto pt-10"
        >
          <div className="space-x-2">
            <input 
            {...register('name')}
            className="contactinput"
            placeholder="Name"
            type='text'
            />

            <input 
            {...register('email')}
            className="contactinput"
            placeholder="Email"
            type='email'
            />
          </div>

          <input 
           {...register('subject')}
           className="contactinput"
           placeholder="Subject"
           type='text'
          />

          <textarea
           {...register('message')}
           className="contactinput"
           placeholder="Message"
          />

          <button
           className="rounded-sm bg-blue-300 p-5 text-black font-bold"
           type="submit"
          >
           Submit
          </button>
        </form>

      </div>
    </div>
  )
}