import React from "react";
import Image from "next/future/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <div className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <Image
        src={urlFor(experience?.companyImage).url()}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        width={500}
        height={500}
        alt=""
      />
      <div className="px-0 md:p-10 ">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="text-2xl font-bold mt--1">{experience?.company}</p>
        <div className="flex my-2 space-x-2">
          {experience.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              className="w-10 h-10 rounded-full"
              width={50}
              height={50}
              alt=""
            />
          ))}
        </div>
        <p className="py-5 text-gray-300 uppercase">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="ml-5 space-y-4 text-lg list-disc">
          {experience.points?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
