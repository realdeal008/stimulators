"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Man = "/image/mane.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-bg" />

      <div className="hero-content">
        
        {/* IMAGE WITH SMOOTH FADE + SLIDE */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src={Man}
            alt="Stylist working on a celebrity client's hair"
            className="image-cover"
            width={600}
            height={600}
            priority
          />
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        >
          {/* 3D HEADLINE */}
          <motion.h1 
            className="hair text-3d"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
             <div className="sec">
              <span className="logo text-3d-metal">MANEGASM</span> <br></br>
              <span className="penned text-3d-soft">STIMULATORS</span>
              
            </div>
            That you can feel
           
          </motion.h1>

          {/* 3D SUBTEXT */}
          <motion.p 
            className="celeb text-3d-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            The silkiness that absorbs into your skin.. leaving skin feeling silky without greasy feel 

Stimilates from Head to Toe

Plant Based Ingredients plant🌱
          </motion.p>

          {/* BUTTONS */}
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
          >
            <a href="#booking" className="btn btn-primary">
              Book Appointment
            </a>

            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
