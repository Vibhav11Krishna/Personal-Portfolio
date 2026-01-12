
import React from "react";
import {
  FaReact,
  FaGithub,
  FaNode,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaLaptopCode,
  FaServer,
  FaPaintBrush,
  FaCloud,
  FaChartLine,
  FaUserTie,
  FaMobileAlt,
  FaGlobe,
  FaUsers,
} from "react-icons/fa";      
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaPalette
} from "react-icons/fa";
import { SiExpo } from "react-icons/si";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import websiteImg from "../assets/tracker.png";
import homepageImg from "../assets/tracker1.jpg";
import aboutImg from "../assets/tracker2.jpg";
import serviceImg from "../assets/tracker3.jpg";
import bookingImg from "../assets/tracker4.jpg";
import certificate from "../assets/mobile.png";

// Cloudinary Imports
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import { format, quality } from "@cloudinary/url-gen/actions/delivery";
import { fill } from "@cloudinary/url-gen/actions/resize";



// --- Styles ---
const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#2b2b2b",
  borderRadius: "10px",
};
const tableHeader = { padding: "0.8rem", textAlign: "left", fontWeight: "bold" };
const tableCell = { padding: "0.8rem", borderBottom: "1px solid #333" };

const linkStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  padding: "0.6rem 1.2rem",
  background: "#FF3B3B",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "600",
  textDecoration: "none",
  transition: "all 0.3s ease",
  fontSize: "1rem",
};

// --- Glow Function ---
const handleGlow = (e, isHover) => {
  e.currentTarget.style.transform = isHover ? "scale(1.05)" : "scale(1)";
  e.currentTarget.style.boxShadow = isHover ? "0 0 15px #FF3B3B" : "none";
};

// --- Project Overview Data ---
const projectOverview = [
  { img: homepageImg, title: "Home Page", desc: "Landing section where there are 4 icons to show expenses in their way." },
  { img: aboutImg, title: "Welcome Page", desc: "Welcoming page with effects of dollar icons to showcase." },
  { img: serviceImg, title: "Signup Page", desc: "Sign up page where visitors can create his/her account by adding username and password." },
  { img: bookingImg, title: "Login Page", desc: "Login page where he/she can login to his/her account to see the expenses and can track their own expenses " },
  
  
   
];

const ExpenseTrackerPage = () => {
   // ---------- CLOUDINARY VIDEO CONFIG ----------
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dqmkivr5i",
    },
  });

  const snsVideo = cld
    .video("WhatsApp_Video_2025-12-30_at_15.11.17_a060da7b_ujadfb") // <-- replace with your Cloudinary file id
    .delivery(format("auto"))
    .delivery(quality("auto"))
    .resize(fill().width(300).height(700));
  return (
    <section
      style={{
        background: "#1E1E1E",
        color: "#E0E0E0",
        padding: "4rem 2rem",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <img
          src={websiteImg}
          alt="Shreepati Educational Services"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px",
            marginBottom: "1rem",
          }}
        />
        <h1
          style={{
            color: "#FF3B3B",
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
        Expense Tracker App
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          An app which is used to track the expenses and made by using{" "}
          <strong>React Native Expo</strong>, and this app build is my first foot to the app developement journey, it emphasizes many of things in this journey to make frontend to backend.
        </p>
      </div>

      {/* Project Overview */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Project Overview
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          This project was a personal milestone creating a App
          named Expense Tracker  for the uplifement of my app developement skill. It represents both a
          technical learning experience and a meaningful contribution to the 
          skills of my app developement.
        </p>
        <p style={{ lineHeight: "1.8" }}>
          The goal was to design a responsive and dynamic platform where
         visitors can track their expenses efficiently and can see the expenses accoroading to their id's no. & prices, there are 3 options to veiw and add the expenses and monthly the visitor can see.
        </p>
      </div>

      {/* Website Pages */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Website & Billing System Pages
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projectOverview.map((page, idx) => (
            <div
              key={idx}
              style={{
                background: "#2b2b2b",
                borderRadius: "12px",
                padding: "1rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px) scale(1.02)")
              }
              onMouseOut={(e) => (e.currentTarget.style.transform = "none")}
            >
              <img
                src={page.img}
                alt={page.title}
                style={{
                  width: "100%",
                  height: "550px",
                  objectFit: "cover",
                  borderRadius: "8  px",
                  marginBottom: "0.8rem",
                }}
              />
              <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>
                {page.title}
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#ccc" }}>{page.desc}</p>
            </div>
          ))}
        </div>
      </div>

       {/* ---------- PROJECT VIDEO PREVIEW ---------- */}
<div
  style={{
    maxWidth: "1400px",
    margin: "0 auto 3rem",
    padding: "0 10px",
  }}
>
  <h2
    style={{
      color: "#ff4b4b",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "2rem",
      fontWeight: "700",
    }}
  >
    Project Walkthrough Video Demo
  </h2>

  <p
    style={{
      textAlign: "center",
      color: "#cfcfcf",
      marginBottom: "1.8rem",
      fontSize: ".95rem",
    }}
  >
    High-resolution vertical project showcase
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "500px",   // full & big
        borderRadius: "22px",
        overflow: "hidden",
        boxShadow: "0 18px 50px rgba(0,0,0,.55)",
        border: "1px solid rgba(255,255,255,.12)",
        background: "#000",
      }}
    >
      <AdvancedVideo
        cldVid={snsVideo}
        controls
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: "8 / 16",  // Instagram Portrait
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  </div>
</div>

       

     <div style={{ maxWidth: "850px", margin: "0 auto 3rem" }}>
  <h2
    style={{
      color: "#FF3B3B",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "1.9rem",
      fontWeight: "700",
      letterSpacing: "0.5px",
    }}
  >
    Technological Stack
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#2b2b2b",
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <thead>
      <tr style={{ background: "#FF3B3B", color: "#fff" }}>
        <th style={{ padding: "1rem", textAlign: "center", fontWeight: "700" }}>
          Technology
        </th>
        <th style={{ padding: "1rem", textAlign: "center", fontWeight: "700" }}>
          Purpose
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <SiExpo  style={{   }} /> React Native Expo
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Structure & page layout
        </td>
      </tr>
      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <FaPalette style={{ }} /> Canva
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Graphics & branding design
        </td>
      </tr>
    </tbody>
  </table>
</div>



      

    <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
  <h2
    style={{
      color: "#FF3B3B",
      textAlign: "center",
      marginBottom: "1rem",
      fontSize: "1.9rem",
      fontWeight: "700",
    }}
  >
    Day-Wise App Timeline
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      background: "#2b2b2b",
      borderRadius: "12px",
      overflow: "hidden",
    }}
  >
    <thead>
      <tr style={{ background: "#FF3B3B", color: "#fff" }}>
        <th style={{ padding: "1rem", textAlign: "center" }}>Day</th>
        <th style={{ padding: "1rem", textAlign: "center" }}>
        App Development
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 1</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Requirement Analysis & Project Planning
        </td>
        
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 2</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Homepage Layout & Content Wireframing
        </td>
        
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 3</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Home & Welcome Page Development
        </td>
        
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 4</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Responsive UI & Mobile Optimization
        </td>
       
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 5</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Login & Signup Page Completion
        </td>
        
      </tr>

       <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 6</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Add , Summary & tracker page completion
        </td>
        
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 7</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Content Polishing
        </td>
      
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 8</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Final Review & Deployment on Expo
        </td>
        
      </tr>
    </tbody>
  </table>
</div>




      {/* Deployment */}
<div
  style={{
    maxWidth: "900px",
    margin: "0 auto 3rem",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Deployment of Website</h2>
  <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#ccc" }}>
    Hosted on <strong>Expo Builds</strong> with continuous deployment from
    GitHub for faster updates and scalability.
  </p>

  {/* Responsive 2x2 Social Links Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)", // 2 per row
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      margin: "0 auto",
    }}
  >
    {[
      
      {
        href: "https://expo.dev/accounts/pulkitkrishna11/projects/ExpenseTracker/builds/ea6a56cd-2721-4b9e-9328-ae2ddc098f1a",
        icon: <FaGlobe />,
        label: "Link",
      },
    ].map((link, idx) => (
      <a
        key={idx}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          ...linkStyle,
          width: "100%",
          justifyContent: "center",
          fontSize: "0.95rem",
          textAlign: "center",
        }}
        onMouseEnter={(e) => handleGlow(e, true)}
        onMouseLeave={(e) => handleGlow(e, false)}
      >
        {link.icon} {link.label}
      </a>
    ))}
  </div>
</div>

        {/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Certificate</h2>
  <img
    src={certificate}
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


      {/* Summary */}
      <div style={{ maxWidth: "900px", margin: "0 auto 4rem" }}>
        <h2
          style={{ color: "#FF3B3B", marginBottom: "1rem", textAlign: "center" }}
        >
          Summary & Key Learnings
        </h2>
        <p
          style={{
            lineHeight: "1.8",
            color: "#E0E0E0",
            marginBottom: "1rem",
          }}
        >
          Developing this App  was a complete end-to-end
          experience that combined design thinking, full-stack App development, and
          deployment.
        </p>
        <ul
          style={{
            lineHeight: "1.8",
            color: "#ccc",
            listStyle: "none",
            padding: 0,
          }}
        >
          <li>⚡ Learned how to structure a full stack project efficiently.</li>
          <li>⚡ Improved backend API setup and database design skills.</li>
          <li>⚡ Gained experience with responsive UI and accessibility.</li>
          <li>⚡ Understood client communication and project deployment.</li>
          <li>⚡ Learned to manage version control and collaboration via GitHub.</li>
        </ul>
      </div>
    </section>
  );
};

export default ExpenseTrackerPage;
