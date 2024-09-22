import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col items-center pb-20 border-b border-neutral-900">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-5xl text-center text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text"
      >
        Get in <span className="text-neutral-500"> Touch</span>
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
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1qw4CoEhDn7AfXN-PRobaifDsggy8OkJe" // Direct download link
          className="px-6 py-3 text-lg text-black transition duration-300 rounded shadow-md bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
