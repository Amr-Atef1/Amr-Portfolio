import React from 'react'
import { motion } from 'framer-motion';
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

  import "react-vertical-timeline-component/style.min.css";
  
 
  import { experiences } from "../constants";
const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        date={experience.date}
        iconStyle={{background:experience.iconBg}}
        icon={
          <div className="flex items-center justify-center w-full h-full">
            <img src={experience.icon} alt={experience.company_name} loading="lazy" className="w-full h-[90%] object-contain"/>
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px]">{experience.title}</h3>
          <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
        </div>
        <ul className="mt-5 ml-5 list-disc space-y-2">
          {experience.points.map((point,index) =>(
            <li key={index} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
const Experience = ({container}) => {
  return (
    <div id='experience' className='pt-[10rem] sm:py-[6rem] '>
    <motion.div variants={container(0.7)}>
     
       <motion.h1
             variants={container(0.3)}
             initial="hidden"
             whileInView="visible"
             viewport={{once:true}}
             className="text-gradient text-center text-4xl tracking-wider font-bold mb-[3rem] sm:mb-[5rem]">
              Experience
            </motion.h1>
    </motion.div>
    <div className="mt-20 sm:mt-40 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </div>
  )
}

export default Experience