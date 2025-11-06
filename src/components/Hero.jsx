import React, { useState, useEffect, useRef } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiGithub } from "react-icons/si"; 
import Leader from "../assets/leader.png";
import Resume from "../assets/Resume.pdf"; 

const roles = ["Full-Stack Developer", "Video Editor", "React Enthusiast"];
const quotes = [
  "Coding is poetry in motion.",
  "Design your dreams, build your reality.",
  "Learning never exhausts the mind.",
];
const socialLinks = [
  { icon: FaInstagram, color: "#E1306C", link: "https://instagram.com/KrishnaPulkit11" },
  { icon: FaWhatsapp, color: "#25D366", link: "https://wa.me/7209749002" },
  { icon: SiGithub, color: "#fff", link: "https://github.com/Vibhav11Krishna" },
  { icon: FaLinkedin, color: "#0A66C2", link: "https://www.linkedin.com/in/pulkit-krishna-4152802b3" },
  { icon: FaEnvelope, color: "#FF3B3B", link: "mailto:pulkitkrishna2005@gmail.com" },
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [visible, setVisible] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const sectionRef = useRef();

  // Typing animation
  useEffect(() => {
    const timeout = setTimeout(() => {
      setText(roles[index].substring(0, subIndex + 1));
      setSubIndex(subIndex + 1);
      if (subIndex + 1 === roles[index].length) {
        setTimeout(() => {
          setSubIndex(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 120);
    return () => clearTimeout(timeout);
  }, [subIndex, index]);

  // Cursor blink
  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Fade on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Quotes cycle
  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(quoteTimer);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="hero-section">
      <div className={`hero-container ${visible ? "visible" : ""}`}>
        {/* Left Text */}
        <div className="hero-text">
          <h1>
            <span className="highlight">Hi, I’m </span>Pulkit Krishna
          </h1>
          <h3>
            <span className="role">{text}</span>
            <span className="cursor" style={{ opacity: blink ? 1 : 0 }}>
              |
            </span>
          </h3>
          <p className="quote">"{quotes[quoteIndex]}"</p>

          <div className="btn-group">
            <a
              href={Resume}
              download="Pulkit_Krishna_Resume.pdf"
              className="hero-btn"
            >
              Download CV
            </a>
            <button onClick={scrollToContact} className="hero-btn outline">
              Let's Connect
            </button>
          </div>

          <div className="socials">
            {socialLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: item.color }}
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={Leader} alt="Pulkit" />
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          width: 100%;
          background: #121212;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 5rem 1rem;
        }

        .hero-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          max-width: 1300px;
          width: 100%;
          background: rgba(255,255,255,0.05);
          border-radius: 30px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 50px rgba(255,59,59,0.3);
          opacity: 0;
          transform: translateY(40px);
          transition: all 1s ease;
          padding: 6rem;
        }

        .hero-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-text {
          flex: 1 1 500px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
          text-align: left;
        }

        .hero-text h1 {
          font-size: 2.5rem;
          font-family: 'Orbitron', sans-serif;
          margin-bottom: 1rem;
          white-space: nowrap;
        }

        .highlight {
          color: #FF3B3B;
        }

        .role {
          color: #FF3B3B;
          font-weight: 600;
        }

        .quote {
          color: #ccc;
          font-size: 1.1rem;
          font-style: italic;
          margin: 1rem 0 2rem 0;
          min-height: 2.5rem;
        }

        .btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .hero-btn {
          padding: 0.9rem 1.8rem;
          border-radius: 12px;
          background-color: #FF3B3B;
          color: #fff;
          font-weight: 600;
          border: none;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(255,59,59,0.4);
        }

        .hero-btn.outline {
          background: transparent;
          border: 2px solid #FF3B3B;
        }

        .hero-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255,59,59,0.7);
        }

        .socials {
          display: flex;
          gap: 1.5rem;
          font-size: 1.8rem;
          flex-wrap: wrap;
        }

        .socials a {
          transition: all 0.3s ease;
        }

        .socials a:hover {
          transform: scale(1.4);
          text-shadow: 0 0 12px currentColor, 0 0 20px currentColor;
        }

        .hero-image {
          flex: 1 1 400px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 2rem;
        }

        .image-wrapper {
          width: 320px;
          height: 320px;
          border-radius: 25px;
          overflow: hidden;
          border: 3px solid #FF3B3B;
          box-shadow: 0 0 50px rgba(255,59,59,0.5);
          animation: floatImage 3s ease-in-out infinite;
          transition: all 0.5s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.05);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cursor {
          color: #FF3B3B;
        }

        @keyframes floatImage {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 900px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            padding: 3rem 1.5rem;
          }
          .hero-text { align-items: center; }
          .btn-group { justify-content: center; }
          .socials { justify-content: center; }
          .image-wrapper { width: 280px; height: 280px; }
        }

        @media (max-width: 500px) {
          .hero-text h1 { font-size: 1.6rem; }
          .hero-text h3 { font-size: 1rem; }
          .quote { font-size: 0.9rem; }
          .image-wrapper { width: 240px; height: 240px; }
          .hero-btn { font-size: 0.9rem; padding: 0.7rem 1.4rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
