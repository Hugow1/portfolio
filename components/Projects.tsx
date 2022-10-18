import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/future/image";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
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
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden text-left justify-evenly md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-5 snap-center md:p-44"
          >
            <Image
              src={urlFor(project.image).url()}
              width={500}
              height={500}
              alt=""
              className="xl:max-w-7xl xl:max-h-[60%]"
            />
            <div className="max-w-6xl px-0 space-y-10 md:px-10">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Showcase {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
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
              <p className="text-lg text-center md:text-left">
                {project?.summary}
              </p>
              <div className="flex items-center justify-center max-w-6xl">
                <a href={project.linkToBuild} target="_blank" rel="noreferrer">
                  <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold">
                    View project
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
