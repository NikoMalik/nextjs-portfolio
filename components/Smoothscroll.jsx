'use client'
import React, { useEffect } from 'react';

import Lenis from '@studio-freight/lenis';
import bezierEasing from 'bezier-easing';

const SmoothScroll = () => {
    

    useEffect(() => {
      const easing = bezierEasing(0.5, 1, 0.89, 1);

        const lenis = new Lenis({
            duration: 1,
            easing: (t) => easing(t),
            
            
           
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

  
  }
export default SmoothScroll;
