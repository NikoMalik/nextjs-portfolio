'use client'
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from "next/link"

const Hero = () => {
  return (
    <section id="home" className='py-20 sm:py-40 text-center mb-20 items-center justify-items-center'>
      <div className='relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6'>
        <div className='container mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: 'easeOut', duration: 0.4 }}
            className='col-span-8 place-self-center text-center'
          >
            <h1 className='pb-4 font-extrabold tracking-tight text-transparent text-5xl sm:text-6xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 text-center'>
              <span className='bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-500'>
                Hi, I am {''}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  'DOGERAZ',
                  500,
                  'Web Developer',
                  500,
                  'Product manager',
                  500,
                  'Producer',
                  500,
                  'Artist',
                  500,
                  'PALE W',
                  500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <br />
            <p className='text-base sm:text-lg lg:text-2xl mb-8 text-zinc-300'>I am Software Engineer and Product Manager</p>
            <div className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none sm:justify-center sm:flex-row sm:inline-flex">
              <Link
                href="#contact"
                className="bg-zinc-300 w-full sm:w-fit shadow-[inset_0_0_0_2px_#616467] px-6 py-3 sm:px-10 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-black transition duration-200 mb-4 md:mb-0 "
              >
                Contact me
              </Link>
              <Link
                href="/"
                className="bg-zinc-300 shadow-[inset_0_0_0_2px_#616467] px-6 py-3 sm:px-10 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-black hover:text-white text-black transition duration-200 w-full sm:w-auto"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
