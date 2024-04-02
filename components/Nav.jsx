"use client";
import React from "react";
import { useState, useRef, useEffect  } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  
  AiOutlineInstagram,
} from "react-icons/ai"
import { IoMdClose } from "react-icons/io";


const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
    },
  },
};

const ButtonVariant = {
  closed: {
    height: "4rem",
    transition: { duration: 0.1 },
  },
  open: {
    height: "25rem",
    transition: { when: "beforeChildren", duration: 0.1 },
  },
};

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];


let icons = [
  { name: <AiOutlineTwitter />, href: "https://twitter.com/Pale__W" },
  { name: <AiOutlineInstagram />, href: "https://www.instagram.com/pale__w/" },
  { name: <AiOutlineGithub />, href: "https://github.com/PALE-W" },
  { name: <AiOutlineLinkedin />, href: "https://www.linkedin.com/in/ilya-ilyushin/" },
];
export const Nav = () => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    cycleOpen(!open);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
   
    const handleAnchorClick = (e) => {
      e.preventDefault();
      const id = e.target.getAttribute('href')?.slice(1);
      if (!id) return;
      scrollToSection(id);
    };

   
    document.querySelectorAll('a[href^="#"]').forEach((el) => {
      el.addEventListener('click', handleAnchorClick);
    });

  
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((el) => {
        el.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);


  return (
    <>
       <div ref={ref}>
        <AnimatePresence>
          <motion.header
            key="parent"
            variants={ButtonVariant}
            initial="closed"
            animate={open ? "open" : "closed"}
            exit={{
              height: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
            className={twMerge(
              "bg-zinc-900  mb-20  w-full   lg:px-28 md:px-5 border-neutral-700/30 border-b fixed top-0 z-10  bg-opacity-100 "
            )}
          >
            <div className="flex items-center    justify-between px-3 pt-5  ">
             <br/>
              <button
                onClick={handleClick}
                className="flex lg:hidden  flex-col mt-2 "
              >
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
                ></span>
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    } `}
                ></span>
                <span
                  className={`bg-[#83868A] block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
                ></span>
              </button>

              <div className="lg:flex gap-x-6 ml-[130px]  hidden ">
                {links.map(({ name, href }, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.2 }}
                      className="flex relative  scale-100 px-4 text-neutral-400 hover:text-neutral-200 transition-all ease-in duration-200 flex-col font-InterRegular font-medium  text-sm "
                    >
                      {isActive && (
                        <motion.span
                          layoutId="highlight"
                          className="bg-[#181818]  h-8 border border-neutral-700/40  -top-[5px] absolute inset-0 -z-[1] rounded-lg"
                        ></motion.span>
                      )}
                      <Link href={href}>{name}</Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="lg:flex  hidden justify-center gap-x-6 ">
              {icons.map(({ name, href }) => (
                <Link key={href} href={href} className="hover:text-neutral-100 cursor-pointer transition-all ease-in text-xl duration-200  text-neutral-500">
                  {name}
                </Link>
              ))}
              </div>
            </div>

            {open && (
              <motion.div
                className="p-6 "
                initial={{ height: 0 }}
                animate={{
                  height: 300,
                }}
                exit={{
                  height: 0,
                  transition: { delay: 0.1, duration: 0.1 },
                }}
              >
                <motion.div
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  {links.map(({ name, href }) => (
                    <motion.a
                      className="flex flex-col font-InterRegular leading-10 font-medium  text-lg"
                      key={name}
                      whileHover={{ scale: 1.1 }}
                      variants={itemVariants}
                    >
                      <Link href={href}>{name}</Link>
                    </motion.a>
                  ))}

                  <div className="flex  justify-center gap-x-11 mt-16 ">
                    {Icons.map((each) => (
                      <div
                        key={each.name}
                        className="hover:text-neutral-100 cursor-pointer transition-all ease-in duration-200  text-neutral-500"
                      >
                        {each.name}
                      </div>
                    ))}
                  </div>
                </motion.div>
                <div className="cursor-pointer" onClick={() => cycleOpen(open)}>
                  <IoMdClose />
                </div>
              </motion.div>
            )}
          </motion.header>
        </AnimatePresence>
      </div>
    </>
  );
};