import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed or remove if loading is dynamic

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden antialiased text-neutral-100 selection:bg-cyan-300 selection:text-cyan-900">
      {loading ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animate to full opacity
          transition={{ duration: 0.5 }} // Animation duration
        >
          <img
            src="/hk_logo.png"
            alt="Loading Logo"
            className="w-32 h-32 animate-bounce"
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="fixed top-0 w-full h-full -z-10">
            <div className="relative h-full w-full bg-[#000000]"></div>
          </div>
          <div className="container px-8 mx-auto">
            <Navbar />
            <div id="home">
              <Hero />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="technologies">
              <Technologies />
            </div>
            <div id="projects">
              <Projects />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default App;
