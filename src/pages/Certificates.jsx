import React, { useState, useEffect } from "react";
import {
  FaCertificate,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaRobot,
} from "react-icons/fa";
import {
  SiMysql,
  SiPhp,
  SiBootstrap,
  SiPython,
  SiFigma,
  SiCanva,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { SiExpo } from "react-icons/si";
import { SiAnthropic } from "react-icons/si";
import { FaNetworkWired, FaMicrochip, FaWifi } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import {RiNextjsFill} from "react-icons/ri";
import frontendImg from "../assets/internshipwala.jpg";
import Plus from "../assets/Plus.png";
import jsMasteryImg from "../assets/sssinternship.jpg";
import fullstackImg from "../assets/swayam.jpg";
import uiuxImg from "../assets/uiux.jpg";
import ciscoImg from "../assets/cisco.jpg";
import logoImg from "../assets/creativex.jpg";
import ciscoImg2 from "../assets/cisco2.jpg";
import aiImg from "../assets/skillsindia.png";
import mobile from "../assets/mobile.png";
import course from "../assets/nptel.jpg";
import Anthropic from "../assets/Anthropic.jpeg";
import Data from "../assets/Data.png";
import TenderPlus from "../Certificates/TenderPlus.pdf";
import Python from "../Certificates/swayam.jpg";
import Software from "../Certificates/sssinternship.jpg";
import Wala from "../Certificates/internshipwala.jpg";
import Ui from "../Certificates/uiux.jpg";
import Script from "../Certificates/cisco.jpg";
import Essential from "../Certificates/cisco2.jpg";
import Native from "../Certificates/mobile.png";
import Skills from "../Certificates/skillsindia.png";
import Claude from  "../Certificates/Claude.pdf";
import Nptel from "../Certificates/Nptel.pdf";
import Nptel1 from "../Certificates/Nptel1.pdf";
import Things from "../assets/Things.png";
import Hackathon from "../assets/Hackathon.jpeg";
import National from "../assets/Nit-Certificate.jpeg";
import Technology from "../Certificates/Nit-Certificate.jpeg";
import Algonauts from "../Certificates/Hackathon.jpeg";



const certificates = [
  {
    title: "Front-End Development Internship",
    issuer: "Internshipwala",
    year: 2024,
    month: "February",
    description:
      "Mastered modern HTML, CSS, and responsive layouts. Gained practical experience in web page design, UI best practices, and real-world project implementation.",
    img: frontendImg,
    link: Wala,
    tech: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#264DE4" },
      { icon: <FaJsSquare />, color: "#F7DF1E" },
      { icon: <SiBootstrap />, color: "#563D7C" },
    ],
  },
  {
    title: "Full-Stack Development Internship",
    issuer: "Software Services & Solution",
    year: 2025,
    month: "April",
    description:
      "Learned back-end PHP & MySQL integration, built dynamic websites, and enhanced skills in full-stack web development including front-end & back-end synchronization.",
    img: jsMasteryImg,
    link: Software,
    tech: [
      { icon: <SiMysql />, color: "#1ea0d0ff" },
      { icon: <SiPhp />, color: "#bc17e1ff" },
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#264DE4" },
      { icon: <FaJsSquare />, color: "#F7DF1E" },
    ],
  },
  {
    title: "JavaScript Essentials",
    issuer: "Cisco",
    year: 2025,
    month: "September",
    description:
      "Mastered core JavaScript concepts including ES6 syntax, DOM manipulation, events, and basic programming logic for real-world web applications.",
    img: ciscoImg,
    link: Script,
    tech: [{ icon: <FaJsSquare />, color: "#F7DF1E" }],
  },
  {
    title: "UI/UX Design Essentials",
    issuer: "Skillup",
    year: 2024,
    month: "August",
    description:
      "Learned interface design, color theory, user experience principles, and prototyping tools like Figma and Canva to create professional and engaging designs.",
    img: uiuxImg,
    link: Ui,
    tech: [
      { icon: <SiFigma />, color: "#A259FF" },
      { icon: <SiCanva />, color: "#00C4CC" },
    ],
  },
  {
    title: "Python Programming",
    issuer: "Swayam",
    year: 2025,
    month: "May",
    description:
      "Gained proficiency in Python programming, focusing on functions, arrays, and basic algorithms to solve real-world programming challenges efficiently.",
    img: fullstackImg,
    link: Python,
    tech: [{ icon: <SiPython />, color: "#e2f916" }],
  },
  {
    title: "C++ Essentials",
    issuer: "Cisco",
    year: 2025,
    month: "March",
    description:
      "Learned C++ programming, including core concepts, object-oriented programming, and basic algorithms, with hands-on coding experience.",
    img: ciscoImg2,
    link: Essential,
    tech: [{ icon: <SiCplusplus />, color: "#00599C" }],
  },
  {
    title: "SOAR: AI To Acquire",
    issuer: "Skills India (Microsoft)",
    year: 2025,
    month: "November",
    description:
      "Successfully completed the SOAR: AI To Acquire program by Skills India in collaboration with Microsoft, focused on developing AI literacy, responsible use of AI, and practical applications of machine learning.",
    img: aiImg,
    link: Skills,
    tech: [{ icon: <FaRobot />, color: "#0078D4" }],
  },
  {
    title: "React Native & Expo",
    issuer: "Tutedude",
    year: 2026,
    month: "January",
    description:
      "Successfully completed the course of react native and completed the projects and assignment as directed and made project.",
    img: mobile,
    link: Native,
    tech: [{ icon: <SiExpo /> }],
  },

  {
    title: "Internship Certificate (Startup)",
    issuer: "Tender Plus",
    year: 2026,
    month: "April",
    description:
      "Learned how a startup company is managed and negotiated some work on the website and suggested some modifications and managed to understand work enviournment in a company",
    img: Plus,
    link: TenderPlus,
    tech: [{ icon: <FaAngular /> , color: "#f91616"}],
  },
  {
    title: "python For Data Science",
    issuer: "Nptel",
    year: 2026,
    month: "Feburary",
    description:
      "Certificate on python for data science in nptel to enhnace in my skills on libraries of python and have consolidate score of 60%",
    img: Data,
    link:Nptel,

    tech: [{ icon: <SiPython />, color: "#e2f916" }],
  },
  {
    title: "Introduction To Internet of Things",
    issuer: "NPTEL",
    year: 2026,
    month: "February",
    description:
      " Certificate on Internet Of Things in nptel to enhnace in my skills on IoT architecture, sensors, embedded systems, and computer networks and have consolidate score of 70%.",
    img: Things,
    link:Nptel1, 
    tech: [
      { icon: <FaWifi />, color: "#00E5FF" },
      { icon: <FaMicrochip />, color: "#4CAF50" },
      { icon: <FaNetworkWired />, color: "#FF9800" },
    ],
  },
   {
    title: "Claude Code In Action",
    issuer: "Anthropic",
    year: 2026,
    month: "April",
    description:
      "This certification focused on mastering Claude’s CLI tool for terminal-based refactoring and agentic coding.",
    img: Anthropic,
    link: Claude,
    tech: [
      { icon: <SiAnthropic />, color: "#FFFFFF" },
    ],
  },
  {
    title: "Research Internship",
    issuer: "National Institute of Technology, Patna",
    year: 2026,
    month: "July",
    description:
      "Research internship at the National Institute of Technology (NIT) Patna",
    img: National,
    link: Technology,
    tech: [
       { icon: <SiScikitlearn />, color: "#29ABE2" },
      { icon: <SiJupyter />, color: "#F37626" },
    ],
  },
  {
    title: "National Innovation Hackathon",
    issuer: "AMIEE , Heritage Institute of Technology",
    year: 2026,
    month: "July",
    description:
      "participated in the National Innovation Hackathon 2026, organized by the AMIEE Association and CMAOI Association in collaboration with the Heritage Institute of Technology, Kolkata.",
    img: Hackathon,
    link: Algonauts,
    tech: [
      { icon: <SiScikitlearn />, color: "#29ABE2" },
      { icon: <SiJupyter />, color: "#F37626" },
      { icon: <RiNextjsFill />, color: "#fffdfd" },
    ],
  },
];

const Certificates = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      style={{
        background: "#1E1E1E",
        color: "#E0E0E0",
        padding: "6rem 2rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "#FF3B3B",
          fontFamily: "'Orbitron', sans-serif",
          textShadow: "0 0 6px rgba(255, 59, 59, 0.5)",
          marginBottom: "6rem",
        }}
      >
        Certificates & Achievements
      </h2>

      <div className="cert-wrapper">
        {certificates
          .sort((a, b) => a.year - b.year)
          .map((cert, idx) => (
            <div key={idx} className={`cert-item ${animate ? "fade-in" : ""}`}>
              <div className="cert-year">
                <span className="month">{cert.month}</span>
                <br />
                <span className="year">{cert.year}</span>
              </div>
              <div className="cert-card">
                <div className="cert-img">
                  <img src={cert.img} alt={cert.title} />
                </div>
                <div className="cert-content">
                  <h3>
                    {cert.title} <FaCertificate style={{ color: "#FFD700" }} />
                  </h3>
                  <p className="issuer">{cert.issuer}</p>
                  <p className="desc">{cert.description}</p>
                  
                  {/* Container for Icons and Button side-by-side */}
                  <div className="cert-footer">
                    <div className="tech-icons">
                      {cert.tech.map((t, i) => (
                        <div
                          key={i}
                          className="tech-icon"
                          style={{ color: t.color }}
                        >
                          {t.icon}
                        </div>
                      ))}
                    </div>
                    
                    <a href={cert.link} target="_blank" rel="noreferrer" className="view-btn">
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <style>{`
      .cert-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        gap: 1rem;
      }

      .view-btn {
        background: transparent;
        color: #FF3B3B;
        border: 2px solid #FF3B3B;
        padding: 8px 16px;
        border-radius: 8px;
        font-family: 'Orbitron', sans-serif;
        font-size: 0.8rem;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;
        white-space: nowrap;
      }

      .view-btn:hover {
        background: #FF3B3B;
        color: #fff;
        box-shadow: 0 0 15px rgba(255, 59, 59, 0.4);
        transform: scale(1.05);
      }

      @media (max-width: 480px) {
        .cert-footer {
          flex-direction: column;
          align-items: flex-start;
        }
        .view-btn {
          width: 100%;
          text-align: center;
        }
      }
        .cert-wrapper { position: relative; max-width: 1200px; margin: 0 auto; }
        .cert-wrapper::before {
          content:"";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: #FF3B3B;
          transform: translateX(-50%);
        }
        .cert-item { position: relative; margin-bottom: 6rem; display: flex; justify-content: flex-start; }
        .cert-item:nth-child(even) { justify-content: flex-end; }

        .cert-year {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: #1E1E1E;
          padding: 10px 16px;
          border-radius: 10px;
          font-family: 'Orbitron', sans-serif;
          color: #FF3B3B;
          font-weight: 600;
          border: 2px solid #FF3B3B;
          text-align: center;
          z-index: 5;
          line-height: 1.3;
        }
        .cert-year .month {
          display: block;
          font-size: 0.9rem;
          color: #ffbbbb;
        }
        .cert-year .year {
          display: block;
          font-size: 1.2rem;
          font-weight: 700;
          color: #FF3B3B;
        }

        .cert-card {
          width: 460px;
          background: #1F1F1F;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          cursor: pointer;
        }
        .cert-card:hover { transform: translateY(-5px) scale(1.03); box-shadow: 0 15px 35px rgba(255,59,59,0.5); }
        .cert-img img { width: 100%; height: 280px; object-fit: cover; transition: transform 0.5s ease; }
        .cert-content { padding: 1.5rem; text-align: left; }
        .cert-content h3 { color: #FF3B3B; font-size: 1.8rem; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem; }
        .issuer { color: #ccc; font-weight: 600; margin-bottom: 0.5rem; }
        .desc { color: #aaa; font-size: 0.95rem; margin-bottom: 1rem; }

        .tech-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .tech-icon {
          font-size: 1.9rem;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }
        .tech-icon:hover {
          transform: scale(1.3);
          text-shadow: 0 0 12px currentColor, 0 0 20px currentColor;
        }

        .fade-in { opacity: 0; transform: translateY(30px); animation: fadeInUp 0.8s forwards; }
        @keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }

        @media (max-width: 768px) {
          .cert-wrapper::before { display: none; }
          .cert-item, .cert-item:nth-child(even) { width: 100%; justify-content: center; flex-direction: column; align-items: center; }
          .cert-year { position: relative; left: 0; transform: none; margin-bottom: 1rem; }
          .cert-card { width: 100%; max-width: 460px; }
          .cert-content { text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default Certificates;