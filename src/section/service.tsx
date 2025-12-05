"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { useCart } from "../component/useCart";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: easeOut,
    },
  }),
};

const Services: React.FC = () => {
  const { addToCart } = useCart();
  
  const serviceData = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      ),
      title: "Signature Cut & Style",
      desc: "Our signature service featuring precision cutting and personalized styling consultation.",
      price: "250",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      ),
      title: "Color Transformation",
      desc: "Expert color services using premium products for vibrant, healthy-looking hair.",
      price: "350",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Bridal Package",
      desc: "Complete bridal hair and makeup package including trial sessions and day-of styling.",
      price: "950",
    },
  ];

  return (
    <section id="services" className="section-padding-bg">
      <div className="custom-container">

        {/* Header */}
        <motion.div
          className="custom-text-block"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="custom-H">Premium Services</h2>
          <p className="custom-paragraph">
            Transformative hair artistry that makes you look and feel extraordinary
          </p>
        </motion.div>

        {/* Cards */}
        <div className="custom-grid">
          {serviceData.map((service, i) => (
            <motion.div
              key={i}
              className="service-card"
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariant}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.25 },
              }}
            >
              <motion.div
                className="custom-circle"
                whileHover={{ scale: 1.12, transition: { duration: 0.25 } }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-class"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {service.icon}
                </svg>
              </motion.div>

              <h3 className="signature-cut-style">{service.title}</h3>
              <p className="custom-style">{service.desc}</p>

              <div className="flex-between-center">
                <span className="custom-text">${service.price}+</span>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart({
                    name: service.title,
                    price: parseFloat(service.price),
                    description: service.desc,
                    image: "https://via.placeholder.com/150",
                  })}
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
