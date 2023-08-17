import React from "react"
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined"
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { useForm, SubmitHandler } from "react-hook-form"

export default function Contact () {
  const [write, setWrite] = useTypewriter({
    words: ["Lets Connect !", "Mail us here !"],
    loop: true,
    delaySpeed: 2000,
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

    const onSubmit = (data) => {
        window.location.href = `mailto:sarthak2002tyagi@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}.&mailfrom=${data.email}`
    }

  return (
    <div className="h-full justify-between items-center mx-auto w-fit top-10 max-w-4xl md:max-w-7xl pt-20 bottom-20">
      <h1 className="mt-20 mx-auto font-mono text-3xl top-20 mb-0 text-center uppercase tracking-[10px] text-blue-200 pt-10">
        Contact
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-row m-10 mb-5 items-center">
          <LocationOnOutlinedIcon className="text-3xl" />
          <h2 className="px-5 text-md font-mono text-yellow-300">Address: </h2>
          <p className=" text-sm font-mono">
            Essen House, Stanza Living, Ramapuram, Chennai- 600089, India
          </p>
        </div>
        <div className="flex flex-row mx-10 items-center">
          <LocalPhoneIcon className="text-3xl" />
          <h2 className="px-5 text-md font-mono text-yellow-300">Contact: </h2>
          <p className=" text-sm font-mono">+91 9868757238</p>
        </div>
        <h1 className="px-5 items-center justify-center m-10 text-center text-xl font-mono">
          {write}
          <Cursor cursorColor="#FB923C" />
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto pb-10 md:p-5"
        >
          <div className="w-fit space-y-2 sm:space-x-2 ">
            <input {...register("name")} 
             className="contactinput" 
             placeholder="Name" 
             type="text" 
            />

            <input
              {...register("email")}
              className="contactinput"
              placeholder="Email"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            className="contactinput"
            placeholder="Subject"
            type="text"
          />

          <textarea {...register("message")} className="contactinput" placeholder="Message" />

          <button className="rounded-sm bg-yellow-300 p-2 text-black font-bold" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
