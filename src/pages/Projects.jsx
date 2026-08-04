import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiFigma, SiCanva, SiMysql, SiMongodb, SiPhp } from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import HRImg from "../assets/HRManagement.png";
import ShreepatiImg from "../assets/EducationalWebsite.png";
import PortfolioImg from "../assets/PortfolioWebsite.png";
import CreativeXImg from "../assets/temp.png";
import HeadphoneLogo from "../assets/HeadphoneProduct.jpg";
import BicycleLogo from "../assets/office2.png";
import EducationLogo from "../assets/office3.png";
import Green from "../assets/office1.png";
import ParlourLogo from "../assets/parlour.png";
import tracker from "../assets/tracker.png";
import billing from "../assets/billing.png";
import  KKA from "../assets/KKA.png";
import metro from "../assets/Metro.jpeg";
import brain from "../assets/brain.jpg";
import wound from "../assets/wound.jpg";

/* --------------------- PROJECT CATEGORIES --------------------- */

const websiteProjects = [
  {
    id: 1,
    title: "HR Management System",
    description:
      "Role-based dashboards for employees and admins with clean workflows.",
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
    github:
      "https://github.com/Vibhav11Krishna/Shreepati-Educational-Services",
  },

  {
    id: 3,
    title: "Parlour Website",
    description:
      "A premium parlour website built for a stylish and interactive customer experience.",
    image: ParlourLogo,
    tech: [
      { icon: <FaHtml5 />, color: "#FF6600" },
      { icon: <FaCss3Alt />, color: "#264de4" },
      { icon: <FaJsSquare />, color: "#f7df1e" },
      { icon: <SiPhp />, color: "#bc17e1ff" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link:
      "https://stylenshinestudio.com/",
      github:
      "https://github.com/Vibhav11Krishna/style-n-shine-website",
  },

   {
    id: 4,
    title: "Parlour Billing System",
    description:
      "A billing system having whatsaap integration and pdf veiwing and veiw bills section.",
    image: billing,
    tech: [
      { icon: <FaHtml5 />, color: "#FF6600" },
      { icon: <FaCss3Alt />, color: "#264de4" },
      { icon: <FaJsSquare />, color: "#f7df1e" },
      { icon: <SiPhp />, color: "#bc17e1ff" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link:
      "https://billingapp.great-site.net/?i=1",
      github:
      "https://github.com/Vibhav11Krishna/StyleNShine-Billing",
  },
  {
    id: 5,
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
    id: 6,
    title: "CreativeX",
    description:
      "Internal hackathon winning project using full-stack development.",
    image: CreativeXImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaNode />, color: "#3C873A" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "https://creativex-bh5i5g3fd-pulkit-krishnas-projects-b41fc977.vercel.app/",
    github: "https://github.com/Vibhav11Krishna/Creativex",
  },

  {
    id: 7,
    title: "Karunesh Kumar & Associates",
    description:
      "A accounting firm webiste having a full fledged knowledge webiste with dashbaord system",
    image: KKA,
    tech: [
     { icon: <FaHtml5 />, color: "#FF6600" },
      { icon: <FaCss3Alt />, color: "#264de4" },
      { icon: <FaJsSquare />, color: "#f7df1e" },
      { icon: <SiPhp />, color: "#bc17e1ff" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "https://www.cmakkassociates.com/",
    github: "https://github.com/Vibhav11Krishna/Account-Website",
  },
  {
    id: 8,
    title: "Metro-Mitra ",
    description:
      "Our team built Metro Mitra, an AI platform for Bihar Metro to optimize operations and safety.",
    image: metro,
    tech: [
     { icon: <SiScikitlearn />, color: "#29ABE2" },
      { icon: <SiJupyter />, color: "#F37626" },
      { icon: <RiNextjsFill />, color: "#fffdfd" },
    ],
    link: "https://metro-mitra-rose.vercel.app/",
    github: "https://github.com/Vibhav11Krishna/Metro-Mitra",
  },
  {
    id: 9,
    title: "Brain Tumor Detection",
    description:
      "A accounting firm webiste having a full fledged knowledge webiste with dashbaord system",
    image: brain,
    tech: [
    { icon: <SiScikitlearn />, color: "#29ABE2" },
      { icon: <SiJupyter />, color: "#F37626" },
    ],
    github: "https://github.com/Vibhav11Krishna/brain-tumour-detection",
  },
  {
    id: 10,
    title: "Wound Segmentation Analysis",
    description:
      "A accounting firm webiste having a full fledged knowledge webiste with dashbaord system",
    image: wound,
    tech: [
    { icon: <SiScikitlearn />, color: "#29ABE2" },
      { icon: <SiJupyter />, color: "#F37626" },
    ],
    github: "https://github.com/Vibhav11Krishna/Wound-area-analysis",
  },
];

const figmaProjects = [
  {
    id: 7,
    title: "Headphone Product",
    description: "Figma design turned into responsive web UI for headphones.",
    image: HeadphoneLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link:
      "https://www.figma.com/proto/b1GbvJTBSqK8BXULj2QOIT/pulkit-projects?node-id=12-15",
  },

  {
    id: 8,
    title: "Bicycle Website",
    description: "Clean and modern bicycle website Figma UI.",
    image: BicycleLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link:
      "https://www.figma.com/proto/b1GbvJTBSqK8BXULj2QOIT/pulkit-projects?node-id=81-21",
  },

  {
    id: 9,
    title: "Education Website",
    description: "Education website UI designed using Figma.",
    image: Green,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "#",
  },

  {
    id: 10,
    title: "Cafe Website",
    description: "Responsive cafe website designed in Figma.",
    image: EducationLogo,
    tech: [{ icon: <SiFigma />, color: "#fb07beff" }],
    link: "#",
  },
];


const appProjects = [
  {
    id: 11,
    title: "Expense Tracker",
    description: "Cross-platform Expo React Native app with clean UI and smooth performance.",
    image: tracker,
    tech: [
   
      { icon: <SiExpo />, color: "#000000" },   // ← Expo Icon Added

    ],
    link: "https://expo.dev/accounts/pulkitkrishna11/projects/ExpenseTracker/builds/ea6a56cd-2721-4b9e-9328-ae2ddc098f1a",
    
  },
];



/* ---------------- GRID COMPONENT ---------------- */

const ProjectGrid = ({ data }) => (
  <>
    <div
      className="project-grid"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
        width: "100%",
        marginTop: "2rem",
        maxWidth: "1400px",
      }}
    >
      {data.map((project, idx) => (
        <motion.div
          key={idx}
          className="project-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.08 }}
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            borderRadius: "15px",
            overflow: "hidden",
            textAlign: "center",
            transition: "0.3s ease",
            paddingBottom: "1rem",
          }}
        >
          <div style={{ width: "100%", height: "200px" }}>
            <img
              src={project.image}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ padding: "1rem" }}>
            <h3 style={{ color: "#FF3B3B" }}>{project.title}</h3>
            <p style={{ color: "#ccc", fontSize: "0.9rem" }}>
              {project.description}
            </p>

            {/* ICONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.7rem",
                fontSize: "2rem",
                marginTop: "0.7rem",
              }}
            >
              {project.tech.map((t, i) => (
                <motion.span
                  key={i}
                  style={{ color: t.color }}
                  whileHover={{ scale: 1.3 }}
                >
                  {t.icon}
                </motion.span>
              ))}
            </div>

            {/* BUTTONS */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {/* VIEW PROJECT BUTTON */}
              {project.link && (
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "rgba(255, 0, 85, 0.9)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                    boxShadow: "0 0 10px rgba(255, 0, 85, 0.7)",
                    transition: "0.3s",
                  }}
                >
                  View Project
                </motion.a>
              )}

              {/* VIEW GITHUB BUTTON */}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15 }}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    background: "rgba(0, 140, 255, 0.9)",
                    color: "#fff",
                    textDecoration: "none",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 0 10px rgba(0, 140, 255, 0.7)",
                    transition: "0.3s",
                  }}
                >
                  <FaGithub /> GitHub
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* RESPONSIVE GRID */}
    <style>
      {`
        @media (max-width: 1024px) {
          .project-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}
    </style>
  </>
);

/* ---------------- MAIN SECTION ---------------- */

const Projects = () => {
  return (
    <section
      id="Projects"
      style={{
        minHeight: "100vh",
        width: "100%",
        padding: "2rem 1rem",
        background: "#1E1E1E",
        color: "#E0E0E0",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          color: "#FF3B3B",
          fontFamily: "'Orbitron', sans-serif",
          marginBottom: "3rem",
          textShadow: "0 0 6px rgba(255, 59, 59, 0.6)",
        }}
      >
        Projects
      </motion.h1>

      <h2 style={{ color: "#FF3B3B", marginTop: "2rem" }}>Websites</h2>
      <ProjectGrid data={websiteProjects} />

      <h2 style={{ color: "#FF3B3B", marginTop: "3rem" }}>Figma Designs</h2>
      <ProjectGrid data={figmaProjects} />

      <h2 style={{ color: "#FF3B3B", marginTop: "3rem" }}>App Development</h2>
      <ProjectGrid data={appProjects} />
    </section>
  );
};

export default Projects;
