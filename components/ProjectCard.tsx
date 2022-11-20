import React from "react";
import { Project } from "../typings";
import Image from "next/future/image";
import { urlFor } from "../sanity";

type Props = {
  project: Project;
  i: number;
  total: number;
};

function ProjectCard({ project, i, total }: Props) {
  return (
    <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 px-10 space-y-5 snap-center md:p-44">
      <Image
        src={urlFor(project.image).url()}
        width={500}
        height={500}
        alt=""
        className="object-contain max-h-[435px]"
      />
      <div className="max-w-6xl px-0 space-y-5 md:px-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#f7ab0a]/50">
            {project?.title} - {i}/{total}
          </span>
        </h4>
        <div className="flex items-center justify-center space-x-2">
          {project.technologies?.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              height={50}
              width={50}
              alt={technology.title}
              className="w-10 h-10"
            />
          ))}
        </div>
        <p className="text-lg text-center md:text-left">{project?.summary}</p>
        <div className="flex items-center justify-center max-w-6xl">
          <a href={project.linkToBuild} target="_blank" rel="noreferrer">
            <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold">
              View project
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
