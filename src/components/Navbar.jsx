import { FaInstagram, FaSquareXTwitter, FaThreads } from "react-icons/fa6";
import logo from "../assets/hk_logo.png";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="Harsh Kardile Logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/harsh-kardile-887b16215"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/harshk49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/harsh_kardile49?igsh=djJ0dGd0NHdyb3Ex"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/justharsh49"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://www.threads.net/@harsh_kardile49?xmt=AQGztUEdc87GfujPM3_QP8yhhXpZ7Kjf16EnUOV-r2oniyk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaThreads />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
