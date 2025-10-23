import React from "react";
import { motion } from "framer-motion";

import {
  FaBootstrap,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaLaravel,
  FaPhp,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiMui, SiMysql, SiRedux, SiThreedotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const Skill = ({ tech, Icon, color }) => {
  return (
  <motion.div
    variants={tech}
    initial="hidden"
    animate="visible"
    className="rounded-xl p-2 bg-black border-2 border-gray-700 flex items-center justify-center "
  >
    <Icon className={color} size={50} />
  </motion.div>
)};

const Technologies = ({ container }) => {
  const tech = (delay) => ({
    hidden: { y: 0 },
    visible: {
      y: [10, -10],
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        ease: "linear",
        duration: 3,
        delay: delay,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });

  const skills = [
    { id: 1, Icon: FaHtml5, color: "text-orange-600", delay: 0.1 },
    { id: 2, Icon: IoLogoCss3, color: "text-blue-600", delay: 0.2 },
    { id: 3, Icon: FaJsSquare, color: "text-yellow-300", delay: 0.3 },
    { id: 4, Icon: BiLogoTypescript, color: "text-blue-600", delay: 0.4 },
    { id: 5, Icon: FaSass, color: "text-pink-600", delay: 0.5 },
    { id: 6, Icon: FaBootstrap, color: "text-purple-700", delay: 0.6 },
    { id: 7, Icon: RiTailwindCssFill, color: "text-blue-500", delay: 0.7 },
    { id: 8, Icon: SiMui, color: "text-blue-500", delay: 0.8 },
    { id: 9, Icon: FaReact, color: "text-blue-400", delay: 0.9 },
    { id: 10, Icon: SiRedux, color: "text-purple-600", delay: 1.0 },
    { id: 11, Icon: FaGitAlt, color: "text-orange-600", delay: 1.1 },
    { id: 12, Icon: SiThreedotjs, color: "text-white", delay: 1.2 },
    { id: 13, Icon: FaPhp, color: "text-blue-600", delay: 1.3 },
    { id: 14, Icon: FaLaravel, color: "text-orange-600", delay: 1.4 },
    { id: 15, Icon: SiMysql, color: "text-blue-600", delay: 1.5 },
  ];
  return (
    <div className="py-[5rem]">
      <motion.h1
        variants={container(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-gradient text-center text-4xl tracking-wider font-bold my-32 sm:my-16"
      >
        Technologies
      </motion.h1>
      <motion.div
        variants={container(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex justify-center flex-wrap items-center gap-10"
      >
        {skills.map((skill, index) => (
          <Skill
            key={index}
            tech={tech(skill.delay)}
            Icon={skill.Icon}
            color={skill.color}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
