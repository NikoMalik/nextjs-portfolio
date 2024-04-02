'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import SectionHeading from './ui/uittsx/Sectionheader'
import Link from "next/link";
import Image from "next/image";
import ProjectTag from './ProjectTag';
import { FiLock } from 'react-icons/fi'
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const itemVariants = {
  closed: {
    opacity: 0,
    x: 100,
  },
  open: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1,
      duration: 0.4,
    },
  },
};

let products = [
  {
    img: "/images/portfolio.png",
    randID: generateUniqueId(),
    title: "Portfilio_template",
    description: "Adaptive portfolio template for all niches...",
    tags: ["All", "Web"],
    href: "https://github.com/PALE-W/nextjs-portfolio",
    isPrivate: false,
  },
  {
    img: "/images/ecommerce.jpg",
    randID: generateUniqueId(),
    title: "B2B ecommerce site and Blog",
    description: "Elegant solution for complex and fast ecommerce site and blog",
    tags: ["All", "Mobile", "Web"],
    href: "",
    isPrivate: true,
  },
  {
    img: "/images/comingsoon.png",
    randID: generateUniqueId(),
    title: "Pale_w",
    description: "New brand,youtube channel and merch",
    tags: ["All", "Products"],
    href: "",
    isPrivate: true,
  },
  {
    img: "/images/DOGERAZ LOGO.jpg",
    randID: generateUniqueId(),
    title: "Dogeraz",
    description: "Music brand,producer,artist,youtube channel",
    tags: ["All", "Products"],
    href: "",
    isPrivate: true,
  },
];


const Portfolio = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef("projects");
  const { inView } = useInView({
    ref,
    threshold: 0.5,
    
  });
  const [productClicked, setProductClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
 
  

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleProductClick = () => {
    setProductClicked(true);
  };

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


  let checkTile = (title) => {
    let shortener = title.substring(0, 19);
    return shortener + "...";
  };

  const filteredProjects =
    selectedTag === "All"
      ? products
      : products.filter((project) => project.tags.includes(selectedTag));

  return (
    <motion.section 
    ref={ref}
    id="projects"
    initial={{ opacity: 0, y: 75, scale: 0.75 }}
    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8}}
    transition={{ duration: 0.5}}
    className=" py-20   min-h-screen   container mx-auto   mb-40     "
      
    >

      <div className="  px-7  mt-10 ">
        <SectionHeading>
          My projects </SectionHeading>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag onClick={handleTagClick} name="All" isSelected={selectedTag === "All"} />
          <ProjectTag onClick={handleTagClick} name="Web" isSelected={selectedTag === "Web"} />
          <ProjectTag onClick={handleTagClick} name="Products" isSelected={selectedTag === "Products"} />
          <ProjectTag
            onClick={handleTagClick}
            name="Mobile"
            isSelected={selectedTag === "Mobile"}
          />
        </div>
        <div className="my-10">
          <motion.div
            initial="closed"
            animate="open"
            variants={sideVariants}
            className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10  "
          >
            {filteredProjects.map((each, i) => (
              <motion.div
                variants={itemVariants}
                key={each.randID} 
                className="group h-[20rem] sm:h-[28rem] md:h-[20rem] w-full relative cursor-pointer overflow-hidden hover:shadow-md rounded-lg border border-zinc-800/60  "
              >
                {each.isPrivate && ( 
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <FiLock className="text-red-500" />
              </div>
                )}
                <Link href={`/products/${each.title}`}>
                  <div className="h-full w-full">
                    <Image
                      width={800}
                      height={800}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:blur-sm dark:group-hover:opacity-20"
                      src={each.img}
                      alt=""
                    />
                  </div>
                </Link>
                <div className="absolute inset-0 translate-y-[50%] sm:translate-y-[70%] md:translate-y-[45%] px-3 border-t border-zinc-800 transition-all duration-300 group-hover:translate-y-[50%] sm:group-hover:translate-y-[70%] md:group-hover:translate-y-36 lg:group-hover:translate-y-44 lg:translate-y-[76%] pt-3 ease-in-out dark:bg-[#121212] bg-white">
                  <div className="flex justify-between items-center">
                    <h1 className="text-lg font-InterBold dark:text-white">
                      {checkTile(each.title)}
                    </h1>
                  </div>
                  <div className="flex gap-x-3 text-slate-300 text-xs mt-2">
                    <p>{each.description}</p>
                  </div>
                  <div className="flex items-center gap-x-3 mt-5">
                  {each.isPrivate && (
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#242424", color: "#fff" }}
                      whileTap={{ scale: 0.9 }}
                      className="dark:bg-[#242424] py-2 rounded-md border dark:border-zinc-800/60 text-sm font-InterBold w-1/2"
                      onClick={handleProductClick}
                    >
                        {productClicked && each.isPrivate ? "Sorry, the product is private" : "View Product"}
                        </motion.button>
                      )}
                      {!each.isPrivate && (
                       <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: "#242424", color: "#fff" }}
                      whileTap={{ scale: 0.9 }}
                      className="dark:bg-[#242424] py-2 rounded-md border dark:border-zinc-800/60 text-sm font-InterBold w-1/2"
                      
                    >
                      <Link href={each.href}>View Product</Link>
                    </motion.button>
                    )}
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};



export default Portfolio;
