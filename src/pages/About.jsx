import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaLaptopCode,
  FaPaintBrush,
} from "react-icons/fa";
import { SiFigma, SiCanva, SiBootstrap, SiMysql } from "react-icons/si";
import Leader from "../assets/leader.png";
import dpsLogo from "../assets/dps.png";
import doonLogo from "../assets/doon.png";
import rpLogo from "../assets/rps.png";

const About = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  const leftIcons = [
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaCss3Alt, color: "#264DE4" },
    { icon: FaJsSquare, color: "#F7DF1E" },
    { icon: FaReact, color: "#61DBFB" },
    { icon: FaNodeJs, color: "#3C873A" },
  ];

  const rightIcons = [
    { icon: FaPython, color: "#306998" },
    { icon: SiMysql, color: "#00758F" },
    { icon: SiBootstrap, color: "#563D7C" },
    { icon: SiFigma, color: "#A259FF" },
    { icon: SiCanva, color: "#00C4CC" },
  ];

  const education = [
    {
      title: "10th - Delhi Public School",
      logo: dpsLogo,
      year: 2020,
      board: "CBSE",
      percentage: "81%",
      color: "#0ce71a",
    },
    {
      title: "12th - Doon Public School",
      logo: doonLogo,
      year: 2022,
      board: "CBSE",
      percentage: "73%",
      color: "#264DE4",
    },
    {
      title: "B.Tech CSE - RP Sharma Institute",
      logo: rpLogo,
      year: 2025,
      board: "University",
      percentage: "CGPA 8.5",
      color: "#FF3B3B",
    },
  ];

  const hobbies = [
    { title: "Video Editing", icon: FaLaptopCode, color: "#4CAF50" },
    { title: "UI/UX Design", icon: SiFigma, color: "#A259FF" },
    { title: "Motion Graphics", icon: FaPaintBrush, color: "#E91E63" },
    { title: "Exploring Web Tech", icon: FaReact, color: "#61DBFB" },
    { title: "Learning New Tools", icon: SiCanva, color: "#00C4CC" },
  ];

  const highlights = [
    {
      title: "Passionate Learner",
      text: "Always exploring new tools and technologies in web development.",
      color: "#00C4CC",
    },
    {
      title: "Creative Thinker",
      text: "Blend creativity with logic to design functional, aesthetic web experiences.",
      color: "#A259FF",
    },
    {
      title: "Goal-Oriented",
      text: "Focused on becoming a full-stack developer with strong fundamentals.",
      color: "#FF3B3B",
    },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        padding: "5rem 2rem",
        background: "#121212",
        color: "#E0E0E0",
        opacity: loaded ? 1 : 0,
        transform: loaded ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 1s ease, transform 1s ease",
      }}
    >
      {/* Desktop Side Icons */}
      <div className="desktop-left-icons">
        {leftIcons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="tech-icon" style={{ color: item.color }}>
              <Icon />
            </div>
          );
        })}
      </div>
      <div className="desktop-right-icons">
        {rightIcons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="tech-icon" style={{ color: item.color }}>
              <Icon />
            </div>
          );
        })}
      </div>

      {/* Mobile Top Icons */}
      <div className="mobile-top-icons">
        {leftIcons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="mobile-tech-icon"
              style={{ color: item.color }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* About Section */}
      <div className="about-box fade-in">
        <div className="profile-img bounce-in">
          <img src={Leader} alt="Profile" />
        </div>

        <h2>About Me</h2>
        <p>
          I’m <strong style={{ color: "#FF3B3B" }}>Pulkit Krishna</strong>, a
          passionate Full-Stack Developer and Creative Technologist who enjoys
          building clean, fast, and user-friendly applications. I focus on
          blending functionality with creativity to craft immersive digital
          experiences.
        </p>

        {/* Personal Highlights */}
        <div className="highlight-section">
          <h3 className="subheading">Personal Highlights</h3>
          <div className="highlight-grid">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="highlight-card"
                style={{
                  borderColor: item.color,
                  boxShadow: `0 0 15px ${item.color}40`,
                }}
              >
                <h4 style={{ color: item.color }}>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Hobbies */}
        <div className="cards-wrapper">
          <div className="card-container">
            <h3 className="subheading">Education</h3>
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="card-item slide-up"
                style={{ borderColor: edu.color }}
              >
                <img src={edu.logo} alt={edu.title} />
                <div className="card-text">
                  <strong style={{ color: edu.color }}>{edu.title}</strong>
                  <span>
                    {edu.board} - {edu.percentage}
                  </span>
                  <span>{edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card-container">
            <h3 className="subheading">Hobbies & Skills</h3>
            {hobbies.map((hobby, idx) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={idx}
                  className="card-item slide-up"
                  style={{ color: hobby.color }}
                >
                  <Icon size={40} />
                  <span>{hobby.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Bottom Icons */}
      <div className="mobile-bottom-icons">
        {rightIcons.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="mobile-tech-icon"
              style={{ color: item.color }}
            >
              <Icon />
            </div>
          );
        })}
      </div>

      {/* CSS */}
      <style>{`
        .desktop-left-icons, .desktop-right-icons {
          position: absolute; top: 20%;
          display: flex; flex-direction: column; gap: 2rem;
        }
        .desktop-left-icons { left: 1rem; }
        .desktop-right-icons { right: 1rem; }

        .tech-icon {
          width: 70px; height: 70px; border-radius: 15px;
          background: rgba(255,255,255,0.05);
          display: flex; justify-content: center; align-items: center;
          font-size: 2rem; transition: all 0.3s ease; cursor: pointer;
        }
        .tech-icon:hover { transform: scale(1.3); box-shadow: 0 0 20px currentColor; }

        .about-box {
          max-width: 1200px; margin: 0 auto;
          padding: 3rem; background: rgba(255,255,255,0.05);
          border-radius: 35px; backdrop-filter: blur(15px);
          display: flex; flex-direction: column; align-items: center;
          text-align: center;
        }

        .profile-img {
          width: 200px; height: 200px; border-radius: 50%;
          overflow: hidden; border: 4px solid #FF3B3B;
          box-shadow: 0 0 25px rgba(255,59,59,0.5);
        }
        .profile-img img { width: 100%; height: 100%; object-fit: cover; }

        h2 { color: #FF3B3B; font-family: 'Orbitron', sans-serif; font-size: 2.8rem; margin-top: 1rem; text-shadow: 0 0 10px rgba(255,59,59,0.6); }
        .subheading { color: #FF3B3B; font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Orbitron', sans-serif; text-align: center; }

        p { max-width: 900px; font-size: 1.2rem; line-height: 1.8; font-family: 'Poppins', sans-serif; margin: 0 auto 2rem auto; }

        /* Highlights */
        .highlight-grid {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem;
        }
        .highlight-card {
          flex: 1 1 280px; padding: 1.5rem;
          border: 2px solid; border-radius: 20px;
          background: rgba(255,255,255,0.05);
          transition: all 0.4s ease; text-align: center;
        }
        .highlight-card:hover {
          transform: translateY(-8px) scale(1.03);
          background: rgba(255,255,255,0.1);
          box-shadow: 0 0 25px rgba(255,59,59,0.4);
        }
        .highlight-card h4 { font-size: 1.3rem; margin-bottom: 0.5rem; }

        /* Cards */
        .cards-wrapper {
          display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem; margin-top: 3rem;
        }
        .card-container {
          flex: 1 1 400px; background: rgba(255,255,255,0.05);
          border-radius: 25px; padding: 2rem; text-align: center;
        }
        .card-item {
          display: flex; align-items: center; justify-content: center;
          gap: 1rem; margin: 1rem auto; padding: 1rem;
          border-radius: 15px; border: 2px solid transparent;
          background: rgba(255,255,255,0.08); transition: all 0.3s ease;
        }
        .card-item:hover { transform: scale(1.05); background: rgba(255,255,255,0.12); }

        .card-item img { width: 60px; height: 60px; border-radius: 12px; }
        .card-text { display: flex; flex-direction: column; align-items: center; }

        /* Animations */
        .fade-in { animation: fadeIn 1.5s ease; }
        .bounce-in { animation: bounceIn 1.2s ease; }
        .slide-up { animation: slideUp 1s ease; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes bounceIn {
          0% { transform: scale(0.5); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile */
        .mobile-top-icons, .mobile-bottom-icons {
          display: none; justify-content: space-around; margin: 1rem 0;
        }
        .mobile-tech-icon {
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; justify-content: center; align-items: center;
          background: rgba(255,255,255,0.05);
          font-size: 2.5rem; transition: all 0.3s ease; cursor: pointer;
        }
        .mobile-tech-icon:hover { transform: scale(1.4); box-shadow: 0 0 20px currentColor; }

        @media (max-width: 900px) {
          .desktop-left-icons, .desktop-right-icons { display: none; }
          .mobile-top-icons, .mobile-bottom-icons { display: flex; }
          .about-box { width: 95%; padding: 2rem; }
          .highlight-grid, .cards-wrapper { flex-direction: column; align-items: center; }
          .card-item { flex-direction: column; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default About;
