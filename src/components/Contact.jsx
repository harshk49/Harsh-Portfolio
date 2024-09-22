import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-col items-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-5xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
      >
        Get in <span className="text-neutral-500"> Touch</span>
      </motion.h2>
      <div className="text-center tracking-tighter">
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
            className="border-b text-white"
          >
            {CONTACT.email.split(": ")[1]}
          </a>
        </motion.div>
        <br />
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1OfTxjVluvIvgdb8vGVZs_Y-XRuSiKfzb" // Direct download link
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-black py-3 px-6 text-lg rounded shadow-md hover:from-blue-400 hover:to-purple-400 transition duration-300"
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
