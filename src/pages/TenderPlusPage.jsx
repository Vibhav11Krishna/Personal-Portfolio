import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiPhp, SiMysql, SiFigma } from "react-icons/si";

import companyImg from "../assets/sss.png"
import homeImg from "../assets/HRManagement.png";
import registrationImg from "../assets/Register.png";
import adminDashImg from "../assets/Admin_Dashboard.png";
import empDashImg from "../assets/Employee_Dashboard.png";
import dbImg from "../assets/Database.png";
import mentorImg from "../assets/mentor.jpg";
import ownerImg from "../assets/owner.jpg";
import certificateImg from "../assets/sssinternship.jpg";

import insight1 from "../assets/insight1.jpg";
import insight2 from "../assets/insight2.jpg";
import insight3 from "../assets/insight3.jpg";
import { AiOutlineFilePdf } from "react-icons/ai";
import reportPDF from "../assets/Report.pdf";



const projectOverview = [
  { img: homeImg, title: "Home Page", desc: "Landing page with navigation, welcome section, and quick links." },
  { img: registrationImg, title: "Registration Page", desc: "Employee registration form with validation and database integration." },
  { img: adminDashImg, title: "Admin Dashboard", desc: "Admin can manage employees, view reports, and handle salaries." },
  { img: empDashImg, title: "Employee Dashboard", desc: "Employee can view tasks, submit reports, and track performance." },
 
];

const techStack = [
  { category: "Frontend", name: "HTML", icon: <FaHtml5 /> },
  { category: "Frontend", name: "CSS", icon: <FaCss3Alt /> },
  { category: "Frontend", name: "JavaScript", icon: <FaJsSquare /> },
  { category: "Backend", name: "PHP", icon: <SiPhp /> },
  { category: "Database", name: "MySQL", icon: <SiMysql /> },
  { category: "Design", name: "Figma", icon: <SiFigma /> },
  { category: "Hosting", name: "InfinityFree", icon: <FaExternalLinkAlt /> },
];

const weeklyRoutine = [
  { week: "Week 1", tasks: "Orientation, setup, learning HTML & CSS." },
  { week: "Week 2", tasks: "Home page & registration page development." },
  { week: "Week 3", tasks: "Backend integration with PHP & MySQL." },
  { week: "Week 4", tasks: "Admin dashboard development & employee dashboard." },
  { week: "Week 5", tasks: "Testing, bug fixing, responsiveness, deployment." },
  { week: "Week 6", tasks: "Documentation, certificate, project completion." },
];

const TenderPlusPage = () => {
  return (
    <section style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "4rem 2rem" }}>
      {/* Title */}
      <h1 style={{ textAlign: "center", fontSize: "3rem", color: "#FF3B3B", fontFamily: "'Orbitron', sans-serif'", marginBottom: "3rem",  }}>
        Internship
      </h1>


{/* About Company */}
<div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }} className="about-company">
  <img 
    src={companyImg} 
    alt="Owner" 
    style={{ width: "200px", height: "290px",  objectFit: "cover", borderRadius: "10px", marginBottom: "1rem" }} 
  />
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>About the Company</h2>
  
  <div className="company-info-grid">
    <p>
      <strong>Software Services & Solution</strong> is a leading full-stack development company providing secure, scalable, and user-centric web applications. During my internship, I closely observed project planning, database design, and client requirement analysis.
    </p>
    <p>
      The company fosters a collaborative work environment with modern tools and best practices, giving interns a real-world experience of the software development lifecycle. I learned to handle front-end development, backend logic, database management, and responsive UI designs.
    </p>
    <div className="company-website-box">
      <a href="https://www.ssspatna.com/" target="_blank" rel="noopener noreferrer">
        Visit Company Website
      </a>
    </div>
  </div>

  <style>{`
    .company-info-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: left;
    }

    .company-info-grid p {
      color: #E0E0E0;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .company-website-box {
      margin-top: 1rem;
      text-align: center;
    }

    .company-website-box a {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      background: #FF3B3B;
      color: #fff;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .company-website-box a:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 59, 59, 0.4);
    }

    @media (max-width: 768px) {
      .company-info-grid {
        text-align: center;
      }
    }
  `}</style>
</div>

      {/* Company Insights */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Company Insights</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {[insight1, insight2, insight3].map((img, idx) => (
            <img key={idx} src={img} alt={`Insight ${idx + 1}`} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px", cursor: "pointer", transition: "0.3s" }} className="insight-img" />
          ))}
        </div>
      </div>


<div style={{ margin: "30px" }}>  </div>
 {/* Project Information */}
<div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }} className="project-info">
  <h1 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Project - HR Management System</h1>
  
  <div className="project-info-grid">
    <p>
      The <strong>HR Management System</strong> is a full-stack web application designed to manage employees, attendance, payroll, and reports efficiently. 
      Admins can manage the system, while employees can view their profiles and salary details. The project provides a secure, responsive, and user-friendly experience.
    </p>
    <p>
      During development, I gained experience with front-end design, back-end logic, database integration using MySQL, and responsive UI implementation. 
      The system ensures real-time updates, role-based access, and seamless workflow for HR operations.
    </p>

    <div className="project-features">
      <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>Features</h3>
      <ul style={{ textAlign: "left", color: "#E0E0E0", fontSize: "0.95rem", lineHeight: "1.6" }}>
        <li><strong>Admin Dashboard:</strong> Manage employees, attendance, payroll, generate reports, and monitor HR operations.</li>
        <li><strong>Employee Dashboard:</strong> View profile, attendance, salary details, and notifications.</li>
        <li>Secure login with role-based access.</li>
        <li>Responsive UI for desktop and mobile.</li>
        <li>Database integration using MySQL for employee records.</li>
      </ul>
    </div>

    <div className="project-links">
      <a href="https://github.com/Vibhav11Krishna/HR-Management-System" target="_blank" rel="noopener noreferrer">
        <FaGithub /> View GitHub
      </a>
      <a href="https://hr-management-dashboard.great-site.net" target="_blank" rel="noopener noreferrer">
        <FaExternalLinkAlt /> View Website
      </a>
    </div>
  </div>

  <style>{`
    .project-info-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: left;
    }

    .project-info-grid p {
      color: #E0E0E0;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .project-features ul {
      padding-left: 1rem;
    }

    .project-links {
      margin-top: 1.5rem;
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      flex-wrap: wrap;
    }

    .project-links a {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.6rem 1.2rem;
      background: #FF3B3B;
      color: #fff;
      border-radius: 8px;
      font-weight: 600;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .project-links a:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(255, 59, 59, 0.4);
    }

    @media (max-width: 768px) {
      .project-info-grid {
        text-align: center;
      }

      .project-features ul {
        padding-left: 0;
      }
    }
  `}</style>
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
      const isLastFullWidth = idx === projectOverview.length - 1 && projectOverview.length % 2 !== 0;
      return (
        <div
          key={idx}
          style={{
            background: "#2b2b2b",
            padding: "0.8rem",
            borderRadius: "12px",
            cursor: "pointer",
            transition: "transform 0.3s",
            gridColumn: isLastFullWidth ? "span 2" : "span 1",
            height: "auto",
          }}
          className="project-card"
        >
          <img
            src={proj.img}
            alt={proj.title}
            style={{
              width: "100%",
              height: "220px", // increased height
              objectFit: "cover",
              borderRadius: "12px",
              marginBottom: "0.5rem",
            }}
          />
          <h3 style={{ color: "#FF3B3B", fontSize: "1.2rem" }}>{proj.title}</h3>
          <p style={{ fontSize: "0.9rem", color: "#ccc", marginBottom: "0.5rem" }}>{proj.desc}</p>
        </div>
      );
    })}
  </div>
</div>

<style>{`
  @media (max-width: 900px) {
    .project-grid {
      grid-template-columns: 1fr !important; /* stack items on mobile */
    }
    .project-card {
      grid-column: span 1 !important; /* reset full width logic on mobile */
    }
  }
`}</style>



      {/* Technology Stack */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Technology Stack</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #FF3B3B", padding: "0.8rem" }}>Category</th>
              <th style={{ borderBottom: "2px solid #FF3B3B", padding: "0.8rem" }}>Technology</th>
              <th style={{ borderBottom: "2px solid #FF3B3B", padding: "0.8rem" }}>Icon</th>
            </tr>
          </thead>
          <tbody>
            {techStack.map((tech, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? "#2b2b2b" : "#262626", transition: "0.3s" }}>
                <td style={{ padding: "0.8rem" }}>{tech.category}</td>
                <td style={{ padding: "0.8rem" }}>{tech.name}</td>
                <td style={{ padding: "0.8rem", fontSize: "1.2rem" }}>{tech.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     

<style>{`
  .link-box:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 8px 24px rgba(255,59,59,0.5);
  }
`}</style>


      {/* Weekly Routine */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Weekly Internship Routine</h2>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "2px solid #FF3B3B", padding: "0.8rem", textAlign: "left" }}>Week</th>
              <th style={{ borderBottom: "2px solid #FF3B3B", padding: "0.8rem", textAlign: "left" }}>Tasks & Learning</th>
            </tr>
          </thead>
          <tbody>
            {weeklyRoutine.map((week, idx) => (
              <tr key={idx} style={{ background: idx % 2 === 0 ? "#2b2b2b" : "#262626" }}>
                <td style={{ padding: "0.8rem" }}>{week.week}</td>
                <td style={{ padding: "0.8rem" }}>{week.tasks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mentor & Owner */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 3rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
        {[{img: mentorImg, name: "Mr.Danish ", role: "Mentor"}, {img: ownerImg, name: "Mr.Aamir Junaid Ahmed", role: "CEO"}].map((person, idx) => (
          <div key={idx} style={{ width: "300px", textAlign: "center", cursor: "pointer" }} className="person-card">
            <img src={person.img} alt={person.name} style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px", marginBottom: "0.5rem", transition: "0.3s" }} />
            <p>{person.role}: {person.name}</p>
          </div>
        ))}
      </div>

      {/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Certificate</h2>
  <img
    src={certificateImg}
    alt="Certificate"
    style={{
      width: "130%",
      maxWidth: "600px",
      height: "450px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>

{/* Internship Report Button */}
<div style={{ textAlign: "center", marginBottom: "4rem" }}>
  <a
    href={reportPDF}
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
    View Internship Report
  </a>
</div>

<style>{`
  @media (max-width: 768px) {
    .certificate-img {
      width: 100% !important; /* fit mobile width */
      max-width: 100% !important;
      height: auto !important; /* maintain aspect ratio */
    }
  }
`}</style>


      {/* Experience & Learnings */}
      <div style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>My Experience & Learnings</h2>
        <p>I gained hands-on experience building a full-stack HR Management Dashboard. Learned to integrate frontend with backend, handle databases, and work collaboratively in a professional environment. Improved coding practices, problem-solving skills, and real-world project management. This internship strengthened my knowledge in HTML, CSS, JavaScript, PHP, MySQL, and responsive design, as well as deployment using free hosting.</p>
        <p>Working under the guidance of my mentor and owner helped me understand project lifecycle, client requirements, and teamwork dynamics. I also explored debugging, optimization, and UI/UX improvements throughout the project.</p>
      </div>

      <style>{`
        .project-card:hover { transform: scale(1.05); }
        .insight-img:hover { transform: scale(1.05); }
        .person-card img:hover { transform: scale(1.05); }
        table tbody tr:hover { background: #FF3B3B33; }
      `}</style>
    </section>
  );
};

export default TenderPlusPage;
