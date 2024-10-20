"use client";
import { motion } from "framer-motion";

const scrollAnimation = {
  hidden: { opacity: 0, scale: 0.5, rotate: 10 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
};

const ScrollSection = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={scrollAnimation}
      transition={{ duration: 10, type: "spring", stiffness: 100, damping: 20 }}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
