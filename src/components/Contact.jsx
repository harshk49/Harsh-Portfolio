import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-20 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-center animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl lg:text-5xl text-transparent pb-2 my-20" // Updated class names
        style={{ whiteSpace: "nowrap" }} // Prevents line break
      >
        Get in Touch
      </motion.h2>
      <div className="tracking-tighter text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mb-4"
        >
          <a
            href={`mailto:${CONTACT.email.split(": ")[1]}`}
            className="text-white border-b"
          >
            {CONTACT.email.split(": ")[1]}
          </a>
        </motion.div>
        <br />
        <motion.button
          onClick={() =>
            window.open(
              "https://drive.google.com/uc?export=download&id=1qw4CoEhDn7AfXN-PRobaifDsggy8OkJe"
            )
          }
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex items-center justify-center w-full h-full px-8 py-1 text-sm font-medium rounded-full cursor-pointer bg-gray-950 text-gray-50 backdrop-blur-3xl">
            Download CV
          </span>
        </motion.button>
      </div>
    </div>
  );
};

export default Contact;
