"use server"
import Image from "next/image";
import Hero from "@/components/Hero";
import { Nav } from "@/components/Nav";
import AboutMe from "@/components/Aboutme";
import Particles from "@/components/ui/uittsx/particles";




import Footer from "@/components/Footer";
import Portfolio  from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import  SmoothScroll  from "@/components/Smoothscroll";
import Experience from "@/components/Experience";






export default async function Home() {
 

 
  
  

  
  


  
  


  return (
    <main className="flex min-h-screen flex-col antialiased   bg-gradient-to-tl from-black via-slate-300/10 to-black overflow-hidden   ">
       <SmoothScroll/> 
      
       
                <div className="container mt-24  ">
                  <Nav  /> 
                </div>
      
         
         
        
          
        
             
         <Particles className='fixed top-0 left-0 w-full h-full pointer-events-none z-0 animate-fade-in'
           quantity={50}
           /> 
         
         
            <Hero />
           
               <AboutMe  />
            
            <Services/>
             <Experience/>
            <Portfolio/>
              <Contact/>
          
          
          
   
         <Footer/>
        
    </main>
  );
}
