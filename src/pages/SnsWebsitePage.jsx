
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

import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import websiteImg from "../assets/Style.png";
import homepageImg from "../assets/parlour.png";
import aboutImg from "../assets/parlour1.png";
import serviceImg from "../assets/parlour2.png";
import bookingImg from "../assets/parlour3.png";
import contactImg from "../assets/parlour5.png";
import billingImg from "../assets/parlour4.png";
import veiwImg from "../assets/parlour6.png";
import invoiceImg from "../assets/parlour7.png";
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
  { img: homepageImg, title: "Home Page", desc: "Landing section introducing the parlour with photos and phone numbers." },
  { img: aboutImg, title: "About Page", desc: "Explains the parlours goals, experts introduction & the owner." },
  { img: serviceImg, title: "Services Page", desc: "Displays available services regarding the parlour." },
  { img: bookingImg, title: "Booking Page", desc: "Booking page is done by whatsaap integration using api " },
  { img: contactImg, title: "Contact Page", desc: "Contact page having address & phone numbers to contact and has map to locate the parlour" },
  { img: billingImg, title: "Billing Page", desc: "Billing page has inputs having name, phone numbers & address and what the customer has done in the parlour with the services listed with the headings" },
  { img: veiwImg, title: "Veiw Bills Page", desc: "Client can veiw bills accoroading to their date time and id's of invoice " },
  { img: invoiceImg, title: "Invoice Page", desc: "Invoice page having all the required inputs of the customer name,phone number and the services which he/she opted for in the parlour." },
   
];

const SnsWebsitePage = () => {
   // ---------- CLOUDINARY VIDEO CONFIG ----------
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dqmkivr5i",
    },
  });

  const snsVideo = cld
    .video("webiste-demo_vayndd") // <-- replace with your Cloudinary file id
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
            width: "310px",
            height: "280px",
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
          Style N Shine Website & Billing System
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "#ccc",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          A professional Parlour website built for{" "}
          <strong>Style N Shine</strong>, and made a billing system for the client, it was my first client project , made with the techonological stack having javascript, Php & MySQL with frontend skill set having Html and Css.
        </p>
      </div>

      {/* Project Overview */}
      <div style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
        <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>
          Project Overview
        </h2>
        <p style={{ lineHeight: "1.8", marginBottom: "1rem" }}>
          This project was a personal milestone creating a professional
          Parlour website for the client business. It represents both a
          technical learning experience and a meaningful contribution to his
          parlour business.
        </p>
        <p style={{ lineHeight: "1.8" }}>
          The goal was to design a responsive and dynamic platform where
         visitors can book their slots efficiently and can see the services accoroading to their intrest, the billing system has whatsaap integration which sends the bill accoroading to their whatsaap number respectively and has function to save pdf and print the bill for the chnages as directed by the customer or client side
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
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
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
          <FaHtml5 style={{   }} /> HTML
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Structure & page layout
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <FaCss3Alt style={{   }} /> CSS
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Styling & responsiveness
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <FaJs style={{   }} /> JavaScript
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Dynamic interactions & UI behavior
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <FaPhp style={{  }} /> PHP
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Backend logic & billing system
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          <FaDatabase style={{   }} /> MySQL
        </td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Data storage & billing records
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
    Day-Wise Website Timeline
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
          Website Development
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
          About & Services Page Development
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
          Partners & Contact Page Completion
        </td>
        
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 6</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Content Polishing & SEO Improvements
        </td>
      
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 7</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Final Review & Deployment on Vercel
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
    Day-Wise Billing System Timeline
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
          Billing System Development
        </th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 1</td>
       
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Database Design & Structure Planning
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 2</td>
       
        <td style={{ padding: "1rem", textAlign: "center" }}>
          PHP Project Setup & Configurations
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 3</td>
       
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Billing Form UI & Input Handling
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 4</td>
      
        <td style={{ padding: "1rem", textAlign: "center" }}>
          CRUD Operations & DB Integration
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 5</td>
       
        <td style={{ padding: "1rem", textAlign: "center" }}>
          WhatsApp Bill Sharing Integration
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 6</td>
        <td style={{ padding: "1rem", textAlign: "center" }}>
          PDF Export & Print Functionality
        </td>
      </tr>

      <tr>
        <td style={{ padding: "1rem", textAlign: "center" }}>Day 7</td>
       
        <td style={{ padding: "1rem", textAlign: "center" }}>
          Testing, Debugging & Client Review
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
    Hosted on <strong>Infinity Free</strong> with continuous deployment from
    GitHub for faster updates and scalability.
  </p>

  {/* Responsive 2x2 Social Links Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 per row
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      margin: "0 auto",
    }}
  >
    {[
      {
        href: "https://github.com/Vibhav11Krishna/style-n-shine-website",
        icon: <FaGithub />,
        label: "GitHub",
      },
      {
        href: "https://stylenshinestudio.com/",
        icon: <FaGlobe />,
        label: "Website",
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

  {/* Deployment */}
<div
  style={{
    maxWidth: "900px",
    margin: "0 auto 3rem",
    textAlign: "center",
  }}
>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Deployment of Billing System</h2>
  <p style={{ lineHeight: "1.8", marginBottom: "1.5rem", color: "#ccc" }}>
    Hosted on <strong>Infinity Free</strong> with continuous deployment from
    GitHub for faster updates and scalability.
  </p>

  {/* Responsive 2x2 Social Links Grid */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // 2 per row
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
      maxWidth: "500px",
      margin: "0 auto",
    }}
  >
    {[
      {
        href: "https://github.com/Vibhav11Krishna/StyleNShine-Billing",
        icon: <FaGithub />,
        label: "GitHub",
      },
      {
        href: "https://billingapp.great-site.net/",
        icon: <FaGlobe />,
        label: "Website",
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
          Developing this Parlour website & Billing System was a complete end-to-end
          experience that combined design thinking, full-stack development, and
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

export default SnsWebsitePage;
