import React from "react";
import about_Img from "../assets/about.jpg";
import { motion } from "framer-motion";
import {ABOUT_TEXT} from '../constants'
const About = ({container}) => {
  return (
    <div id="about" className="flex sm:h-screen sm:pt-40 pt-52 flex-col items-center gap-10 sm:gap-20 px-7">
      <motion.h1
       variants={container(0.3)}
       initial="hidden"
       whileInView="visible"
       viewport={{once:true}}
       className="text-gradient text-center text-4xl tracking-wider font-bold mt-32 sm:mt-10">
        About Me
      </motion.h1>
      <motion.div className=" flex sm:gap-20 gap-10 max-sm:flex-col">

      <motion.div
        variants={container(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        className="w-full sm:w-1/2 mb-10"
        >
        <img className="rounded-3xl object-fill" src={about_Img} alt="About_img" />
      </motion.div>
      <motion.div
         variants={container(0.7)}
         initial="hidden"
         whileInView="visible"
         viewport={{once:true}}
          className="w-full lg:w-1/2 ">
        <p
          className=" font-light text-lg text-justify tracking-tighter max-w-[700px]"
          >
          {ABOUT_TEXT}
        </p>
      </motion.div>
    </motion.div>

      
    </div>
  );
};

export default About;
