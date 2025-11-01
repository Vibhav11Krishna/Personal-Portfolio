import React from "react";
import { FaReact, FaNode, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiMongodb, SiMysql, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";

import hackathonLogo from "../assets/creativex.jpg";
import hackathonImg1 from "../assets/group.jpg";
import hackathonImg2 from "../assets/group1.jpg";
import hackathonImg3 from "../assets/group3.jpg";
import problemImg from "../assets/sih.jpg";
import pptImg from "../assets/creativex.jpg";
import pulkitImg from "../assets/leader.png";
import kritikaImg from "../assets/Kritika.png";
import sidImg from "../assets/Siddhart.png";
import praveenImg from "../assets/Praveen.png";
import aniketImg from "../assets/Aniket.png";
import rituImg from "../assets/Ritu.png";
import temp from "../assets/temp.png";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import { AiOutlineFilePdf } from "react-icons/ai";
import pptFile from "../assets/ppt.pdf"; // <-- your PPT PDF file


const projectOverview = [
  { img: temp, title: "Home Page", desc: "Landing page with navigation, welcome section, and quick links." },
  { img: project1, title: "E-Learning Page", desc: "E learning page where students acc to their intrest topic can practice their questions" },
  { img: project2, title: "Progrss Page", desc: "Students & Teacher can see their Progress" },
  { img: project3, title: "Pionnear Platform Page", desc: "Students & Teachers can see their internships and jobs acc to their subject choosen" },
  { img: project4, title: "Roadmap Page", desc: " Both can see their roadmaps in which direction you should got to become expert in their feild of intrest" },
  { img: project5, title: "Insights Page", desc: "Both can see their insight (news) and gather information" },
 
];
const teamMembers = [
  { img: pulkitImg, name: "Pulkit Krishna", role: "Backend Developer" },
  { img: kritikaImg, name: "Kritika Singh", role: "UI/UX Designer" },
  { img: sidImg, name: "Siddhart", role: "Frontend Developer" },
  { img: praveenImg, name: "Praveen Kumar", role: "Database Enginnear" },
  { img: aniketImg, name: "Aniket", role: "Frontend Developer" },
  { img: rituImg, name: "Ritu", role: "Tester" },
];

const weeklyRoutine = [
  { week: "Week 1", tasks: "Ideation, understanding SIH problem statement, and planning solution architecture." },
  { week: "Week 2", tasks: "Frontend prototype with React.js, layout, and routing." },
  { week: "Week 3", tasks: "Backend setup with Node.js & Express, database integration using MySQL and MongoDB." },
  { week: "Week 4", tasks: "Integration, authentication, testing, and optimization." },
  { week: "Week 5", tasks: "Final debugging, PPT preparation, and project submission." },
];

const galleryImages = [hackathonImg1, hackathonImg2,hackathonImg3];

const CreativeXPage = () => {
  return (
    <section style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "4rem 2rem" }}>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={hackathonLogo}
          alt="CreativeX Logo"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1 style={{ color: "#FF3B3B", fontSize: "2.5rem", marginBottom: "1rem" }}>
          CreativeX Hackathon - SIH Level Project
        </h1>
        <p style={{ fontSize: "1rem", color: "#ccc", maxWidth: "800px", margin: "0 auto" }}>
          Participated in the <strong>CreativeX Hackathon</strong> inspired by Smart India Hackathon (SIH), from September to October.
          Our team built a MERN Stack Path Generator for students that solved a real-world government problem and was recognized for innovation and functionality.
        </p>
      </div>

      {/* Problem Statement */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Problem Statement</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
          <img
            src={problemImg}
            alt="Problem"
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
          <p style={{ flex: "1", color: "#E0E0E0", lineHeight: "1.6" }}>
            The SIH challenge was to create a digital solution for "AI-Powered Personalized Learning Path Generator" uses artificial intelligence to create customized learning paths for students based on their knowledge, learning style, and performance. It dynamically updates modules, identifies skill gaps, and recommends resources to make learning efficient and engaging. The system also provides teachers with actionable insights, enabling personalized guidance and improved academic outcomes.
          </p>
        </div>

        {/* Solution */}
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem", marginTop: "2rem" }}>Our Solution</h2>
        <ul style={{ color: "#E0E0E0", lineHeight: "1.6", paddingLeft: "1.2rem" }}>
          <li>Our solution leverages artificial intelligence to create customized learning paths for students based on their current knowledge, learning style, preferences, and career goals.</li>
          <li>The system analyzes performance data, identifies skill gaps, and dynamically updates learning modules to maximize efficiency and engagement.</li>
          <li>Recommendations for resources, quizzes, and timelines Supports both students and teachers with actionable insights Impact</li>
          <li>This solution empowers students to learn smarter, stay motivated, and achieve academic goals, while enabling teachers to provide targeted support, making education more effective and personalized.</li>
          <li>Optimized UI/UX with React.js and Figma prototypes for a smooth experience.</li>
          <li>Responsive layout for all devices and secure hosting with Vercel.</li>
          <li>Teachers & Students have seperate Dashboards to access and see their progrees and Jobs oppurtunities.</li>
          <li> Uses NLP for analyzing resumes & skills.</li>
        </ul>
      </div>

      {/* Features */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Key Features</h2>
        <ul style={{ color: "#E0E0E0", lineHeight: "1.8", paddingLeft: "1.2rem" }}>
          <li>Skill gap analysis</li>
          <li>Adaptive learning plan</li>
          <li>Progress tracking and feedback</li>
          <li>Integration with existing learning platforms</li>
          <li>Integrates AI/ML + EdTech + Employability
 Solutions in one ecosystem</li>
          <li> Real-time roadmap modulation using ML
 predictions.</li>
          <li>Gamification + mentor network for engagement.</li>
        </ul>
      </div>


  {/* Project Overview */}
<div style={{ maxWidth: "1000px", margin: "0 auto 3rem" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Project Overview</h2>
  <div
    className="project-grid"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 2fr)",
      gap: "1.9rem",
    }}
  >
    {projectOverview.map((proj, idx) => {
      const isLastFullWidth =
        idx === projectOverview.length - 1 &&
        projectOverview.length % 2 !== 0;
      return (
        <div
          key={idx}
          className="project-card"
          style={{
            background: "#2b2b2b",
            padding: "0.8rem",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "all 0.3s ease",
            gridColumn: isLastFullWidth ? "span 2" : "span 1",
            height: "auto",
          }}
        >
          <img
            src={proj.img}
            alt={proj.title}
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "0.5rem",
              transition: "transform 0.4s ease",
            }}
            className="project-img"
          />
          <h3 style={{ color: "#FF3B3B", fontSize: "1.2rem" }}>{proj.title}</h3>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#ccc",
              marginBottom: "0.5rem",
            }}
          >
            {proj.desc}
          </p>
        </div>
      );
    })}
  </div>
</div>

<style>{`
  .project-card {
    box-shadow: 0 0 0 rgba(255, 59, 59, 0);
  }

  .project-card:hover {
    transform: translateY(-6px) scale(1.02);
    
  
  }

  .project-card:hover .project-img {
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    .project-grid {
      grid-template-columns: 1fr !important;
    }
    .project-card {
      grid-column: span 1 !important;
    }
  }
`}</style>




      {/* Tech Stack Table */}
      <div style={{ maxWidth: "800px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Technology Stack</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#2b2b2b", borderRadius: "10px", overflow: "hidden" }}>
          <thead>
            <tr style={{ background: "#FF3B3B", color: "#fff" }}>
              <th style={tableHeader}>Technology</th>
              <th style={tableHeader}>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={tableCell}><SiHtml5 /> HTML</td><td style={tableCell}>Structure & content</td></tr>
            <tr><td style={tableCell}><SiCss3 /> CSS</td><td style={tableCell}>Styling & responsiveness</td></tr>
            <tr><td style={tableCell}><SiJavascript /> JavaScript</td><td style={tableCell}>Logic & interactivity</td></tr>
            <tr><td style={tableCell}><FaReact /> React.js</td><td style={tableCell}>Frontend framework</td></tr>
            <tr><td style={tableCell}><FaNode /> Node.js</td><td style={tableCell}>Backend & API handling</td></tr>
            <tr><td style={tableCell}><SiMysql /> MySQL</td><td style={tableCell}>Relational database</td></tr>
            <tr><td style={tableCell}><SiMongodb /> MongoDB</td><td style={tableCell}>NoSQL data management</td></tr>
          </tbody>
        </table>
      </div>

      {/* Weekly Timeline */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Weekly Development Timeline</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={tableHeader}>Week</th>
              <th style={tableHeader}>Tasks & Learning</th>
            </tr>
          </thead>
          <tbody>
            {weeklyRoutine.map((week, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? "#2b2b2b" : "#262626" }}>
                <td style={tableCell}>{week.week}</td>
                <td style={tableCell}>{week.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    {/* Team Members */}
<div style={{ maxWidth: "1000px", margin: "0 auto 3rem" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem", textAlign: "center" }}>Team Members</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)", // 3 per row on desktop
      gap: "2rem",
      justifyItems: "center",
    }}
  >
    {teamMembers.map((member, idx) => (
      <div
        key={idx}
        style={{
          textAlign: "center",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        className="team-card"
      >
        <img
          src={member.img}
          alt={member.name}
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #FF3B3B",
            marginBottom: "0.8rem",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(255, 59, 59, 0.6)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />

        {/* Member Name */}
        <p style={{ fontWeight: "600", color: "#fff", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          {member.name}
        </p>

        {/* Role in Glowing Box */}
        <div
          style={{
            background: "rgba(255, 59, 59, 0.15)",
            border: "1px solid #FF3B3B",
            color: "#FFB6B6",
            fontSize: "0.9rem",
            borderRadius: "10px",
            padding: "0.4rem 0.8rem",
            display: "inline-block",
            boxShadow: "0 0 10px rgba(255, 59, 59, 0.3)",
          }}
        >
          {member.role}
        </div>
      </div>
    ))}
  </div>

  {/* Responsive Styling */}
  <style>{`
    @media (max-width: 768px) {
      .team-card img {
        width: 120px !important;
        height: 120px !important;
      }
      div[style*="grid-template-columns: repeat(3"] {
        grid-template-columns: repeat(2, 1fr) !important; /* 2 per row on tablet */
      }
    }

    @media (max-width: 480px) {
      div[style*="grid-template-columns: repeat(3"] {
        grid-template-columns: 1fr !important; /* 1 per row on mobile */
      }
    }
  `}</style>
</div>
 


   
{/* Gallery */}
<div style={{ maxWidth: "1000px", margin: "0 auto 3rem", padding: "0 1rem" }}>
  <h2
    style={{
      color: "#FF3B3B",
      marginBottom: "1rem",
      textAlign: "center",
    }}
  >
    Gallery
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // ✅ slightly larger min width
      gap: "2rem",
      justifyItems: "center", // ✅ centers each image properly
    }}
  >
    {galleryImages.map((img, idx) => (
      <div
        key={idx}
        style={{
          width: "100%",
          maxWidth: "360px", // ✅ consistent and centered width
          overflow: "hidden",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={img}
          alt={`Gallery ${idx + 1}`}
          style={{
            width: "100%",
            height: "auto", // ✅ keeps aspect ratio, no cropping
            borderRadius: "12px",
            objectFit: "cover",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
    ))}
  </div>
</div>



      {/* Links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap", marginBottom: "3rem" }}>
        <a href="https://github.com/Vibhav11Krishna/" target="_blank" rel="noopener noreferrer" style={linkStyle}><FaGithub /> GitHub</a>
        <a href="https://www.instagram.com/cr8ivex?igsh=Nmc1cHV5bWNqYXMy" target="_blank" rel="noopener noreferrer" style={linkStyle}><FaInstagram /> Instagram</a>
        <a href="	https://youtu.be/WKM8eaw5ifI?si=P0hMu9QFBtyXzRfZ" target="_blank" rel="noopener noreferrer" style={linkStyle}><FaYoutube /> YouTube</a>
      </div>
      {/* Project PPT Button */}
<div style={{ textAlign: "center", marginBottom: "4rem" }}>
  <a
    href={pptFile}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "0.8rem 1.6rem",
      background: "#FF3B3B",
      color: "#fff",
      fontWeight: "600",
      borderRadius: "8px",
      textDecoration: "none",
      transition: "transform 0.2s, box-shadow 0.2s",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-3px)";
      e.target.style.boxShadow = "0 5px 15px rgba(255,59,59,0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "none";
      e.target.style.boxShadow = "none";
    }}
  >
    <AiOutlineFilePdf size={22} />
    View Hackathon PPT
  </a>
</div>

     {/* Summary */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem", textAlign: "center" }}>
    Summary & Experience
  </h2>
  <p style={{ color: "#E0E0E0", lineHeight: "1.8", fontSize: "1rem", marginBottom: "1rem" }}>
    Participating in the <strong>Hackathon</strong> gave me an experience very similar to the 
    <strong> Smart India Hackathon (SIH)</strong>. It was an intense yet exciting challenge where our team 
    worked passionately to design, develop, and deploy a complete full-stack project within a tight deadline.
    From brainstorming innovative ideas to implementing functional modules, we learned to turn challenges into solutions.
  </p>
  <p style={{ color: "#E0E0E0", lineHeight: "1.8", fontSize: "1rem", marginBottom: "1rem" }}>
    Throughout this journey, I improved my ability to write clean, efficient, and scalable code. 
    Collaborating with teammates taught me the importance of communication, version control, and proper 
    project planning. We divided our work logically—frontend, backend, and design—and continuously integrated 
    our progress using Git and GitHub.
  </p>
  <p style={{ color: "#E0E0E0", lineHeight: "1.8", fontSize: "1rem", marginBottom: "1rem" }}>
    The hackathon also provided real-world exposure to problem-solving—understanding a problem statement, 
    defining a user-focused solution, and pitching it effectively to evaluators. This experience 
    boosted my <strong>confidence in handling SIH-like environments</strong>, where creativity, technical depth, 
    and teamwork come together to build impactful digital solutions.
  </p>
  <p style={{ color: "#E0E0E0", lineHeight: "1.8", fontSize: "1rem" }}>
    Overall, CreativeX strengthened my technical foundation in <strong>React.js, Node.js, and MongoDB</strong>, 
    and refined my mindset as a problem solver. It helped me realize that innovation thrives under 
    collaboration, time management, and the willingness to learn continuously.
  </p>
</div>

    </section>
  );
};

// --- Styles ---
const tableHeader = { padding: "0.8rem", textAlign: "left", fontWeight: "bold" };
const tableCell = { padding: "0.8rem", borderBottom: "1px solid #333" };
const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5rem",
  padding: "0.6rem 1.2rem",
  background: "#FF3B3B",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "600",
  textDecoration: "none",
  transition: "transform 0.2s, box-shadow 0.2s",
};

export default CreativeXPage;
