'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FiLayout, FiSettings, FiPenTool, FiTag } from 'react-icons/fi';
import SectionHeading from './ui/uittsx/Sectionheader';

export const services = [
  {
    icon: <FiLayout />,
    name: 'Product Management',
    description: '2+ years professional experience of hands-on working, writing product requirements, and owning the product roadmap of large complex products and services',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description: 'Full-stack web development with expertise in both frontend and backend technologies, ensuring seamless digital experiences from UI to server logic',
  },
  {
    icon: <FiPenTool />,
    name: 'Market Research',
    description: 'Experience with creating a business case and business model for products and services, as well as conducting go-to market feasability and ROI.',
  },
  {
    icon: <FiTag />,
    name: 'Marketing Strategy',
    description: 'Effective promotion of IT products - market analysis, development of promotion strategies, creation of marketing campaigns, as well as monitoring and analytics of results',
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView({ threshold: 0.5 });
  const mainControls = useAnimation();
  const serviceControlsArray = Array.from({ length: services.length }, () => useAnimation());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      
      services.forEach((_, index) => {
        setTimeout(() => {
          serviceControlsArray[index].start('visible');
        }, index * 1000); 
      });
    } else {
      setIsVisible(false);
      
      serviceControlsArray.forEach(control => control.start('hidden'));
    }
  }, [isInView, mainControls, serviceControlsArray]);
  
  
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.section
      id="skills"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
      className="py-20 min-h-screen px-4 sm:px-6 mb-40 container mx-auto"
    >
      <div className="flex flex-col h-full">
        <div>
          <SectionHeading>What I can do for clients</SectionHeading>
        </div>

        <div className="py-20 grid md:grid-cols-4 lq:grid-cols-4 sm:grid gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="border border-slate-300/50 backdrop-blur-xl p-6 rounded-2xl"
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
              }}
            >
              <div className="text-sky-100 rounded sm w-12 h-12 flex justify-center items-center mb-24 text-5xl">{service.icon}</div>
              <h3 className="text-2xl sm:text-5xl lg:text-xl lg:leading-normal bg-clip-text text-transparent bg-gradient-to-r from-zinc-200/80 via-zinc-200 to-zinc-200/80 font-semibold">
                {service.name}
              </h3>
              <p className="text-slate-300 text-xl sm:text-sm mb-6 py-3 md:text-xl lg:text-xl font-mono lg:leading-normal">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;