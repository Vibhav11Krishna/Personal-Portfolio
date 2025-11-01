import React, { useState } from "react";
import { FaBirthdayCake, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import dpsIcon from "../assets/dps.png";
import doosIcon from "../assets/doon.png";
import rpLogo from "../assets/rps.png";
import sssLogo from "../assets/sss.png";
import sihLogo from "../assets/sih.jpg";
import teamPhoto from "../assets/group.jpg";
import logoImg from "../assets/creativex.jpg";

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const imgStyle = { width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" };
  const iconStyle = { marginBottom: "8px", transition: "transform 0.3s ease" };

  const milestones = [
    { year: "2005-2010", image: <FaBirthdayCake size={40} />, label: "Born in Patna, Bihar", description: "Started my journey in Patna. Loved exploring new things." },
    { year: "2010-2015", image: <img src={dpsIcon} alt="DPS" style={imgStyle} />, label: "Prep to 5th - Delhi Public School (DPS)", description: "Learned basics of reading, writing, and math." },
    { year: "2015-2018", image: <img src={dpsIcon} alt="DPS" style={imgStyle} />, label: "6th to 8th - Delhi Public School, Patna", description: "Developed interest in science and computers." },
    { year: "2019-2020", image: <img src={dpsIcon} alt="DPS" style={imgStyle} />, label: "9th & 10th - Delhi Public School (CBSE Board)", description: "Focused on academics and CS basics." },
    { year: "2021-2023", image: <img src={doosIcon} alt="Doon" style={imgStyle} />, label: "11th & 12th - Doon Public School", description: "Developed advanced programming skills." },
    { year: "2023-2024", image: <img src={rpLogo} alt="RP Sharma" style={imgStyle} />, label: "Admission - RP Sharma Institute of Technology", description: "Started B.Tech in CSE." },
    { year: "2024-2025", image: <img src={rpLogo} alt="RP Sharma" style={imgStyle} />, label: "Completed 1st Year B.Tech CSE", description: "Gained strong foundations in HTML, CSS, and JavaScript.", skills: [<FaHtml5 size={35} color="#E34F26" style={iconStyle} />, <FaCss3Alt size={35} color="#1572B6" style={iconStyle} />, <FaJs size={35} color="#F7DF1E" style={iconStyle} />] },
    { year: 2025, image: <img src={sssLogo} alt="SSS" style={imgStyle} />, label: "Internship - Software Services & Solutions", description: "Worked on real-world projects using PHP and MySQL.", skills: [<FaPhp size={35} color="#777BB4" style={iconStyle} />, <SiMysql size={35} color="#00618A" style={iconStyle} />] },
    { year: 2025, image: <img src={sihLogo} alt="SIH" style={imgStyle} />, label: "SIH Hackathon Winner - Creative X", description: "Developed full-stack apps using React, Node.js, and MongoDB with my team.", skills: [<FaReact size={35} color="#61DBFB" style={iconStyle} />, <FaNodeJs size={35} color="#3C873A" style={iconStyle} />, <SiMongodb size={35} color="#3C873A" style={iconStyle} />], extraBox: { srcs: [teamPhoto, logoImg], alt: "Team & Logo", desc: "Team Creativex presenting SIH solution and SIH logo" } },
  ];

  const handleClick = (index) => setActiveIndex(index === activeIndex ? null : index);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Timeline</h2>
      <div className="timeline-wrapper">
        {milestones.map((item, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}>
            {/* Only year box on center line */}
            <div className="timeline-year-center">{item.year}</div>

            <div className="timeline-card" onClick={() => handleClick(idx)}>
              <div className="timeline-card-header">
                <div className="timeline-image">{item.image}</div>
                <div className="timeline-info">
                  <p className="timeline-label">{item.label}</p>
                  {item.description && <p className="timeline-desc">{item.description}</p>}
                </div>
              </div>

              {item.skills && <div className="timeline-skills">{item.skills.map((icon, i) => <div key={i}>{icon}</div>)}</div>}

              {item.extraBox && (
                <div className="timeline-extra-box">
                  {item.extraBox.srcs.map((src, i) => <img key={i} src={src} alt={item.extraBox.alt} className="extra-img" />)}
                  <p className="extra-desc">{item.extraBox.desc}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-section { padding: 3rem 1rem; min-height: 100vh; background: #1E1E1E; color: #E0E0E0; display: flex; flex-direction: column; align-items: center; }
        .timeline-title { font-family: 'Orbitron', sans-serif; font-size: 2.5rem; color: #FF3B3B; margin-bottom: 3rem; text-shadow: 0 0 6px rgba(255,59,59,0.5); }
        .timeline-wrapper { position: relative; width: 100%; max-width: 1200px; }
        .timeline-wrapper::before { content:""; position: absolute; left: 50%; top: 0; bottom: 0; width: 4px; background: #FF3B3B; transform: translateX(-50%); }

        /* Year box centered only on line */
        .timeline-year-center {
          position: fixed;
          left: 46%;

          transform: translateX(-50%,-50%);
          background: #1E1E1E;
          padding: 15px 40px;
          border-radius: 10px;
          font-family: 'Orbitron', sans-serif;
          font-size: 1rem;
          color: #FF3B3B;
          font-weight: 700;
          box-shadow: 0 0 12px rgba(255,59,59,0.6);
          z-index: 5;
          text-align: center;
        }

        .timeline-item { position: relative; width: 50%; padding: 1rem 0; display: flex; }
        .timeline-item.left { justify-content: flex-start; padding-right: 50px; }
        .timeline-item.right { left: 50%; justify-content: flex-start; padding-left: 50px; }

        .timeline-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 15px; font-family: 'Poppins', sans-serif; font-weight: 600; cursor: pointer; box-shadow: 0 0 10px rgba(255,59,59,0.2); transition: all 0.3s ease; position: relative; max-width: 380px; }
        .timeline-card:hover { transform: translateY(-5px) scale(1.05); box-shadow: 0 0 25px rgba(255,59,59,0.8); }
        .timeline-card-header { display: flex; gap: 1rem; align-items: center; }
        .timeline-image { width: 80px; height: 80px; background: #111; display: flex; justify-content: center; align-items: center; border-radius: 12px; overflow: hidden; box-shadow: 0 0 12px rgba(255,59,59,0.5); }
        .timeline-info { flex: 1; }
        .timeline-label { margin: 0.25rem 0 0; color: #E0E0E0; }
        .timeline-desc { font-size: 0.85rem; color: #CCCCCC; margin-top: 0.5rem; }
        .timeline-skills { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 0.5rem; }
        .timeline-extra-box { display: flex; gap: 1rem; flex-direction: column; margin-top: 0.5rem; }
        .extra-img { width: 100%; height: 150px; object-fit: cover; border-radius: 10px; }
        .extra-desc { color: #E0E0E0; font-size: 0.75rem; text-align: center; margin-top: 0.25rem; }

        /* MOBILE */
        @media (max-width: 768px) {
          .timeline-wrapper::before { display: none; }
          .timeline-item, .timeline-item.left, .timeline-item.right { width: 100%; left: 0; justify-content: center; flex-direction: column; align-items: center; text-align: center; padding: 0; }
          .timeline-year-center { position: relative; top: 0; left: 0; transform: none; margin-bottom: 1rem; }
          .timeline-card { max-width: 90%; width: 100%; margin: 0 auto; }
          .timeline-card-header { flex-direction: column; align-items: center; }
          .timeline-skills { justify-content: center; }
          .timeline-extra-box { align-items: center; }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
