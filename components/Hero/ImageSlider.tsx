"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["/logo1.png", "/logo2.png", "/logo3.png", "/logo4.png"];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden lg:mt-24">
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className="absolute top-0 left-0 w-full h-full object-contain"
          initial={{ x: "100%", rotateY: 20, skewY: 10 }}
          animate={{
            x: index === currentIndex ? 0 : "-100%",
            rotateY: 0,
            skewY: 0,
          }}
          exit={{ x: "-100%", rotateY: -20, skewY: -10 }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
