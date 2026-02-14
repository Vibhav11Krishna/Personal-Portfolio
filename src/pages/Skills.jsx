import React, { useState, useEffect } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaDatabase,
} from "react-icons/fa";
import {
  SiPhp,
  SiMysql,
  SiBootstrap,
  SiGithub,
  SiPython,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiCanva } from "react-icons/si";
const skills = [
  { name: "HTML5", icon: <FaHtml5 />, description: "HTML5 is the standard markup language for creating structured and semantic web pages.", color: "#E34F26", progress: 95 },
  { name: "CSS", icon: <FaCss3Alt />, description: "CSS is used to style web pages and make them visually appealing.", color: "#264DE4", progress: 90 },
  { name: "JavaScript", icon: <FaJsSquare />, description: "JavaScript enables dynamic and interactive web content.", color: "#F0DB4F", progress: 85 },
  { name: "React", icon: <FaReact />, description: "React is a JavaScript library for building reusable UI components.", color: "#61DAFB", progress: 80 },
  { name: "Node.js", icon: <FaNode />, description: "Node.js allows server-side development using JavaScript.", color: "#3C873A", progress: 75 },
  { name: "MySQL", icon: <SiMysql />, description: "MySQL is a relational database management system.", color: "#00758F", progress: 70 },
  { name: "PHP", icon: <SiPhp />, description: "PHP is a server-side scripting language for web development.", color: "#8892BE", progress: 65 },
  { name: "Bootstrap", icon: <SiBootstrap />, description: "Bootstrap is a CSS framework for responsive web design.", color: "#563D7C", progress: 85 },
  { name: "GitHub", icon: <SiGithub />, description: "GitHub is a platform for version control and code collaboration.", color: "#181717", progress: 80 },
  { name: "Python", icon: <SiPython />, description: "Python is a versatile programming language for many applications.", color: "#FFD43B", progress: 75 },
  { name: "C", icon: <SiC />, description: "C is a general-purpose programming language used for system software.", color: "#A8B9CC", progress: 70 },
  { name: "C++", icon: <SiCplusplus />, description: "C++ is an extension of C for object-oriented programming.", color: "#00599C", progress: 65 },
  { name: "React native (Expo)", icon: <SiExpo />, description: "powerful framework that lets you build React Native apps without any native setup.", color: "#9c0000ff", progress: 70 },
  { name: "React native (Cli)", icon: <SiExpo />, description: "It gives full control for building apps with direct access to native Android and iOS code.", color: "#9c008cff", progress: 40 },
  { name: "Canva", icon: <SiCanva />, description: "It is a design tool mainly for designing purpose for every social platform.", color: "rgb(33, 176, 224)", progress: 85 },
];

const SkillCard = ({ skill }) => {
  const [hover, setHover] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState(0);

  const radius = 40;
  const stroke = 5;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  useEffect(() => {
    let start = 0;
    let interval;
    if (hover) {
      interval = setInterval(() => {
        start += 1;
        if (start > skill.progress) clearInterval(interval);
        else setAnimatedProgress(start);
      }, 10);
    } else setAnimatedProgress(0);
    return () => clearInterval(interval);
  }, [hover, skill.progress]);

  const strokeDashoffset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div
      className="skill-card animate-fade"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="skill-icon" style={{ color: skill.color }}>{skill.icon}</div>
      <h3 className="skill-name" style={{ color: skill.color }}>{skill.name}</h3>
      <p className="skill-desc">{skill.description}</p>
      <div className="progress-circle">
        <svg height={radius * 2} width={radius * 2}>
          <circle stroke="#333" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
          <circle
            stroke={skill.color}
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="progress-text">{animatedProgress}%</div>
      </div>

      <style>{`
        .skill-card {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 1.5rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
          position: relative;
          height: 300px;
        }
        .skill-card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 0 20px rgba(255, 59, 59, 0.6);
        }
        .skill-icon { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .skill-name { margin-bottom: 0.3rem; font-family: 'Poppins', sans-serif; }
        .skill-desc { color: #ccc; font-size: 0.85rem; margin-bottom: 1rem; padding: 0 0.5rem; }
        .progress-circle { width: 90px; height: 90px; position: relative; }
        .progress-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 0.8rem; color: #fff; font-weight: 600; }
      `}</style>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="skills-container fade-in">
      <h1 className="animate-slide">Skills</h1>
      {skills.map((skill, idx) => (
        <SkillCard key={idx} skill={skill} />
      ))}

      <style>{`
        .skills-container {
          min-height: 80vh;
          width: 100%;
          padding: 4rem 1rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          justify-content: center;
          background: #1E1E1E;
          color: #fff;
        }
        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 2rem 1rem;
          }
        }
        .fade-in { opacity: 0; animation: fadeIn 1s forwards; }
        .animate-slide {
          opacity: 0; transform: translateY(-20px);
          animation: slideIn 1s forwards;
          grid-column: 1 / -1;
          text-align: center;
          color: #FF3B3B;
          font-family: 'Orbitron', sans-serif;
          text-shadow: 0 0 6px rgba(255, 59, 59, 0.5);
          margin-bottom: 2rem;
          font-size: 2rem;
        }
        .animate-fade { opacity: 0; animation: fadeIn 1s forwards; animation-delay: 0.3s; }
        @keyframes fadeIn { to { opacity: 1; } }
        @keyframes slideIn { to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
};

export default Skills;
