import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="footer  border border-[#33353F]  z-10 bg-[#121212] bg-opacity-100">
      
      <div className="container p-12 flex justify-between mx-auto  flex-col text-center text-neutral-900 md:flex-row md:justify-between">


      <div className="flex flex-row items-center justify-center ">
          <h3 className="space-x-2 text-xl py-5 text-white font-mono">© 2024 PALE W </h3>
        </div>
       
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a href="https://github.com/PALE-W" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://twitter.com/Pale__W"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineTwitter
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/ilya-ilyushin/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC6SAVNeHycnhi17MZCkiTmQ"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineYoutube
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer