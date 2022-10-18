import React from "react";
import Image from "next/future/image";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
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
      className="relative flex flex-col items-center h-screen px-10 mx-auto text-center justify-evenly md:text-left md:flex-row max-w-7xl"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <Image
        src={urlFor(pageInfo?.profilePicture).url()}
        width={300}
        height={300}
        alt="Hugo Winder"
        placeholder="blur"
        className="object-cover -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h96 xl:w-[500px] xl:h-[600px]"
      />

      <div className="px-0 space-y-10 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}

export default About;
