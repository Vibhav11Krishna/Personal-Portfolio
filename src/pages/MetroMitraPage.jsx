import React from "react";
import {
  FaReact,
  FaNode,
  FaGithub,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaChartLine,
  FaFolderOpen,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
} from "react-icons/si";
import { 
  SiNextdotjs, 
  SiNumpy, 
  SiOpencv, 
  SiPandas, 
  SiScikitlearn, 
  SiVercel,
} from 'react-icons/si';
import { 
  FaPython, 
} from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import hackathonLogo from "../assets/Mitra.png";
import problemImg from "../assets/Algonauts.jpeg";
import pptImg from "../assets/creativex.jpg";
import pulkitImg from "../assets/leader.png";
import alokImg from "../assets/Alok.jpeg";
import khushiImg from "../assets/Khushi.jpeg";
import shadiqueImg from "../assets/shadiq.jpeg";
import nazisImg from "../assets/Nazis.jpeg";
import Metro1 from "../assets/Metro1.jpeg";
import Metro2 from "../assets/Metro2.jpeg";
import Metro3 from "../assets/Metro3.jpeg";
import Metro4 from "../assets/Metro4.jpeg";
import Metro5 from "../assets/Metro5.jpeg";
import Metro6 from "../assets/Metro6.jpeg";
import { AiOutlineFilePdf } from "react-icons/ai";
import pptFile from "../assets/MetroMitra.pdf"; // <-- your PPT PDF file
import certificateImg from "../Certificates/Hackathon.jpeg";

const projectOverview = [
  {
    img: Metro1,
    title: "Home Page",
    desc: "The Home Page serves as the main entry point for users, providing an overview of the Bihar Metro project and quick access to key features.",
  },
  {
    img: Metro2,
    title: "About Page",
    desc: "Provides information about the Bihar Metro project, its objectives, and team details.",
  },
  {
    img: Metro3,
    title: "Station Operational Page",
    desc: "Displays real-time operational status of metro stations, including crowd density, train schedules, and alerts for commuters.",
  },
  {
    img: Metro4,
    title: "Admin Page",
    desc: "Allows metro authorities to manage operations, monitor commuter flow, and handle complaints efficiently through a centralized dashboard.",
  },
  {
    img: Metro5,
    title: "Client Page",
    desc: " Provides commuters with personalized assistance, route planning, and real-time updates on metro services, enhancing their travel experience.",
  },
  {
    img: Metro6,
    title: "Complaint Page",
    desc: "Enables users to register complaints, track their status, and receive updates on resolution, ensuring transparency and accountability in metro services.",
  },
];
const teamMembers = [
  { img: pulkitImg, name: "Pulkit Krishna", role: "Tech Lead" },
  { img: shadiqueImg, name: "Shadique Rahman", role: "Project Coordination & Idea Finalization" },
  { img: khushiImg, name: "Khushi Kumari", role: "Presentation & Visual Design Lead" },
  { img: alokImg, name: "Alok Kumar", role: "Feature Ideation &  Support" },
  { img: nazisImg, name: "Mohammad Nazish Alam", role: "Concept & Presentation Support" },
];

const weeklyRoutine = [
  {
    week: "Week 1",
    tasks:
      "Ideation, understanding the Bihar Metro requirements, and planning the Metro Mitra architecture.",
  },
  {
    week: "Week 2",
    tasks: "Frontend prototype with Next.js & Tailwind CSS, layout, and commuter/authority dashboards.",
  },
  {
    week: "Week 3",
    tasks:
      "Backend setup with Node.js, API integration, and database management using MongoDB.",
  },
  {
    week: "Week 4",
    tasks: "Integrating AI commuter assistant, predictive crowd management modules, IoT simulation, and real-time transit testing.",
  },
  {
    week: "Week 5",
    tasks: "Final debugging, presentation preparation, and project deployment on Vercel.",
  },
];



const MetroMitraPage = () => {
  return (
    <section
      style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "4rem 2rem" }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={hackathonLogo}
          alt="CreativeX Logo"
          style={{
            width: "510px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1
          style={{ color: "#FF3B3B", fontSize: "2.5rem", marginBottom: "1rem" }}
        >
          Metro Mitra  - National Innovation Hackathon
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          Participated in the <strong>National Innovation Hackathon</strong> Association With
          AMIEE Association , Heritage Institute of Technology, CMAOI Association from July to August. Our team built
          a smart solution for the upcoming Bihar Metro focused on improving commuter services through AI and modern web technologies.
        </p>
      </div>

      {/* Problem Statement */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Problem Statement
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <img
            src={problemImg}
            alt="Problem"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
          <p style={{ flex: "1", color: "#E0E0E0", lineHeight: "1.6" }}>
            The NIH challenge was to create a solution on theme "AI For Society". With the rapid urbanization of major cities in Bihar, the development of the upcoming Bihar Metro is a crucial step toward modernizing public mass transit. However, large-scale transit networks frequently face major operational and commuter-centric hurdles, including severe station congestion during peak hours, inefficient crowd management, unexpected infrastructure downtime, ticketing bottlenecks, and a lack of real-time, localized, and accessible guidance for a diverse commuter base (including first-time metro users and differently-abled individuals).
          </p>
        </div>

        {/* Solution */}
        <h2
          style={{ color: "#FF3B3B", marginBottom: "1rem", marginTop: "2rem" }}
        >
          Our Solution
        </h2>
        <ul
          style={{ color: "#E0E0E0", lineHeight: "1.6", paddingLeft: "1.2rem" }}
        >
          <li>
           Our solution leverages artificial intelligence to build Metro Mitra—an AI-powered smart metro management and commuter assistance platform tailored specifically for the upcoming Bihar Metro.
          </li>
          <li>
            The system analyzes real-time footfall data, crowd density, and transit schedules to optimize passenger flow, reduce platform congestion, and dynamically update travel options to maximize efficiency and commuting convenience.
          </li>
          <li>
            Separate, role-based dashboards for Commuters and Metro Authorities/Operations to track real-time crowd movement, operational status, routing assistance, and ticketing records.
          </li>
          <li>Our solution leverages artificial intelligence to build an intelligent, automated Complaint Categorization & Priority Prediction System designed to streamline grievance redressal for civic bodies, public utilities, and municipal authorities (such as those managing urban infrastructure in Bihar).</li>
          <li>
            Uses Natural Language Processing (NLP) to parse user queries in regional languages, offering real-time guidance on routes, fares, and multi-modal transit connectivity.
          </li>
          
          <li>Built with optimized front-end performance using Next.js (backed by Figma prototypes), ensuring a smooth and responsive layout across all mobile and station kiosk devices with secure hosting on Vercel.</li>
        </ul>
      </div>

      {/* Features */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Key Features</h2>
        <ul
          style={{ color: "#E0E0E0", lineHeight: "1.8", paddingLeft: "1.2rem" }}
        >
          <li>Dual Dashboards</li>
          <li>AI Commuter Assistant & NLP Support</li>
          <li>Modern UI/UX & Architecture</li>
          <li>Actionable Insights</li>
          <li>Smart Complaint Registration & Tracking</li>
          <li>AI-based Complaint Categorization & Priority Prediction</li>
        </ul>
      </div>

      {/* Project Overview */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Project Overview
        </h2>
        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 2fr)",
            gap: "1.9rem",
          }}
        >
          {projectOverview.map((proj, idx) => {
            const isLastFullWidth =
              idx === projectOverview.length - 1 &&
              projectOverview.length % 2 !== 0;
            return (
              <div
                key={idx}
                className="project-card"
                style={{
                  background: "#2b2b2b",
                  padding: "0.8rem",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  gridColumn: isLastFullWidth ? "span 2" : "span 1",
                  height: "auto",
                }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "12px",
                    marginBottom: "0.5rem",
                    transition: "transform 0.4s ease",
                  }}
                  className="project-img"
                />
                <h3 style={{ color: "#FF3B3B", fontSize: "1.2rem" }}>
                  {proj.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#ccc",
                    marginBottom: "0.5rem",
                  }}
                >
                  {proj.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
  .project-card {
    box-shadow: 0 0 0 rgba(255, 59, 59, 0);
  }

  .project-card:hover {
    transform: translateY(-6px) scale(1.02);
    
  
  }

  .project-card:hover .project-img {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    .project-grid {
      grid-template-columns: 1fr !important;
    }
    .project-card {
      grid-column: span 1 !important;
    }
  }
`}</style>

      {/* Tech Stack Table */}
      <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Technology Stack
        </h2>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#2b2b2b",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead>
            <tr style={{ background: "#FF3B3B", color: "#fff" }}>
              <th style={tableHeader}>Technology</th>
              <th style={tableHeader}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCell}>
                <SiNextdotjs /> Next.js
              </td>
              <td style={tableCell}>Frontend framework</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaPython /> Python
              </td>
              <td style={tableCell}>Core scripting & data handling</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiNumpy /> NumPy
              </td>
              <td style={tableCell}>Numerical data processing</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiOpencv /> OpenCV
              </td>
              <td style={tableCell}>Image processing & computer vision</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiPandas /> Pandas
              </td>
              <td style={tableCell}>Data management & analysis</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiScikitlearn /> Scikit-Learn
              </td>
              <td style={tableCell}>Machine learning modeling</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaFolderOpen /> File Management & OS
              </td>
              <td style={tableCell}>System utility & file handling</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaChartLine /> Matplotlib
              </td>
              <td style={tableCell}>Data visualization & plotting</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaNode /> Node.js
              </td>
              <td style={tableCell}>Backend runtime & API handling</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiPostgresql /> PostgreSQL
              </td>
              <td style={tableCell}>Relational database management</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiVercel /> Vercel
              </td>
              <td style={tableCell}>Cloud hosting & deployment</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Weekly Timeline */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Weekly Development Timeline
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeader}>Week</th>
              <th style={tableHeader}>Tasks & Learning</th>
            </tr>
          </thead>
          <tbody>
            {weeklyRoutine.map((week, idx) => (
              <tr
                key={idx}
                style={{ background: idx % 2 === 0 ? "#2b2b2b" : "#262626" }}
              >
                <td style={tableCell}>{week.week}</td>
                <td style={tableCell}>{week.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  {/* Team Members */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 3rem" }}>
        <h2
          style={{
            color: "#FF3B3B",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Team Members
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)", // 6 columns grid to layout 5 items symmetrically
            gap: "2rem",
            justifyItems: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, idx) => {
            // Row 1: 2 members (1st spans cols 1-3, 2nd spans cols 4-6)
            // Row 2: 3 members (each spans 2 columns: cols 1-2, 3-4, 5-6)
            let gridColumn = "span 2";
            if (idx === 0) {
              gridColumn = "1 / span 3"; // Top row, left side
            } else if (idx === 1) {
              gridColumn = "4 / span 3"; // Top row, right side
            } else if (idx === 2) {
              gridColumn = "1 / span 2"; // Second row, 1st item
            } else if (idx === 3) {
              gridColumn = "3 / span 2"; // Second row, 2nd item
            } else if (idx === 4) {
              gridColumn = "5 / span 2"; // Second row, 3rd item
            }

            return (
              <div
                key={idx}
                style={{
                  gridColumn: gridColumn,
                  textAlign: "center",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  width: "100%",
                }}
                className="team-card"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid #FF3B3B",
                    marginBottom: "0.8rem",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    display: "inline-block",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(255, 59, 59, 0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />

                {/* Member Name */}
                <p
                  style={{
                    fontWeight: "600",
                    color: "#fff",
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </p>

                {/* Role in Glowing Box */}
                <div
                  style={{
                    background: "rgba(255, 59, 59, 0.15)",
                    border: "1px solid #FF3B3B",
                    color: "#FFB6B6",
                    fontSize: "0.9rem",
                    borderRadius: "10px",
                    padding: "0.4rem 0.8rem",
                    display: "inline-block",
                    boxShadow: "0 0 10px rgba(255, 59, 59, 0.3)",
                  }}
                >
                  {member.role}
                </div>
              </div>
            );
          })}
        </div>

       {/* Responsive Styling */}
        <style>{`
    @media (max-width: 768px) {
      .team-card img {
        width: 120px !important;
        height: 120px !important;
      }
      div[style*="grid-template-columns: repeat(6"] {
        grid-template-columns: repeat(2, 1fr) !important; /* 2 per row on tablet */
      }
      div[style*="grid-column"] {
        grid-column: span 1 !important;
      }
    }

    @media (max-width: 480px) {
      div[style*="grid-template-columns: repeat(6"] {
        grid-template-columns: 1fr !important; /* 1 per row on mobile */
      }
      div[style*="grid-column"] {
        grid-column: span 1 !important;
      }
    }
  `}</style>
      </div>

       {/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Certificate</h2>
  <img
    src={certificateImg}
    alt="Certificate"
    style={{
      width: "130%",
      maxWidth: "660px",
      height: "450px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>
      {/* Links */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.2rem",
          flexWrap: "wrap",
          marginBottom: "3rem",
        }}
      >
        <a
          href="https://github.com/Vibhav11Krishna/Metro-Mitra"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGithub /> GitHub
        </a>
        
        <a
          href="https://metro-mitra-rose.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
        >
          <FaGlobe /> Website
        </a>
      </div>
      {/* Project PPT Button */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <a
          href={pptFile}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "0.8rem 1.6rem",
            background: "#FF3B3B",
            color: "#fff",
            fontWeight: "600",
            borderRadius: "8px",
            textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 5px 15px rgba(255,59,59,0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "none";
            e.target.style.boxShadow = "none";
          }}
        >
          <AiOutlineFilePdf size={22} />
          View Hackathon PPT
        </a>
      </div>

      {/* Summary */}
      <div style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
        <h2
          style={{
            color: "#FF3B3B",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Summary & Experience
        </h2>
        <p
          style={{
            color: "#E0E0E0",
            lineHeight: "1.8",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          Participating in the <strong>National Innovation Hackathon 2026</strong> gave me an experience
          very similar to the
          <strong> Smart India Hackathon (SIH)</strong>. It was an intense yet
          exciting challenge where our team worked passionately to design,
          develop, and deploy a complete full-stack project within a tight
          deadline. From brainstorming innovative ideas to implementing
          functional modules, we learned to turn challenges into solutions.
        </p>
        <p
          style={{
            color: "#E0E0E0",
            lineHeight: "1.8",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          Throughout this journey, I improved my ability to write clean,
          efficient, and scalable code. Collaborating with teammates taught me
          the importance of communication, version control, and proper project
          planning. We divided our work logically—frontend, backend, and
          design—and continuously integrated our progress using Git and GitHub.
        </p>
        <p
          style={{
            color: "#E0E0E0",
            lineHeight: "1.8",
            fontSize: "1rem",
            marginBottom: "1rem",
          }}
        >
          The hackathon also provided real-world exposure to
          problem-solving—understanding a problem statement, defining a
          user-focused solution, and pitching it effectively to evaluators. This
          experience boosted my{" "}
          <strong>confidence in handling SIH-like environments</strong>, where
          creativity, technical depth, and teamwork come together to build
          impactful digital solutions.
        </p>
        <p style={{ color: "#E0E0E0", lineHeight: "1.8", fontSize: "1rem" }}>
          Overall, the <strong>National Innovation Hackathon 2026</strong> strengthened my technical foundation in{" "}
          <strong>Machine Learning & Deep Learning & frameworks of frontend and backend</strong>, and refined my
          mindset as a problem solver. It helped me realize that innovation
          thrives under collaboration, time management, and the willingness to
          learn continuously.
        </p>
      </div>
    </section>
  );
};

// --- Styles ---
const tableHeader = {
  padding: "0.8rem",
  textAlign: "left",
  fontWeight: "bold",
};
const tableCell = { padding: "0.8rem", borderBottom: "1px solid #333" };
const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.6rem 1.2rem",
  background: "#FF3B3B",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "600",
  textDecoration: "none",
  transition: "transform 0.2s, box-shadow 0.2s",
};

export default  MetroMitraPage;
