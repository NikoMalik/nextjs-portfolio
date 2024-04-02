'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FiTag, FiMusic, FiCode, FiBriefcase, FiSettings, } from 'react-icons/fi';
import SectionHeading from './ui/uittsx/Sectionheader';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useInView } from 'react-intersection-observer';

const experiencesData = [
 
  {
    title: 'Founder of Indie Projects',
    company: 'Self-Employed',
    cardDetailedText:
      'Initiated and managed several independent projects, ranging from mobile apps to online platforms. Learned valuable lessons from failures, gaining insight into project management and entrepreneurship.',
    icon: <FiBriefcase />,
    date: "2017 - 2020",
  },
  {
    title: 'Music Producer & Brand Creator',
    company: 'Dogeraz',
    cardDetailedText:
      'Led music production projects from concept to final release, creating unique beats and melodies. Developed brand identity and marketing strategies, resulting in increased brand awareness and engagement.',
    icon: <FiMusic />,
    date: "2019 - Present",
  },
  {
    title: 'Backend developer',
    company: 'TechConnect LLC',
    cardDetailedText:
    'Led the development of backend systems for various projects, implementing scalable solutions and optimizing performance. Collaborated with cross-functional teams to design and deploy robust APIs and databases.',
    icon: <FiTag />,
    date: "2021-2022",
  },
  {
    title: 'Freelance Full-Stack Developer',
    company: 'Self-Employed',
    cardDetailedText:
      'Provided custom software solutions for clients across various industries. Successfully delivered projects on time and within budget.',
    icon: <FiCode />,
    date: "2022 - 2023",
  },
  {
    title: 'Product Manager',
    company: 'TechGenius Inc.',
    cardDetailedText:
      'Led product development lifecycle, from ideation to launch, for innovative software solutions. Collaborated with cross-functional teams to define product roadmap and drive successful product launches.',
    icon: <FiSettings />,
    date: "2024 - Present",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });
  const mainControls = useAnimation();
  const experiencesDataControlsArray = Array.from({ length: experiencesData.length }, () => useAnimation());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = ref.current.getBoundingClientRect().top;
      const sectionBottom = ref.current.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight && sectionBottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isInView]);
  
  
  


  


  return (
    <motion.section
      id="experience"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
      variants={{
        hidden: { opacity: 0, y: 1 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={{ opacity: 0, y: 75, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8}}
      transition={{ duration: 1}}
      className=' px-4  py-20  leading-8  xl:gap-16 sm:py-16'
    >
      <SectionHeading>My Experience</SectionHeading>
      
      <div className='max-w-6xl min-h-screen px-4 py-20 mx-auto sm:px-6 '>
        <VerticalTimeline
        lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
            <VerticalTimelineElement
        
            visible={true}
        
            className=" vertical-timeline-element--work"
            contentArrowStyle={{
              borderRight:
        
        
                "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
        
        
            contentStyle={{
              background: "rgba(255, 255, 255, 0)",
              backdropFilter: "blur(20px)",
              boxShadow: "none",
              border: "1px solid rgb(203 213 225 / 0.5)",
              textAlign: "left",
              padding: "1.5 rem",
        
            }}
        
        
        
            icon={item.icon}
            iconStyle={{
        
              background:
                "rgba(255, 255, 255, 0)",
              fontSize: "1.5rem",
            }}
                transition={{ duration: 0.5 }}
          >
            <h3 className=" font-semibold capitalize text-xl bg-clip-text text-slate-300">{item.title}</h3>
            <p className="font-extrabold text-left text-xl !mt-0 text-red-300">{item.company}</p> 
            <p className="font-normal text-left !mt-0  text-lime-300">{item.date}</p>
            <p className="font-extrabold text-left text-xl !mt-0 text-slate-300">{item.cardDetailedText}</p> 
            
            <p className="!mt-1 !font-normal text-[#ADB7BE] ">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
            ))}
          </VerticalTimeline>
      </div>
    </motion.section>
  );
};

export default Experience;
