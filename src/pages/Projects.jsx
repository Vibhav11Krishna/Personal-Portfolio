import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNode,
} from "react-icons/fa";
import { SiFigma, SiCanva, SiMysql, SiMongodb, SiPhp } from "react-icons/si";

import HRImg from "../assets/HRManagement.png";
import ShreepatiImg from "../assets/EducationalWebsite.png";
import PortfolioImg from "../assets/PortfolioWebsite.png";
import CreativeXImg from "../assets/temp.png";
import HeadphoneLogo from "../assets/HeadphoneProduct.jpg";
import BicycleLogo from "../assets/office2.png";
import EducationLogo from "../assets/office3.png";
import Green from "../assets/office1.png";

const projects = [
  {
    id: 1,
    title: "HR Management System",
    description: "Role-based dashboards for employees and admins with clean workflows.",
    image: HRImg,
    tech: [
      { icon: <FaHtml5 />, color: "#FF6600" },
      { icon: <FaCss3Alt />, color: "#264de4" },
      { icon: <FaJsSquare />, color: "#f7df1e" },
      { icon: <SiPhp />, color: "#bc17e1ff" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "http://hr-management-dashboard.great-site.net",
    github: "https://github.com/Vibhav11Krishna/hr-management-system",
  },
  {
    id: 2,
    title: "Educational Website",
    description: "Responsive website for Shreepati Educational Services.",
    image: ShreepatiImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaJsSquare />, color: "#f7df1e" },
    ],
    link: "https://shreepati-educational-services-a35b.vercel.app/",
    github: "https://github.com/Vibhav11Krishna/Shreepati-Educational-Services",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Premium portfolio layout using React and responsive design.",
    image: PortfolioImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaNode />, color: "#3C873A" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "https://personal-portfolio-nr1k.vercel.app/",
    github: "https://github.com/Vibhav11Krishna/personal-portfolio",
  },
  {
    id: 4,
    title: "CreativeX",
    description: "Internal hackathon winning project using full-stack development.",
    image: CreativeXImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaNode />, color: "#3C873A" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "#",
    github: "https://github.com/yourusername/creative-x",
  },
  {
    id: 5,
    title: "Headphone Product",
    description: "Figma design turned into responsive web UI for headphones product.",
    image: HeadphoneLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "https://www.figma.com/proto/b1GbvJTBSqK8BXULj2QOIT/pulkit-projects?node-id=12-15&t=H3b7YoLnjWFXwCJF-1",
  },
  {
    id: 6,
    title: "Bicycle Website",
    description: "Figma-based design for a clean and modern bicycle website.",
    image: BicycleLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "https://www.figma.com/proto/b1GbvJTBSqK8BXULj2QOIT/pulkit-projects?node-id=81-21&t=H3b7YoLnjWFXwCJF-1",
  },
  {
    id: 7,
    title: "Education Website",
    description: "Designed and implemented responsive education website using Figma mockup.",
    image: Green,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "#",
  },
  {
    id: 8,
    title: "Cafe Website",
    description: "Designed and implemented responsive cafe website using Figma mockup.",
    image: EducationLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="Projects"
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "2rem 1rem 4rem 1rem",
        background: "#1E1E1E",
        color: "#E0E0E0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        viewport={{ once: true }}
        style={{
          color: "#FF3B3B",
          fontFamily: "'Orbitron', sans-serif",
          textShadow: "0 0 6px rgba(255, 59, 59, 0.5)",
          letterSpacing: "2px",
          marginBottom: "4rem",
        }}
      >
        Projects
      </motion.h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "3rem",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              borderRadius: "15px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ width: "100%", height: "220px", position: "relative" }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "1rem" }}>
              <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>
                {project.title}
              </h3>
              <p
                style={{
                  color: "#ccc",
                  fontSize: "0.9rem",
                  marginBottom: "0.8rem",
                }}
              >
                {project.description}
              </p>

              {/* Tech Icons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.7rem",
                  fontSize: "2rem",
                  marginBottom: "1rem",
                }}
              >
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    style={{
                      color: tech.color,
                      display: "inline-block",
                      transition: "transform 0.3s ease",
                    }}
                    whileHover={{
                      scale: 1.4,
                      rotate: 10,
                    }}
                  >
                    {tech.icon}
                  </motion.span>
                ))}
              </div>

              {/* Buttons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.8rem",
                  marginTop: "1rem",
                  flexWrap: "wrap",
                }}
              >
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#FF3B3B",
                    color: "#fff",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                >
                  View Project
                </motion.a>

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      padding: "6px 14px",
                      borderRadius: "8px",
                      backgroundColor: "#0e76a8",
                      color: "#fff",
                      fontWeight: "600",
                      textDecoration: "none",
                    }}
                  >
                    View on GitHub
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .project-card:hover {
          box-shadow: 0 0 20px #FF3B3B, 0 0 30px rgba(255, 59, 59, 0.5);
          transform: translateY(-5px);
        }
      `}</style>
    </section>
  );
};

export default Projects;
