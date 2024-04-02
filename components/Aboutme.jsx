'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './ui/uittsx/Sectionheader';
import Image from 'next/image';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const { inView } = useInView({
    ref,
    threshold: 0.5,
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

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
      id="about"
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 75, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5 }}
      className="py-20 text-center relative mb-80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading>About Me</SectionHeading>
        <div className="relative flex flex-col md:flex-row justify-center items-center md:justify-between">
          <div className=" relative mb-8 md:mb-0 mr-9 ">
            <Image
              src="/images/public.png"
              alt="Your Image"
              width={500}
              height={500}
              className="w-full "
            />
       
          </div>
          <div >
            <p className="text-slate-300 text-base  text-left  md:text-lg leading-relaxed max-w-lg">
              Embarking on my professional journey five years ago as a Music Producer, my venture into the digital realm has been nothing short of fascinating. As someone inherently drawn to technology, my passion for crafting online tools and web applications has only deepened over the years. I've marveled at its intricacies and boundless possibilities within the digital sphere. My intrigue with data and its pivotal role in shaping decisions steered me towards adopting a more analytical mindset, eventually leading me to don the hat of a product manager. Leveraging my technical acumen alongside a keen eye for detail, I was constantly trying to find convenient technologies for different types of businesses. Embracing remote work has afforded me the opportunity to collaborate with diverse teams, fostering a culture of learning and growth enriched by varied cultural perspectives. Presently based in Moscow, I remain committed to empowering businesses worldwide to maximize their online presence and unlock their full digital potential.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;