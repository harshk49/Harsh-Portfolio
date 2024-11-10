import project1 from "../assets/projects/project-1.svg";
import project2 from "../assets/projects/project-2.svg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
    Web Developer by day, bug squasher by night! I specialize in building responsive, engaging websites that don’t just look pretty—they actually work 
    (most of the time on the first try!). From sleek front-end frameworks to robust backend solutions, I’m all about making the web a smoother place, one 
    line of code at a time. Let's turn your big ideas into a web experience that’s as functional as it is fun—complete with clean code, the latest tech, 
    and just the right amount of nerdy enthusiasm!
`;

export const PROJECTS = [
  {
    title: "Cipher Vault",
    image: project1,
    description:
      "Cipher Vault is a web app for encrypting and decrypting text using ciphers like Caesar, Vigenère, and Atbash etc.",
    technologies: ["C++"],
  },
  {
    title: "Notes App",
    image: project2,
    description:
      "The Notes App is a user-friendly MERN stack application that lets users create, edit, delete, and manage notes with a responsive interface designed using Tailwind CSS.",
    technologies: ["React", "Tailwind", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "CricScorer",
    image: project3,
    description:
      "A cricket scoring application that allows users to keep track of match scores, player statistics, and team standings.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Airbnb Clone",
    image: project4,
    description:
      "A web application that replicates Airbnb's core features, including property listings, booking management, user authentication, and guest reviews.",
    technologies: ["Next.js", "Tailwind", "Typescript", "Node.js", "Prisma"],
  },
];

export const CONTACT = {
  address: "Indore, India",
  phoneNo: "Phone: +91 7974980140",
  email: "Email: harshkardile49@gmail.com",
};
