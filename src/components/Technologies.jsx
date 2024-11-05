import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import {
  RiJavascriptFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiPostman, SiTypescript } from "react-icons/si";
import GoogleCloud from "../assets/google_cloud.png"; // Correct import statement
import { motion } from "framer-motion";
import { BiLogoTypescript } from "react-icons/bi";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const boxSize = "w-24 h-24"; // Set a uniform size for the boxes

const Technologies = () => {
  return (
    <div className="px-4 pb-24 border-b border-neutral-800 sm:px-0">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent pb-2 my-10 sm:my-20 text-center"
        style={{ whiteSpace: "nowrap" }}
      >
        {/* Added margin-top for spacing */}
        <div className="mt-8">
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Technologies
          </motion.h2>
          <motion.h2 className="text-3xl sm:text-4xl lg:text-5xl">
            Known
          </motion.h2>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* First Row */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <RiJavascriptFill className="text-5xl text-yellow-500" />{" "}
          {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <BiLogoTypescript className="text-5xl text-blue-400" />{" "}
          {/* TypeScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <RiReactjsLine className="text-5xl text-blue-400" /> {/* React */}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <RiNodejsLine className="text-5xl text-green-700" /> {/* Node.js */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <RiTailwindCssFill className="text-5xl text-blue-500" />{" "}
          {/* Tailwind CSS */}
        </motion.div>
      </motion.div>

      {/* Second Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <SiMongodb className="text-5xl text-green-600" /> {/* MongoDB */}
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <FaGitAlt className="text-5xl text-red-600" /> {/* Git */}
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <SiPostman className="text-5xl text-orange-500" /> {/* Postman */}
        </motion.div>
        <div
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <img src={GoogleCloud} alt="Google Cloud" className="w-16 h-16" />{" "}
          {/* Google Cloud */}
        </div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className={`rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center ${boxSize}`}
        >
          <GrGraphQl className="text-5xl text-pink-600" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
