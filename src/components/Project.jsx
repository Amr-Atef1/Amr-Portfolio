import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { projects } from "../constants";

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const ProjectCard = ({
  index,
  name,
  tags,
  description,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.3, 2)}
      initial="hidden"
      whileInView="show"
      viewport={{once:true}}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#151030] p-5 rounded-2xl w-full sm:w-[350px]"
      >
        <a href={live_demo_link} target="_blank">
          <div className="w-full relative h-[250px]">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="githup"
                  loading="lazy"
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="mt-5 h-[250px]">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </a>
      </Tilt>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div id="project" className="sm:py-[10rem] min-h-screen">
      <motion.h1
        variants={fadeIn("left", "spring", 0.5, 2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-gradient text-center text-4xl tracking-wider font-bold mt-32 sm:mt-10"
      >
        Projects
      </motion.h1>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
