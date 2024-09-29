import project1 from "../assets/projects/project-1.svg";
import project2 from "../assets/projects/project-2.svg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Passionate Full Stack Developer with expertise in building dynamic, user-friendly web applications. With a strong foundation in backend systems and modern front-end frameworks, I love solving complex problems and creating seamless digital experiences. Let’s collaborate and bring your ideas to life with clean code, innovation, and cutting-edge technologies!`;

export const PROJECTS = [
  {
    title: "Cipher Vault",
    image: project1, // Add the appropriate image import
    description:
      "Cipher Vault is a web app for encrypting and decrypting text using ciphers like Caesar, Vigenère, and Atbash.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Notes App",
    image: project2, // Add the appropriate image import
    description:
      "The Notes App is a user-friendly MERN stack application that lets users create, edit, delete, and manage notes with a responsive interface designed using Tailwind CSS.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js"],
  },
  {
    title: "CricScorer",
    image: project3, // Add the appropriate image import
    description:
      "A cricket scoring application that allows users to keep track of match scores, player statistics, and team standings.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Spotify Clone",
    image: project4, // Add the appropriate image import
    description:
      "A web application that replicates Spotify's core functionalities, including music streaming, playlists, and user authentication.",
    technologies: [
      "React",
      "Tailwind CSS",
      "GraphQL",
      "Node.js",
      "RESTful API ",
    ],
  },
];

export const CONTACT = {
  address:
    "Address: 201 Dhanwantri Nagar, Near Rajendra Nagar, Indore, Madhya Pradesh 452012, India",
  phoneNo: "Phone: +91 7974980140",
  email: "Email: harshkardile49@gmail.com",
};
