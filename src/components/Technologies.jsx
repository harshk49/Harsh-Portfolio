import { DiDjango } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { GrGraphQl } from "react-icons/gr";
import {
  RiJavascriptFill,
  RiNodejsLine,
  RiReactjsLine,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiMongodb, SiPostman } from "react-icons/si";
import GoogleCloud from "../assets/google_cloud.png"; // Correct import statement
import { motion } from "framer-motion";
import CardAnimatedBorderGradient from "./CardAnimatedBorderGradient";

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

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20" // Updated class names
        style={{ whiteSpace: "nowrap" }}
      >
        Technologies Known
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* First Row */}
        <CardAnimatedBorderGradient>
          <RiJavascriptFill className="text-5xl text-yellow-500" />{" "}
          {/* JavaScript */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <DiDjango className="text-5xl text-green-900" /> {/* Django */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <RiReactjsLine className="text-5xl text-blue-400" /> {/* React */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <RiNodejsLine className="text-5xl text-green-700" /> {/* Node.js */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <RiTailwindCssFill className="text-5xl text-blue-500" />{" "}
          {/* Tailwind CSS */}
        </CardAnimatedBorderGradient>
      </motion.div>

      {/* Second Row */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mt-8"
      >
        <CardAnimatedBorderGradient>
          <SiMongodb className="text-5xl text-green-600" /> {/* MongoDB */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <FaGitAlt className="text-5xl text-red-600" /> {/* Git */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <SiPostman className="text-5xl text-orange-500" /> {/* Postman */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <img src={GoogleCloud} alt="Google Cloud" className="w-16 h-16" />{" "}
          {/* Google Cloud */}
        </CardAnimatedBorderGradient>
        <CardAnimatedBorderGradient>
          <GrGraphQl className="text-5xl text-pink-600" /> {/* GraphQL */}
        </CardAnimatedBorderGradient>
      </motion.div>
    </div>
  );
};

export default Technologies;
