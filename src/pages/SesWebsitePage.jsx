import React from "react";
import {
  FaReact,
  FaGithub,
  FaNode,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLaptopCode,
  FaDatabase,
  FaServer,
  FaPaintBrush,
  FaCloud,
  FaChartLine,
  FaUserTie,
  FaMobileAlt,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import websiteImg from "../assets/logoshreepati.png";
import homepageImg from "../assets/home.png";
import aboutImg from "../assets/about.png";
import coursesImg from "../assets/services.png";
import contactImg from "../assets/partners.png";
import founderImg from "../assets/founder.jpg";

// Common styles
const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.5rem 1rem",
  background: "#FF3B3B",
  color: "#fff",
  borderRadius: "6px",
  fontWeight: "600",
  textDecoration: "none",
  fontSize: "0.9rem",
  transition: "all 0.3s ease",
};

const handleGlow = (e, isHover) => {
  e.currentTarget.style.transform = isHover ? "scale(1.05)" : "scale(1)";
  e.currentTarget.style.boxShadow = isHover ? "0 0 10px #FF3B3B" : "none";
};

const SesWebsitePage = () => {
  const projectOverview = [
    { img: homepageImg, title: "Home Page", desc: "Landing section introducing the consultancy with services and mission." },
    { img: aboutImg, title: "About Page", desc: "Explains the consultancy’s history, goals, and guidance philosophy." },
    { img: coursesImg, title: "Services Page", desc: "Displays available educational and admission guidance services." },
    { img: contactImg, title: "Partners Page", desc: "Collaboration of partners for upliftment of the company." },
  ];

  return (
    <section style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "3rem 1.5rem" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={websiteImg}
          alt="Shreepati Educational Services"
          style={{
            width: "280px",
            height: "auto",
            objectFit: "contain",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1 style={{ color: "#FF3B3B", fontSize: "2rem", marginBottom: "1rem" }}>
          Shreepati Educational Services Website
        </h1>
        <p style={{ fontSize: "1rem", color: "#ccc", maxWidth: "800px", margin: "0 auto" }}>
          A professional consultancy website built for <strong>Shreepati Educational Services</strong>, 
          helping students and parents explore academic guidance, courses, and services online. 
          Developed with React, TailwindCSS, Node.js, Express.js, and PostgreSQL.
        </p>
      </div>

      {/* Website Pages */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Website Pages</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.2rem",
          }}
        >
          {projectOverview.map((page, idx) => (
            <div
              key={idx}
              style={{
                background: "#2b2b2b",
                borderRadius: "10px",
                padding: "1rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-5px) scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              <img
                src={page.img}
                alt={page.title}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "0.6rem",
                }}
              />
              <h3 style={{ color: "#FF3B3B", marginBottom: "0.4rem" }}>{page.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#ccc" }}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Table */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 3rem", padding: "0 0.5rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1.2rem", textAlign: "center" }}>Our Services</h2>
        <div style={{ overflowX: "auto", borderRadius: "10px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", background: "#2b2b2b" }}>
            <thead>
              <tr style={{ background: "#FF3B3B", color: "#fff", textAlign: "left" }}>
                <th style={{ padding: "0.8rem" }}>Service</th>
                <th style={{ padding: "0.8rem" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { icon: <FaLaptopCode />, title: "Collaboration Guidance", desc: "Form strong partnerships with universities and networks." },
                { icon: <FaServer />, title: "Affiliation Guidance", desc: "Support for obtaining affiliation from boards/universities." },
                { icon: <FaDatabase />, title: "New Institutions Setup", desc: "Assistance for setting up and recognition of new colleges." },
                { icon: <FaPaintBrush />, title: "New Schools Setup", desc: "Step-by-step guidance for school setup with approvals." },
                { icon: <FaGlobe />, title: "DPR & Consultancy", desc: "Project reports covering financial and academic aspects." },
              ].map((service, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: "1px solid #444",
                    transition: "background 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,59,59,0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
                >
                  <td style={{ padding: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem", color: "#fff" }}>
                    <span style={{ color: "#FF3B3B" }}>{service.icon}</span>
                    {service.title}
                  </td>
                  <td style={{ padding: "0.9rem", color: "#ccc", fontSize: "0.9rem" }}>{service.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Learnings Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>My Learnings & Experience</h2>
        <p style={{ lineHeight: "1.8", color: "#ccc", marginBottom: "1rem" }}>
          This project was not just about development — it was about understanding client needs, 
          planning UI/UX, and managing end-to-end deployment. I learned to connect frontend and backend efficiently, 
          handle responsive layouts, and maintain clean Git commits for production-ready deployment.
        </p>
      </div>

      {/* Deployment Links */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Deployment</h2>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem", color: "#ccc" }}>
          Hosted on <strong>Vercel</strong> with continuous GitHub integration for automatic updates.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "0.8rem",
            justifyContent: "center",
          }}
        >
          <a href="https://github.com/Vibhav11Krishna/Shreepati-Educational-Services" target="_blank" rel="noopener noreferrer"
            style={linkStyle} onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaGithub /> GitHub
          </a>
          <a href="https://shreepati-educational-services-a35b.vercel.app/" target="_blank" rel="noopener noreferrer"
            style={linkStyle} onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaGlobe /> Website
          </a>
          <a href="https://www.instagram.com/ses_consultancy" target="_blank" rel="noopener noreferrer"
            style={linkStyle} onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaInstagram /> Instagram
          </a>
          <a href="https://x.com/SES_Consultancy" target="_blank" rel="noopener noreferrer"
            style={linkStyle} onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaTwitter /> X
          </a>
        </div>
      </div>

      {/* Summary */}
      <div style={{ maxWidth: "900px", margin: "0 auto 2rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Summary</h2>
        <p style={{ lineHeight: "1.8", color: "#E0E0E0" }}>
          Building this website helped me gain hands-on experience in full-stack web development, UI/UX planning,
          and project deployment. It strengthened my confidence in taking real-world projects and delivering
          professional digital solutions.
        </p>
      </div>

      {/* Responsive Styling */}
      <style>
        {`
          @media (max-width: 600px) {
            h1 { font-size: 1.5rem !important; }
            h2 { font-size: 1.2rem !important; }
            table td, table th { font-size: 0.85rem !important; }
          }
        `}
      </style>
    </section>
  );
};

export default SesWebsitePage;
