import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si"; // ✅ modern GitHub icon
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { path: "/about", label: "About" },
    { path: "/timeline", label: "Timeline" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
    { path: "/certificates", label: "Certificates" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  const socials = [
    { icon: <FaInstagram />, color: "#E1306C", link: "https://instagram.com/KrishnaPulkit11" },
    { icon: <FaWhatsapp />, color: "#25D366", link: "https://wa.me/7209749002" },
    { icon: <SiGithub />, color: "#fff", link: "https://github.com/Vibhav11Krishna" }, // ✅ updated
    { icon: <FaLinkedin />, color: "#0A66C2", link: "https://www.linkedin.com/in/pulkit-krishna-4152802b3" },
    { icon: <FaEnvelope />, color: "#FF3B3B", link: "mailto:pulkitkrishna2005@gmail.com" },
  ];

  return (
    <footer
      style={{
        backgroundColor: "#111",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        padding: "3rem 1rem 2rem",
        marginTop: "2rem",
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "2rem",
          color: "#FF3B3B",
          marginBottom: "1rem",
          textShadow: "0 0 12px rgba(255,59,59,0.8)",
        }}
      >
        Pulkit Krishna
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.2rem",
          marginBottom: "1.8rem",
        }}
      >
        {navLinks.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              color: "#ccc",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 500,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.color = "#FF3B3B";
              e.target.style.textShadow = "0 0 10px rgba(255,59,59,0.6)";
            }}
            onMouseOut={(e) => {
              e.target.style.color = "#ccc";
              e.target.style.textShadow = "none";
            }}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Contact Info */}
      <div
        style={{
          fontSize: "0.95rem",
          marginBottom: "1.4rem",
          color: "#ccc",
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
          gap: "1.8rem",
          flexWrap: "wrap",
          marginBottom: "1.8rem",
        }}
      >
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{
              color: social.color,
              fontSize: "1.9rem",
              transition: "transform 0.3s ease, filter 0.3s ease, text-shadow 0.3s ease",
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{ fontSize: "0.85rem", color: "#aaa" }}>
        © {new Date().getFullYear()} Pulkit Krishna Porfolio. All rights reserved.
      </div>

      {/* Smooth Glow CSS */}
      <style>
        {`
          .social-icon:hover {
            transform: scale(1.2);
            text-shadow: 0 0 18px currentColor;
            filter: brightness(1.3);
          }

          @media (max-width: 600px) {
            footer {
              padding: 2rem 1rem;
            }
            footer div {
              font-size: 0.9rem !important;
            }
            .social-icon {
              font-size: 1.6rem !important;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
