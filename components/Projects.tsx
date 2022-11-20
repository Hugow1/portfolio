import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import ProjectCard from "./ProjectCard";

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
      <div className="relative z-20 flex w-full mt-24 overflow-x-scroll snap-x snap-mandatory">
        {projects?.map((project, i) => (
          <ProjectCard
            key={project._id}
            project={project}
            i={i + 1}
            total={projects.length}
          />
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
