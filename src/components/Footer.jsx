import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#1E1E1E",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2rem",
          color: "#FF3B3B",
          marginBottom: "1rem",
        }}
      >
        Pulkit
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        {[
          { to: "About", label: "About" },
          { to: "Timeline", label: "Timeline" },
          { to: "Projects", label: "Projects" },
          { to: "Skills", label: "Skills" },
           { to: "Certificates", label: "Certificates" },
          { to: "Blogs", label: "Blogs" },
          { to: "Contact", label: "Contact" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            smooth={true}
            duration={600}
            spy={true}
            offset={-70}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            activeStyle={{
              color: "#FF3B3B",
              borderBottom: "2px solid #FF3B3B",
              paddingBottom: "3px",
            }}
            onMouseOver={(e) => (e.target.style.color = "#FF3B3B")}
            onMouseOut={(e) => (e.target.style.color = "#ccc")}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Contact Info */}
      <div
        style={{
          fontSize: "0.95rem",
          marginBottom: "1rem",
          wordBreak: "break-word",
        }}
      >
        📞 +91-7209749002 | ✉️ pulkitkrishna2005@gmail.com
      </div>

      {/* Social Icons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.2rem",
          flexWrap: "wrap",
          marginBottom: "1.5rem",
        }}
      >
        <a
          href="https://instagram.com/KrishnaPulkit11"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#E1306C",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <FaInstagram size={26} />
        </a>
        <a
          href="https://wa.me/7209749002"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#25D366",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <FaWhatsapp size={26} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#1877F2",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <FaFacebook size={26} />
        </a>
        <a
          href="https://www.linkedin.com/in/pulkit-krishna-4152802b3"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0A66C2",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.2)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          <FaLinkedin size={26} />
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: "0.85rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Pulkit. All rights reserved.
      </div>

      {/* Responsive Design (Inline Media Query) */}
      <style>
        {`
          @media (max-width: 600px) {
            footer div {
              font-size: 0.9rem !important;
            }
            footer a {
              font-size: 0.9rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
