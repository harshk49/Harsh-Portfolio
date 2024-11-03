import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profile_pic_1.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    // Fixed typo here
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-4 border-b border-neutral-900 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              harsh kardile
            </motion.h1>
            <motion.span // Wrapped in motion.span for animation
              variants={container(0.5)} // Optional: Add a delay for staggered effect
              initial="hidden"
              animate="visible"
              className="text-4xl tracking-tight text-transparent bg-gradient-to-r from-orange-600 to-yellow-300 bg-clip-text"
            >
              web developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-6 my-2 font-normal tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center w-full lg:w-1/2 lg:p-8">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            src={profilePic}
            alt="Harsh Kardile"
            className="mt-6 rounded-2xl w-62 h-62 lg:w-auto lg:h-auto" // Increased width and height
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
