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
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import CMA from "../assets/CMA.jpg";
import home from "../assets/accounting1.png";
import about from "../assets/accounting2.png";
import choose from "../assets/accounting3.png";
import approach from "../assets/accounting4.png";
import services from "../assets/accounting5.png";
import domain from "../assets/accounting6.png";
import insight from "../assets/accounting7.png";
import blogs from "../assets/accounting8.png";
import portal from "../assets/accounting9.png";
import contact from "../assets/accounting10.png";
import founderImg from "../assets/accounting11.jpg";

// --- Styles ---
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#2b2b2b",
  borderRadius: "10px",
};
const tableHeader = {
  padding: "0.8rem",
  textAlign: "left",
  fontWeight: "bold",
};
const tableCell = { padding: "0.8rem", borderBottom: "1px solid #333" };

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  padding: "0.6rem 1.2rem",
  background: "#FF3B3B",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontSize: "1rem",
};

// --- Glow Function ---
const handleGlow = (e, isHover) => {
  e.currentTarget.style.transform = isHover ? "scale(1.05)" : "scale(1)";
  e.currentTarget.style.boxShadow = isHover ? "0 0 15px #FF3B3B" : "none";
};

// --- Project Overview Data ---
const projectOverview = [
  {
    img: home,
    title: "Home Page",
    desc: "Landing section introducing the accounting firm with services and start consulting.",
  },
  {
    img: about,
    title: "About Page",
    desc: "Explains the Accounting firm history, goals, and guidance philosophy.",
  },
  {
    img: choose,
    title: "why choose our firm Page",
    desc: "Displays the features of the respective firm why does we choose you",
  },
  {
    img: approach,
    title: "How We Approach Page",
    desc: "Displays the steps and process how we approach to a work",
  },
  {
    img: services,
    title: "Services Page",
    desc: "The page explains the services , the firm have and has a read more option to expand the service and checkout what's inside it.",
  },
  {
    img: domain,
    title: "Professional Domain page",
    desc: "Displays the domain in which the firm work",
  },
  {
    img: insight,
    title: "Insight Page",
    desc: "This page explains the blogs we have related to accounting",
  },
  {
    img: blogs,
    title: "Blogs Page",
    desc: "The blogs page have categories in which the user or client can see the blogs accoroading to their intrest.",
  },
  {
    img: portal,
    title: "Sign Up Page",
    desc: "This is the portal login page where there are two forms having client page and office page and office page having admin and staff dashboard page and can access to their respective email and passoword as alloted",
  },
  {
    img: contact,
    title: "Contact Page",
    desc: "Conatct page delivers why choose us and has a form which the user can fill or ask questions",
  },
];

const AccountingPage = () => {
  return (
    <section
      style={{
        background: "#1E1E1E",
        color: "#E0E0E0",
        padding: "4rem 2rem",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={CMA}
          alt="Shreepati Educational Services"
          style={{
            width: "325px",
            height: "190px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1
          style={{
            color: "#FF3B3B",
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Karunesh Kumar & Associates
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          A professional Accounting firm website & Dashboard System built for{" "}
          <strong>Karunesh Kumar & Associates</strong>, helping to showcase
          there work , services to help in their respective domain. Developed
          with HTML , CSS , Java-Script , PHP, MySql.
        </p>
      </div>

      {/* Project Overview */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Project Overview
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          This project was a personal milestone — creating a professional
          accounting firm website for the client (Karunesh Kumar). It represents
          both a technical learning experience and a meaningful contribution to
          his Accounting Firm.
        </p>
        <p style={{ lineHeight: "1.8" }}>
          The goal was to design a responsive and dynamic platform where clients
          can see the services , blogs related to accounting can easily access
          to carrer options and can message the queries in the blog section or
          contact section,and all within a seamless, modern interface.
        </p>
      </div>

      {/* Website Pages */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Website Pages
        </h2>
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
                (e.currentTarget.style.transform =
                  "translateY(-6px) scale(1.02)")
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
              <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>
                {page.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#ccc" }}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Technology Stack
        </h2>
        <table style={tableStyle}>
          <thead>
            <tr style={{ background: "#FF3B3B", color: "#fff" }}>
              <th style={tableHeader}>Technology</th>
              <th style={tableHeader}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableCell}>
                <FaHtml5 /> HTML 5
              </td>
              <td style={tableCell}>Frontend framework for UI</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaCss3Alt /> CSS
              </td>
              <td style={tableCell}>Responsive styling</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <FaJsSquare /> Java Script
              </td>
              <td style={tableCell}>Backend runtime environment</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiPhp /> PHP
              </td>
              <td style={tableCell}>API and backend routing</td>
            </tr>
            <tr>
              <td style={tableCell}>
                <SiMysql /> MySql
              </td>
              <td style={tableCell}>Data management and storage</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Features */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2
          style={{
            color: "#FF3B3B",
            marginBottom: "1rem",
            paddingLeft: "2.9rem",
          }}
        >
          Key Features
        </h2>
        <ul
          style={{ color: "#E0E0E0", lineHeight: "1.8", paddingLeft: "3.9rem" }}
        >
          <li>Good Ui/Ux for accounting firm</li>
          <li>
            Services listed and has expand page to see the broad way of the
            services
          </li>
          <li>
            Blogs & Insight page where user or client can see his/her respective
            feild blogs
          </li>
          <li>
            Integration of ai chatbot where user can ask question about the firm
            or related to accounting
          </li>
          <li>
            The website has forms for carrer blogs questions or contact where
            they can put questions and the firm can answer it
          </li>
          <li>
            {" "}
            The portal login having 3 dashboards for client ,Employee & Admin
            (Founder)
          </li>
          <li>Mobile Responsive and Dekstop Responsive</li>
        </ul>
      </div>

      {/* Founder Section */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 3rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          About Founder & Organization
        </h2>
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
        <p
          style={{
            color: "#E0E0E0",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          <strong>Mr. Karunesh Kumar</strong> Founded Karunesh Kumar &
          Associates it is a leading firm of Cost Accountants and professional
          advisors, delivering high-quality audit, assurance, taxation, and
          advisory services to organizations across diverse sectors. 
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
              <tr
                style={{
                  background: "#FF3B3B",
                  color: "#fff",
                  textAlign: "left",
                }}
              >
                <th
                  style={{
                    padding: "1rem",
                    fontWeight: "700",
                    fontSize: "1rem",
                  }}
                >
                  Services
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { icon: <FaLaptopCode />, title: "Incoporation" },
                { icon: <FaServer />, title: "Accounting" },
                { icon: <FaDatabase />, title: "Auditing" },
                { icon: <FaPaintBrush />, title: "Taxation" },
                { icon: <FaGlobe />, title: "Compliances" },
                { icon: <FaMobileAlt />, title: "Startups" },
                { icon: <FaCloud />, title: "Advisory & Consulting" },
                
              ].map((service, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: "1px solid #444",
                    transition: "background 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(255,59,59,0.1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <td
                    style={{
                      padding: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: "1rem",
                    }}
                  >
                    <span style={{ color: "#FF3B3B", fontSize: "1.3rem" }}>
                      {service.icon}
                    </span>
                    {service.title}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Deployment */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto 3rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Deployment</h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#ccc" }}>
          Hosted on <strong>Vercel</strong> with continuous deployment from
          GitHub for faster updates and scalability.
        </p>

        {/* Responsive 2x2 Social Links Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 per row
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {[
            {
              href: "https://github.com/Vibhav11Krishna/Account-Website",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "https://kkassociates.great-site.net/",
              icon: <FaGlobe />,
              label: "Website",
            },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...linkStyle,
                width: "100%",
                justifyContent: "center",
                fontSize: "0.95rem",
                textAlign: "center",
              }}
              onMouseEnter={(e) => handleGlow(e, true)}
              onMouseLeave={(e) => handleGlow(e, false)}
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
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
          Summary & Key Learnings
        </h2>
        <p
          style={{
            lineHeight: "1.8",
            color: "#E0E0E0",
            marginBottom: "1rem",
          }}
        >
          Developing this Accounting Firm website was a complete end-to-end
          experience that combined design thinking, full-stack development, and
          deployment.
        </p>
        <ul
          style={{
            lineHeight: "1.8",
            color: "#ccc",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>⚡ Learned how to structure a full Accounting Firm project efficiently.</li>
          <li>⚡ Improved backend API setup and database design skills.</li>
          <li>⚡ Gained experience with responsive UI and accessibility.</li>
          <li>⚡ Understood client communication and project deployment.</li>
          <li>
            ⚡ Learned to manage version control and collaboration via GitHub.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AccountingPage;
