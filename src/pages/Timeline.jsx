import React, { useEffect } from "react";
import {
  FaBirthdayCake,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { SiPython, SiNumpy, SiOpencv, SiPandas,SiLinux, SiChartdotjs } from "react-icons/si";
import dpsIcon from "../assets/dps.png";
import doosIcon from "../assets/doon.png";
import rpLogo from "../assets/rps.png";
import sssLogo from "../assets/sss.png";
import sihLogo from "../assets/sih.jpg";
import teamPhoto from "../assets/group.jpg";
import style from "../assets/Style.png";
import CMA from "../assets/CMA.png";
import Tender from "../assets/Tenderplus.png";
import shreepati from "../assets/logoshreepati.png";
import NIT from "../assets/NIT.png";
import amiee from "../assets/AMIEE.jpg";
import algonauts from "../assets/Algonauts.jpeg";
import gate from "../assets/GATE.svg";
import Web from "../assets/Web.jpg";

const Timeline = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");
    const onScroll = () => {
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add("show");
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const imgStyle = { width: "100%", height: "100%", objectFit: "cover" };
  const iconStyle = { marginBottom: "8px", transition: "transform 0.3s ease" };

  const milestones = [
    {
      year: "2005–2010",
      image: <FaBirthdayCake size={40} />,
      label: "Born in Patna, Bihar",
      description: "Started my journey in Patna. Loved exploring new things.",
    },
    {
      year: "2010–2015",
      image: <img src={dpsIcon} alt="DPS" style={imgStyle} />,
      label: "Prep to 5th - Delhi Public School (DPS)",
      description: "Learned basics of reading, writing, and math.",
    },
    {
      year: "2015–2018",
      image: <img src={dpsIcon} alt="DPS" style={imgStyle} />,
      label: "6th to 8th - Delhi Public School, Patna",
      description: "Developed interest in science and computers.",
    },
    {
      year: "2019–2020",
      image: <img src={dpsIcon} alt="DPS" style={imgStyle} />,
      label: "9th & 10th - Delhi Public School (CBSE Board)",
      description: "Focused on academics and CS basics.",
    },
    {
      year: "2021–2023",
      image: <img src={doosIcon} alt="Doon" style={imgStyle} />,
      label: "11th & 12th - Doon Public School",
      description: "Developed advanced programming skills.",
    },
    {
      year: "2023–2024",
      image: <img src={rpLogo} alt="RP Sharma" style={imgStyle} />,
      label: "Admission - RP Sharma Institute of Technology",
      description: "Started B.Tech in CSE.",
    },
    {
      year: "2023-24",
      image: <img src={rpLogo} alt="RP Sharma" style={imgStyle} />,
      label: "Completed 1st Year B.Tech CSE",
      description: "Gained strong foundations in HTML, CSS, and JavaScript.",
      skills: [
        <FaHtml5 size={35} color="#E34F26" style={iconStyle} />,
        <FaCss3Alt size={35} color="#1572B6" style={iconStyle} />,
        <FaJs size={35} color="#F7DF1E" style={iconStyle} />,
      ],
    },
    {
      year: "2024",
      image: <img src={Web} alt="RP Sharma" style={imgStyle} />,
      label: "Internship - Internshipwala Carrers ",
      description: "Worked on front-end foundation languages and understood the basics of web development.",
      skills: [
        <FaHtml5 size={35} color="#E34F26" style={iconStyle} />,
        <FaCss3Alt size={35} color="#1572B6" style={iconStyle} />,
        <FaJs size={35} color="#F7DF1E" style={iconStyle} />,
      ],
    },
    {
      year: "2025",
      image: <img src={sssLogo} alt="SSS" style={imgStyle} />,
      label: "Internship - Software Services & Solutions",
      description: "Worked on real-world projects using PHP and MySQL.",
      skills: [
        <FaPhp size={35} color="#777BB4" style={iconStyle} />,
        <SiMysql size={35} color="#00618A" style={iconStyle} />,
      ],
    },
    {
      year: "2025",
      image: <img src={sihLogo} alt="SIH" style={imgStyle} />,
      label: "SIH Hackathon - Creative X",
      description:
        "Developed full-stack apps using React, Node.js, and MongoDB with my team.",
      skills: [
        <FaReact size={35} color="#61DBFB" style={iconStyle} />,
        <FaNodeJs size={35} color="#3C873A" style={iconStyle} />,
        <SiMongodb size={35} color="#3C873A" style={iconStyle} />,
      ],
      extraBox: {
        srcs: [teamPhoto],
        alt: "Team & Logo",
        desc: "Team Creativex presenting to judges in college internal hackathon",
      },
    },
    {
      year: "2025",
      image: <img src={style} alt="SNS" style={imgStyle} />,
      label: "Client Project : Style N Shine",
      description: "Made an website & billing system for client parlour.",
      skills: [
        <FaPhp size={35} color="#777BB4" style={iconStyle} />,
        <SiMysql size={35} color="#00618A" style={iconStyle} />,
        <FaHtml5 size={35} color="#E34F26" style={iconStyle} />,
        <FaCss3Alt size={35} color="#1572B6" style={iconStyle} />,
        <FaJs size={35} color="#F7DF1E" style={iconStyle} />,
      ],
    },
    {
      year: "2025",
      image: <img src={shreepati} alt="SES" style={imgStyle} />,
      label: "Client Project : Shreepati Educational Services",
      description:
        "Made an informative website for shreepati to enhance their services .",
      skills: [
         <FaReact size={35} color="#61DBFB" style={iconStyle} />,
        <FaNodeJs size={35} color="#3C873A" style={iconStyle} />,
      ],
    },
    {
      year: "2026",
      image: <img src={CMA} alt="KKA" style={imgStyle} />,
      label: "Client Project : Karunesh Kumar & Associates",
      description: "Made an website & Dashboard System for accounting firm.",
      skills: [
        <FaPhp size={35} color="#777BB4" style={iconStyle} />,
        <SiMysql size={35} color="#00618A" style={iconStyle} />,
        <FaHtml5 size={35} color="#E34F26" style={iconStyle} />,
        <FaCss3Alt size={35} color="#1572B6" style={iconStyle} />,
        <FaJs size={35} color="#F7DF1E" style={iconStyle} />,
      ],
    },
    {
      year: "2026",
      image: <img src={Tender} alt="TP" style={imgStyle} />,
      label: "Internship - Tender Plus Business Consulting Private Limited",
      description:
        "A startup company where worked on developing the webiste of the firm  and learned about Google Developer Tools",
      skills: [<FaAngular size={35} color="#f12b2b" style={iconStyle} />],
    },
    {
      year: "2026",
      image: <img src={NIT} alt="TP" style={imgStyle} />,
      label: "Internship - National Institute Of Technology , Patna",
      description:
        "Internship in the field of Data Analytics with python , ML , Image Processing",
      skills: [
        <SiScikitlearn size={35} color="#F7931E" style={iconStyle} />,
        <SiJupyter size={35} color="#F37626" style={iconStyle} />,
        <SiNumpy size={35} color="#013243" style={iconStyle} />,
        <SiOpencv size={35} color="#5C3EE8" style={iconStyle} />,
        <SiPandas size={35} color="#150458" style={iconStyle} />,
      ]
      
    },
    {
      year: "2026",
      image: <img src={amiee} alt="SIH" style={imgStyle} />,
      label: "National Innovation Hackathon - Alg0Nauts",
      description:
        "Our team built Metro Mitra, an AI platform for Bihar Metro to optimize operations and safety.",
    skills: [
        <SiScikitlearn size={35} color="#29ABE2" style={iconStyle} />,
        <SiJupyter size={35} color="#F37626" style={iconStyle} />,
        <RiNextjsFill size={35} color="#fffdfd" style={iconStyle} />,
      ],
      extraBox: {
        srcs: [algonauts],
        alt: "Team & Logo",
      },
    },
     {
      year: "2026",
      image: <img src={gate} alt="SIH" style={imgStyle} />,
      label: "GATE Examination (M-TECH)",
      description:
        " Preparing for GATE examination to pursue M-Tech in Computer Science and Engineering.",
    },
  ];
  return (
    <section className="timeline-section">
      <h2 className="timeline-title">My Journey</h2>
      <div className="timeline-wrapper">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-image">{item.image}</div>
                <div className="timeline-info">
                  <p className="timeline-label">
                    <span className="timeline-year-inline">{item.year}</span> —{" "}
                    {item.label}
                  </p>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>

              {item.skills && (
                <div className="timeline-skills">
                  {item.skills.map((icon, i) => (
                    <div key={i}>{icon}</div>
                  ))}
                </div>
              )}

              {item.extraBox && (
                <div className="timeline-extra-box">
                  {item.extraBox.srcs.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={item.extraBox.alt}
                      className="extra-img"
                    />
                  ))}
                  <p className="extra-desc">{item.extraBox.desc}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-section {
          padding: 4rem 1rem;
          background: rgba(255,255,255,0.05);
          color: #f5f5f5;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .timeline-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.5rem;
          color: #ff3b3b;
          margin-bottom: 3rem;
          text-shadow: 0 0 12px rgba(255,59,59,0.5);
        }

        .timeline-wrapper {
          position: relative;
          width: 100%;
          max-width: 1100px;
        }

        .timeline-wrapper::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #ff3b3b, #ff8787);
          transform: translateX(-50%);
          box-shadow: 0 0 20px rgba(255,59,59,0.5);
        }

        .timeline-item {
          position: relative;
          width: 50%;
          opacity: 0;
          transform: translateY(50px);
          transition: all 0.8s ease-out;
        }

        .timeline-item.show {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.left {
          left: 0;
          padding-right: 60px;
          text-align: right;
        }

        .timeline-item.right {
          left: 50%;
          padding-left: 60px;
        }

        .timeline-dot {
          position: absolute;
          top: 30px;
          right: -10px;
          width: 20px;
          height: 20px;
          background: #ff3b3b;
          border-radius: 50%;
          z-index: 2;
        }

        .timeline-item.right .timeline-dot {
          left: -10px;
        }

        .timeline-card {
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 1.7rem;
          box-shadow: 0 0 15px rgba(255,59,59,0.15);
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(255,59,59,0.5);
        }

        /* ✅ Updated year style */
        .timeline-year-inline {
          font-family: 'Orbitron', sans-serif;
          color: #ff3b3b;
          font-weight: 700;
          letter-spacing: 1px;
          text-shadow: 0 0 10px rgba(255,59,59,0.5);
        }

        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .timeline-image {
          width: 240px;
          height: 110px;
          background: #111;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(255,59,59,0.4);
        }

        .timeline-label {
          font-weight: 600;
          font-size: 1rem;
        }

        .timeline-desc {
        
          font-size: 0.9rem;
          margin-top: 5px;
        }

        .timeline-skills div svg {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .timeline-skills div:hover svg {
          transform: scale(1.3);
        }

        .timeline-skills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
          font-size: 1.5rem;
        }

        .timeline-extra-box {
          margin-top: 10px;
        }

        .extra-img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 8px;
          height: 100%;
        }

        @media (max-width: 768px) {
          .timeline-wrapper::before { display: none; }
          .timeline-dot { display: none !important; }
          .timeline-item, .timeline-item.left, .timeline-item.right {
            width: 100%;
            left: 0;
            text-align: center;
            padding: 0;
          }
          .timeline-card {
            width: 90%;
            margin: 1rem auto;
            text-align: center;
          }
          .timeline-card-header {
            flex-direction: column;
            align-items: center;
          }
          .timeline-label {
            display: inline-block;
            font-size: 1rem;
          }
          .timeline-year-inline {
            display: inline;
            margin-right: 6px;
          }
          .timeline-skills { justify-content: center; }
          .timeline-extra-box { align-items: center; text-align: center; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
