import { useState } from "react";
import logo from "./../../public/hk_logo.png";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Navbar is initially visible

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior
    const targetId = event.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const topOffset = 70; // Adjust this value if you have a fixed header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="relative">
      {/* Logo container - stays at the top */}
      <div className="flex items-center justify-between px-4 py-5">
        <img
          className="w-10 h-10 mr-4 cursor-pointer"
          src={logo}
          alt="Logo"
          onClick={toggleNavbar}
        />
        {/* Navigation links - only visible on larger screens */}
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-300 ease-in-out hidden md:block ${
            isNavbarVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav>
            <div className="px-6 py-2 bg-white rounded-full shadow-lg bg-opacity-20 backdrop-blur-md">
              <ul className="flex gap-8">
                <li>
                  <a
                    href="#home"
                    onClick={handleScroll}
                    className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={handleScroll}
                    className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#technologies"
                    onClick={handleScroll}
                    className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                  >
                    Technologies
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    onClick={handleScroll}
                    className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={handleScroll}
                    className="tracking-tight text-transparent bg-gradient-to-r from-[#FFD700] to-[#FFBCB3] bg-clip-text transition-colors hover:text-cyan-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
