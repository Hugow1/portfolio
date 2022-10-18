import React from "react";
import Image from "next/future/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Hugo",
      "I am a motorcycle rider",
      "And also a professional hobby cook",
      "buildingSites.tsx",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-8 overflow-hidden text-center">
      <BackgroundCircles />
      <Image
        src={urlFor(pageInfo?.heroImage).url()}
        width={500}
        height={500}
        alt="Hugo Winder"
        className="relative object-cover w-32 h-32 mx-auto rounded-full"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo.role}
        </h2>
        <h1 className="px-10 text-4xl font-semibold h-28 md:h-auto lg:text-6xl">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButtonClass">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButtonClass">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButtonClass">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButtonClass">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
