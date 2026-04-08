

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Your image path - replace with actual path
const Man = "/image/mane.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* METALLIC BACKGROUND WITH TEXTURE */}
      <div className="hero-bg" />

      <div className="hero-content">
        {/* IMAGE - LEFT SIDE */}
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={Man}
            alt="Celebrity hairstylist working on client"
            className="image-cover"
            width={600}
            height={800}
            priority
          />
        </motion.div>

        {/* TEXT - RIGHT SIDE */}
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        >
          {/* LOGO: RED TO GOLD */}
          <motion.h1 
            className="logo"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            MANEGASM
          </motion.h1>

          {/* SUBTITLE: BLACK */}
          <motion.p 
            className="penned"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            STIMULATORS
          </motion.p>

          {/* TAGLINE: ITALIC BLACK */}
          <motion.div 
            className="tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="tagline-line1">Where Nature Awakens</span>
            <span className="tagline-line2">Your Hair & Skin</span>
          </motion.div>

          {/* DESCRIPTION WITH ACCENTS */}
          <motion.p 
            className="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Experience head-to-toe stimulation powered by over ten{" "}
            <span className="accent-gold">nutrient-rich</span>{" "}
            <span className="accent-gold">botanicals</span> — including ginger and{" "}
            <span className="accent-gold">turmeric</span> — crafted to melt 
            effortlessly into your hair and skin{" "}
            <span className="accent-red">without a greasy feel</span>, while leaving 
            both <span className="accent-red">silky, soft</span>, and nourished.
          </motion.p>

          {/* CTA BUTTON */}
          <motion.a 
            href="#booking"
            className="btn-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
