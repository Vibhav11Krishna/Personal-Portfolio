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
import founderImg from "../assets/Founder.jpg";

// --- Styles ---
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#2b2b2b",
  borderRadius: "10px",
};
const tableHeader = { padding: "0.8rem", textAlign: "left", fontWeight: "bold" };
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
  transition: "all 0.3s ease",
};

// --- Glow Function ---
const handleGlow = (e, isHover) => {
  e.currentTarget.style.transform = isHover ? "scale(1.05)" : "scale(1)";
  e.currentTarget.style.boxShadow = isHover ? "0 0 15px #FF3B3B" : "none";
};

// --- Project Overview Data ---
const projectOverview = [
  { img: homepageImg, title: "Home Page", desc: "Landing section introducing the consultancy with services and mission." },
  { img: aboutImg, title: "About Page", desc: "Explains the consultancy’s history, goals, and guidance philosophy." },
  { img: coursesImg, title: "Services Page", desc: "Displays available educational and admission guidance services." },
  { img: contactImg, title: "Partners Page", desc: "Collaboration of partners for upliftement of the company." },
];

const SesWebsitePage = () => {
  return (
    <section style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "4rem 2rem" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={websiteImg}
          alt="Shreepati Educational Services"
          style={{
            width: "310px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1 style={{ color: "#FF3B3B", fontSize: "2.5rem", marginBottom: "1rem" }}>
          Shreepati Educational Services Website
        </h1>
        <p style={{ fontSize: "1rem", color: "#ccc", maxWidth: "800px", margin: "0 auto" }}>
          A professional consultancy website built for <strong>Shreepati Educational Services</strong>, 
          helping students and parents explore academic guidance, courses, and services online. 
          Developed with React, TailwindCSS, Node.js, Express.js, and PostgreSQL.
        </p>
      </div>

      {/* Project Overview */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Project Overview</h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          This project was a personal milestone — creating a professional consultancy website for my father’s business.
          It represents both a technical learning experience and a meaningful contribution to his consultancy.
        </p>
        <p style={{ lineHeight: "1.8" }}>
          The goal was to design a responsive and dynamic platform where students and parents can easily access
          course details, services, and contact information — all within a seamless, modern interface.
        </p>
      </div>

      {/* Website Pages */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Website Pages</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projectOverview.map((page, idx) => (
            <div
              key={idx}
              style={{
                background: "#2b2b2b",
                borderRadius: "12px",
                padding: "1rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px) scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              <img
                src={page.img}
                alt={page.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "0.8rem",
                }}
              />
              <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>{page.title}</h3>
              <p style={{ fontSize: "0.95rem", color: "#ccc" }}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Technology Stack</h2>
        <table style={tableStyle}>
          <thead>
            <tr style={{ background: "#FF3B3B", color: "#fff" }}>
              <th style={tableHeader}>Technology</th>
              <th style={tableHeader}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tableCell}><FaReact /> React.js</td><td style={tableCell}>Frontend framework for UI</td></tr>
            <tr><td style={tableCell}><SiTailwindcss /> Tailwind CSS</td><td style={tableCell}>Responsive styling</td></tr>
            <tr><td style={tableCell}><FaNode /> Node.js</td><td style={tableCell}>Backend runtime environment</td></tr>
            <tr><td style={tableCell}><SiExpress /> Express.js</td><td style={tableCell}>API and backend routing</td></tr>
            <tr><td style={tableCell}><SiPostgresql /> PostgreSQL</td><td style={tableCell}>Data management and storage</td></tr>
          </tbody>
        </table>
      </div>

      {/* Founder Section */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>About Founder & Organization</h2>
        <img
          src={founderImg}
          alt="Founder"
          style={{
            width: "200px",
            height: "230px",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />
        <p style={{ color: "#E0E0E0", maxWidth: "700px", margin: "0 auto", lineHeight: "1.8" }}>
          <strong>Mr. Jayant Krishna</strong> founded Shreepati Educational Services        
           with a vision to provide guidance to students and parents seeking the right educational path.
          The website represents his mission to reach a wider audience and bring all consultancy services
          under one modern platform.
        </p>
      </div>

      {/* Services Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto 3rem",
          padding: "1rem",
        }}
      >
        <h2
          style={{
            color: "#FF3B3B",
            marginBottom: "1.5rem",
            textAlign: "center",
            fontSize: "1.8rem",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            overflowX: "auto",
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(255, 59, 59, 0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#2b2b2b",
              borderRadius: "10px",
            }}
          >
            <thead>
              <tr style={{ background: "#FF3B3B", color: "#fff", textAlign: "left" }}>
                <th style={{ padding: "1rem", fontWeight: "700", width: "35%", fontSize: "1rem" }}>Service</th>
                <th style={{ padding: "1rem", fontWeight: "700", fontSize: "1rem" }}>Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { icon: <FaLaptopCode />, title: "Collaboration Guidance", desc: "Form strong partnerships with universities, industry, and networks to enhance academic growth." },
                { icon: <FaServer />, title: "Affiliation Guidance", desc: "Complete support for obtaining affiliation from recognized boards and universities." },
                { icon: <FaDatabase />, title: "New Institutions Setup", desc: "Assist in establishing and getting recognition for new colleges or mid-level institutions." },
                { icon: <FaPaintBrush />, title: "New Schools Setup", desc: "Step-by-step guidance to establish schools with approvals and documentation." },
                { icon: <FaGlobe />, title: "DPR & Consultancy", desc: "Prepare detailed project reports covering financial, academic, and infrastructure aspects." },
                { icon: <FaMobileAlt />, title: "Overseas Admissions & Visa", desc: "Counseling and application support for international studies and visa documentation." },
                { icon: <FaCloud />, title: "Educational Loans & HR", desc: "Consultation for securing loans and streamlining HR for institutions." },
                { icon: <FaUsers />, title: "Domestic Admission Counseling", desc: "Guide students across India in selecting the right courses and institutions." },
                { icon: <FaUserTie />, title: "Accreditation Assistance", desc: "Help institutions achieve national and international accreditation efficiently." },
                { icon: <FaChartLine />, title: "Data & Document Management", desc: "Customized solutions for managing institutional data, libraries, and documents." },
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
                  <td style={{ padding: "1rem", display: "flex", alignItems: "center", gap: "0.6rem", color: "#fff", fontWeight: "600" }}>
                    <span style={{ color: "#FF3B3B", fontSize: "1.2rem" }}>{service.icon}</span>
                    {service.title}
                  </td>
                  <td style={{ padding: "1rem", color: "#ccc", lineHeight: "1.6" }}>{service.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deployment */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Deployment</h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          Hosted on <strong>Vercel</strong> with continuous deployment from GitHub for faster updates and scalability.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, auto)", gap: "1rem", justifyContent: "center" }}>
          <a href="https://github.com/Vibhav11Krishna/Shreepati-Educational-Services" target="_blank" rel="noopener noreferrer" style={linkStyle}
             onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaGithub /> GitHub
          </a>
          <a href="https://shreepati-educational-services-a35b.vercel.app/" target="_blank" rel="noopener noreferrer" style={linkStyle}
             onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaGlobe /> View Website
          </a>
          <a href="https://www.instagram.com/ses_consultancy?igsh=d2I5dmN5ZmIwcm00" target="_blank" rel="noopener noreferrer" style={linkStyle}
             onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaInstagram /> Instagram
          </a>
          <a href="https://x.com/SES_Consultancy" target="_blank" rel="noopener noreferrer" style={linkStyle}
             onMouseEnter={(e) => handleGlow(e, true)} onMouseLeave={(e) => handleGlow(e, false)}>
            <FaTwitter /> X (Twitter)
          </a>
        </div>
      </div>

      {/* Summary */}
      <div style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem", textAlign: "center" }}>Summary & Key Learnings</h2>
        <p style={{ lineHeight: "1.8", color: "#E0E0E0", marginBottom: "1rem" }}>
          Developing this consultancy website was a complete end-to-end experience that combined design thinking, full-stack development, and deployment.
        </p>
        <ul style={{ lineHeight: "1.8", color: "#ccc", listStyle: "none", padding: 0 }}>
          <li>⚡ Learned how to structure a full React project efficiently.</li>
          <li>⚡ Improved backend API setup and database design skills.</li>
          <li>⚡ Gained experience with responsive UI and accessibility.</li>
          <li>⚡ Understood client communication and project deployment.</li>
          <li>⚡ Learned to manage version control and collaboration via GitHub.</li>
        </ul>
      </div>
    </section>
  );
};

export default SesWebsitePage;
