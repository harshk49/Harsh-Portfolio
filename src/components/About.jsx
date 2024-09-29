import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const ABOUT_TEXT = (
  <>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-4"
    >
      I am a dedicated full stack developer currently in my 4th year of studying
      Computer Science, with a specialization in Information and Cyber Security.
    </motion.p>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.4 }} // Added delay
      className="mb-4"
    >
      I have gained hands-on experience through projects such as Notes App and
      Spotify Clone, utilizing React, Node.js, and various databases. Currently,
      I am developing the IMC portal, which is helping me refine my project
      management and collaboration skills.
    </motion.p>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.8 }} // Added delay
      className="mb-4"
    >
      I thrive in team environments and enjoy tackling complex challenges,
      always striving for innovative solutions. Outside of technology, I'm
      passionate about cricket and love engaging in outdoor activities, which
      keep my energy high and my competitive spirit alive! I also have an
      enthusiastic interest in entrepreneurship and emerging tech trends, always
      eager to explore innovative ideas and opportunities that shape the future.
    </motion.p>
    <motion.p
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 1.2 }} // Added delay
    >
      I look forward to connecting with like-minded professionals and
      contributing to impactful projects.
    </motion.p>
  </>
);

const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <div className="text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
<<<<<<< HEAD
          className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-3xl text-transparent pb-2 m-2"
=======
          className="inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent pb-2 m-20"
>>>>>>> 26483839c0547a11cfa0aed14d1e236e529c7b15
        >
          About Me
        </motion.h2>
      </div>

      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div className="max-w-xl py-6 my-2">{ABOUT_TEXT}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
