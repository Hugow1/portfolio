import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:hugo@hugwinder.com?subject=${formData.subject}`;
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="relative z-0 flex flex-col items-center h-screen px-10 mx-auto overflow-hidden text-center md:text-left justify-evenly md:flex-row max-w-7xl"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col justify-center max-w-sm space-y-10 md:max-w-none">
        <h4 className="text-4xl font-semibold text-center">
          I&apos;ve got just what you need.{" "}
          <span className="underline decoration-[#f7ab0a]/50">
            Let&apos;s talk!
          </span>
        </h4>
        {/* <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">0612345678</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">hugo@hugowinder.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Straat naam 1</p>
          </div>
        </div> */}

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          className="flex flex-col mx-auto space-y-2 w-fit"
        >
          <div className="flex flex-col space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
