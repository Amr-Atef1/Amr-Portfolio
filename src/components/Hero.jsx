import React from "react";
import img from "../assets/portfolio_img.JPG";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";
const Hero = ({container}) => {
  return (
    <div className="flex h-[calc(100vh-106px)]  sm:justify-around max-sm:flex-col items-center gap-10 sm:gap-20 max-[400px]:mb-[10rem] mb-[6rem] mt-10 sm:my-20">
      <div className="w-full lg:w-1/2 ">
        <motion.h1
          variants={container(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="mb-5 sm:mb-10 font-thin max-sm:pt-10 text-5xl sm:text-6xl tracking-wider lg:text-8xl "
        >
          Amr Atef
        </motion.h1>
        <motion.p
          variants={container(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className="sm:mb-10 mb-5 text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
        >
          Frontend Developer
        </motion.p>
        <motion.p
          variants={container(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          className=" font-light text-lg text-justify tracking-tighter max-w-[700px]"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      <motion.div
        variants={container(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true}}
        className="w-full sm:w-1/2 mb-10"
      >
        <img className="rounded-xl object-fill" src={img} alt="hero_img" />
      </motion.div>
    </div>
  );
};

export default Hero;
