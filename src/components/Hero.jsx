import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/profile_pic_1.jpg";
import cricket from "../assets/cricket.jpg";
import shelf from "../assets/shelf.jpg";
import tajMahal from "../assets/tajmahal.jpg";
import spotify from "../assets/spotify.jpg";

import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 }, // Start from the right (x: 100)
  visible: {
    x: 0, // Move to the left (x: 0)
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="pb-20 border-b border-neutral-900 lg:mb-35">
      {/* Increased bottom padding */}
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
            <motion.span
              variants={container(0.5)}
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
            className="block mt-6 rounded-2xl w-62 h-62 lg:w-auto lg:h-auto lg:hidden " // Corrected to show on small screens and hide on large screens
          />
        </div>
      </div>

      {/* First Container */}
      <motion.div
        variants={container(1.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 top-2 right-16 rounded-xl lg:block"
      >
        <img
          src={cricket}
          alt="Cricket pic"
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>

      {/* Second Container */}
      <motion.div
        variants={container(2)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 top-56 right-16 rounded-xl lg:block"
      >
        <img
          src={spotify}
          alt="Laptop Spotify"
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>

      {/* Third Container */}
      <motion.div
        variants={container(2.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 top-[440px] right-16 rounded-xl lg:block"
      >
        <img
          src={tajMahal}
          alt="Taj Mahal"
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      {/* Fourth Container */}
      <motion.div
        variants={container(3)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-72 h-72 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 top-32 right-[300px] rounded-xl lg:block"
      >
        <img
          src={profilePic}
          alt="Profile Picture"
          className="object-cover w-full h-full rounded-xl"
        />
      </motion.div>

      {/* Fifth Container */}
      <motion.div
        variants={container(3.5)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 -top-24 right-[300px] rounded-xl lg:block"
      >
        {/* Content for Fifth Container */}
      </motion.div>

      {/* Sixth Container */}
      <motion.div
        variants={container(4)}
        initial="hidden"
        animate="visible"
        className="absolute hidden w-48 h-48 -mt-8 -mr-4 bg-transparent border-2 border-gray-500 top-[440px] right-[300px] rounded-xl lg:block"
      >
        <img
          src={shelf}
          alt="Book Shelf"
          className="object-cover w-full h-full rounded-xl grayscale"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
