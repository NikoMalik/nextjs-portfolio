'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from "next/link";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { useForm } from "@formspree/react";
require("dotenv").config();
import SectionHeading from './ui/uittsx/Sectionheader';
const FORM = process.env.NEXT_PUBLIC_FORMSPREE.toString();

const Contact = () => {
  const [state, handleSubmit] = useForm(FORM);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const { inView } = useInView({
    ref,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
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
      ref={ref}
      style={{ position: 'relative', overflow: 'hidden' }}
      initial={{ opacity: 0, y: 75, scale: 0.8 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
      transition={{ duration: 0.5}}
      className="min-h-screen px-4 mx-auto py-40 sm:px-6 grid md:grid-cols-2 my-12 md:my-12 gap-4 relative"
      id="contact"
    >
      <div className="md:col-span-1 mb-8 mr-0 ld:mr-20 md:mr-20 sm:mr-0  text-left md:text-left lq:text-left sm:text-center ">
        <SectionHeading>
          Let's Connect
        </SectionHeading>
        <div className="z-10">
          <p className="text-[#ADB7BE] mb-4 max-w-md test-center ld:text-left md:text-left sm:text-center">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
        </div>
      </div>
      <div className="md:col-span-1">
        {state.succeeded ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="gustavo@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="name" className="text-white block text-sm mb-2 font-medium">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="gustavo fring"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              disabled={state.submitting}
              type="submit"
              className="bg-zinc-300 shadow-[inset_0_0_0_2px_#616467] px-6 py-3 sm:px-10 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-black transition duration-200 w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
