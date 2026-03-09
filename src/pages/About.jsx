import React, { useEffect, useState, useRef } from "react";
import { FaLightbulb, FaRocket, FaHeart, FaFileDownload, FaGithub } from "react-icons/fa";
import Leader from "../assets/leader.png";
import dpsLogo from "../assets/dps.png";
import doonLogo from "../assets/doon.png";
import rpLogo from "../assets/rps.png";

import tenthPDF from "../assets/10th.pdf";
import twelfthPDF from "../assets/12th.pdf";
import degreePDF from "../assets/Resume.pdf";
import resumePDF from "../assets/Resume.pdf";

const About = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = {
    profile: useRef(null),
    extras: useRef(null),
    education: useRef(null),
    github: useRef(null), // Added ref for GitHub section
    resume: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const education = [
    {
      title: "10th - Delhi Public School",
      logo: dpsLogo,
      year: 2020,
      board: "CBSE",
      percentage: "81%",
      desc: "Built a strong academic foundation with focus on Science and Mathematics.",
      color: "#4CAF50",
      doc: tenthPDF,
    },
    {
      title: "12th - Doon Public School",
      logo: doonLogo,
      year: 2022,
      board: "CBSE",
      percentage: "73%",
      desc: "Explored computer science concepts and participated in school tech fairs.",
      color: "#2196F3",
      doc: twelfthPDF,
    },
    {
      title: "B.Tech CSE - RP Sharma Institute",
      logo: rpLogo,
      year: 2025,
      board: "University",
      percentage: "CGPA 8.5",
      desc: "Pursuing Computer Science Engineering with focus on Full Stack and AI/ML.",
      color: "#FF9800",
      doc: degreePDF,
    },
  ];

  const extras = [
    {
      icon: FaLightbulb,
      color: "#FFD700",
      title: "Who I Am",
      desc: "A creative full-stack developer blending logic with design, passionate about turning ideas into interactive experiences.",
    },
    {
      icon: FaRocket,
      color: "#03A9F4",
      title: "What I Do",
      desc: "Develop responsive and engaging websites using React, Node, and modern UI/UX principles.",
    },
    {
      icon: FaHeart,
      color: "#E91E63",
      title: "My Passion",
      desc: "Building projects that inspire, learning cutting-edge tech, and exploring how AI can enhance digital design.",
    },
  ];

  const resumeColor = "#9C27B0";

  return (
    <section
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.05)",
        color: "#E0E0E0",
        padding: "5rem 1.5rem",
      }}
    >
      {/* Profile */}
      <div
        ref={sectionRefs.profile}
        data-section="profile"
        className={`profile ${visibleSections.profile ? "animate-fade-up" : "hidden"}`}
      >
        <img src={Leader} alt="Pulkit Krishna" />
        <h2>About Me</h2>
        <p>
          Hi, I'm <span style={{ color: "#ff260a" }}>Pulkit Krishna</span>, a
          passionate <strong>Full Stack Developer</strong>, aspiring{" "}
          <strong>AI/ML Engineer</strong>, and <strong>Cybersecurity Enthusiast</strong> from India.
          I love building intelligent, user-focused web applications that are fast,
          responsive, secure, and aesthetically pleasing.
          <br />
          <br />
          I enjoy exploring emerging technologies, solving real-world problems through
          code, and continuously improving my technical and creative abilities. I Aspire to
          pursue <strong>M.Tech</strong> followed by <strong>Ph.D</strong> in AI/ML &
          Cybersecurity and move into the teaching and research field.
        </p>
      </div>

      {/* Extras Grid */}
      <div ref={sectionRefs.extras} data-section="extras" className="extras-grid">
        {extras.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`extra-card ${
                visibleSections.extras ? (idx % 2 === 0 ? "animate-left" : "animate-right") : "hidden"
              }`}
              style={{
                borderColor: item.color,
                boxShadow: `0 0 15px ${item.color}55`,
              }}
            >
              <Icon size={65} color={item.color} />
              <h3 style={{ color: item.color }}>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Education Section */}
      <div
        ref={sectionRefs.education}
        data-section="education"
        className={`education-section ${visibleSections.education ? "animate-fade-up" : "hidden"}`}
      >
        <h3 className="subheading">Education & Qualifications</h3>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className={`edu-card ${
                visibleSections.education ? (idx % 2 === 0 ? "animate-left" : "animate-right") : "hidden"
              }`}
              style={{
                borderTop: `6px solid ${edu.color}`,
                boxShadow: `0 0 15px ${edu.color}55`,
              }}
            >
              <div className="edu-header">
                <img src={edu.logo} alt={edu.title} />
                <div className="edu-title">
                  <h4 style={{ color: edu.color }}>{edu.title}</h4>
                  <p>{edu.board} • {edu.year}</p>
                  <p style={{ fontWeight: "600" }}>{edu.percentage}</p>
                </div>
              </div>
              <p className="edu-desc">{edu.desc}</p>
              <a href={edu.doc} target="_blank" rel="noopener noreferrer" className="edu-btn" style={{ background: edu.color }}>
                <FaFileDownload /> View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Professional Showcase Section */}
      <div
        ref={sectionRefs.github}
        data-section="github"
        className={`github-full-section ${visibleSections.github ? "animate-fade-up" : "hidden"}`}
        style={{ textAlign: "center", marginTop: "8rem", marginBottom: "4rem" }}
      >
        <h3 className="subheading">Coding Journey</h3>

        {/* Row 1: Streak Stats */}
        <div className="github-streak-container" style={{ marginBottom: "4rem" }}>
          <h4 className="github-label">Contribution Streak</h4>
          <img 
            src="https://github-readme-streak-stats.herokuapp.com/?user=Vibhav11Krishna&theme=tokyonight&background=00000000&hide_border=true&ring=ff260a&fire=ff260a&currStreakNum=ffffff&sideNums=ffffff&sideLabels=888888&dates=888888" 
            alt="GitHub Streak" 
            className="github-img-streak"
          />
        </div>

        {/* Row 2: Activity Graph */}
        <div className="github-graph-container" style={{ marginBottom: "3rem" }}>
          <h4 className="github-label">Activity Trends</h4>
          <img 
            src="https://github-readme-activity-graph.vercel.app/graph?username=Vibhav11Krishna&bg_color=00000000&color=ff260a&line=ff260a&point=ffffff&hide_border=true" 
            alt="GitHub Activity Graph" 
            className="github-img-graph"
          />
        </div>

        <div style={{ marginTop: "3rem" }}>
          <a 
            href="https://github.com/Vibhav11Krishna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-btn"
            style={{ border: "2px solid #ff260a", background: "transparent" }}
          >
            <FaGithub size={22} /> Explore My Repositories
          </a>
        </div>
      </div>

      {/* Resume Section */}
      <div
        ref={sectionRefs.resume}
        data-section="resume"
        className={`resume-box ${visibleSections.resume ? "animate-fade-up" : "hidden"}`}
        style={{
          borderTop: `6px solid ${resumeColor}`,
          boxShadow: `0 0 20px ${resumeColor}55`,
        }}
      >
        <h4 style={{ color: resumeColor, fontSize: "1.6rem" }}>My Resume</h4>
        <p style={{ maxWidth: "700px", margin: "1rem auto", color: "#ccc", lineHeight: "1.8" }}>
          Want to explore more about my professional journey, projects, and skills? 
          Download my resume below.
        </p>
        <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-btn" style={{ background: resumeColor }}>
          <FaFileDownload /> View My Resume
        </a>
      </div>

      <style>{`
        .hidden { opacity: 0; transform: translateY(40px); }
        .animate-fade-up { animation: fadeUp 0.8s forwards; }
        .animate-left { animation: slideLeft 0.8s forwards; }
        .animate-right { animation: slideRight 0.8s forwards; }

        @keyframes fadeUp { 0% { opacity:0; transform:translateY(40px); } 100% { opacity:1; transform:translateY(0); } }
        @keyframes slideLeft { 0% { opacity:0; transform:translateX(-60px); } 100% { opacity:1; transform:translateX(0); } }
        @keyframes slideRight { 0% { opacity:0; transform:translateX(60px); } 100% { opacity:1; transform:translateX(0); } }

        .extra-card, .edu-card, .resume-box { transition: all 0.4s ease; }
        .extra-card:hover, .edu-card:hover, .resume-box:hover {
          transform: translateY(-8px) scale(1.05);
          box-shadow: 0 0 25px rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.1);
        }

        .profile { text-align:center; margin-bottom:3rem; }
        .profile img { width:210px; height:210px; border-radius:50%; object-fit:cover; border: 4px solid #ff260a; }
        .profile h2 { margin-top:1rem; font-family:'Orbitron', sans-serif; color:#ff260a; font-size:2.8rem; }
        .profile p { max-width:850px; margin:1rem auto 2rem; line-height:1.9; font-size:1.15rem; color:#d1d1d1; text-align:justify; }

        .extras-grid { display:flex; justify-content:center; align-items:stretch; flex-wrap:wrap; gap:2.5rem; margin-bottom:4rem; }
        .extra-card { flex:1 1 320px; background:rgba(255,255,255,0.06); border:2px solid; border-radius:22px; padding:2.8rem 2rem; text-align:center; }

        .education-section { margin-top:4rem; text-align:center; }
        .subheading { color:#ff260a; font-family:'Orbitron', sans-serif; font-size:2.2rem; margin-bottom:2.5rem; }
        .education-grid { display:grid; grid-template-columns:repeat(auto-fit, minmax(330px,1fr)); gap:2.5rem; }
        .edu-card { background:rgba(255,255,255,0.05); border-radius:15px; padding:2rem; }
        
        .github-label { color: #888; margin-bottom: 1.5rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; }
        .github-img-streak { width: 100%; maxWidth: 300px; height: 300px; }
        .github-img-graph { width: 100%; maxWidth: 900px; height: auto; border-radius: 15px; }

        .edu-header { display:flex; align-items:center; gap:1.2rem; margin-bottom:1.5rem; }
        .edu-header img { width:100px; height:100px; border-radius:15px; object-fit: contain; background: white; padding: 5px; }
        .edu-btn, .resume-btn { display:inline-flex; align-items:center; gap:0.5rem; color:#fff; text-decoration:none; padding:0.8rem 1.4rem; border-radius:10px; font-weight:600; cursor: pointer; }

        .resume-box { margin-top:3rem; background:rgba(255,255,255,0.05); border-radius:15px; padding:2rem; text-align: center; }

        @media (max-width:900px) {
          .profile p { text-align:center; }
          .github-img-graph, .github-img-streak { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default About;