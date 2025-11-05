import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode } from "react-icons/fa";
import { SiPhp, SiMysql, SiMongodb, SiPostgresql } from "react-icons/si";
import { Link } from "react-router-dom";

import internshipImg from "../assets/sss.png";
import hackathonImg from "../assets/creativex.jpg";
import fatherWebsiteImg from "../assets/logoshreepati.png"; // ← Father’s website image

const blogPosts = [
  {
    title: "Full Stack Development Internship",
    company: "Software Services & Solution",
    month: "March",
    year: 2025,
    description:
      "Got an internship at Internshipwala and helped build a project, gaining a strong foundation in PHP, MySQL, and JavaScript.",
    img: internshipImg,
    tech: [
      { icon: <FaHtml5 />, color: "#E34F26" },
      { icon: <FaCss3Alt />, color: "#264DE4" },
      { icon: <FaJsSquare />, color: "#F7DF1E" },
      { icon: <SiPhp />, color: "#8892BE" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "/internship",
  },
  {
    title: "Creative-X Hackathon",
    company: "Smart India Hackathon",
    month: "September",
    year: 2025,
    description:
      "Enhanced full-stack skills by developing a complete project using React, Node.js, MongoDB & MySQL, and won the internal hackathon Creative-X.",
    img: hackathonImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaNode />, color: "#3C873A" },
      { icon: <SiMongodb />, color: "#47A248" },
      { icon: <SiMysql />, color: "#00758F" },
    ],
    link: "/creativex",
  },
  {
    title: "Building Shreepati Educational Services Website",
    company: "Personal Project",
    month: "November",
    year: 2025,
    description:
      "Developed a complete educational consultancy website using React, Vite, and Tailwind CSS. Designed all pages, made it responsive, and deployed it on Vercel.",
    img: fatherWebsiteImg,
    tech: [
      { icon: <FaReact />, color: "#61DBFB" },
      { icon: <FaNode />, color: "#3C873A" },
      { icon: <SiPostgresql />, color: "#0075BF" },
    ],
    link: "/seswebsite",
  },
];

const Blog = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      style={{
        background: "#1E1E1E",
        color: "#E0E0E0",
        padding: "4rem 2rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2.2rem",
          color: "#FF3B3B",
          fontFamily: "'Orbitron', sans-serif",
          marginBottom: "3rem",
        }}
      >
        Blogs & Experiences
      </h2>

      <div className="blog-grid">
        {blogPosts.map((post, idx) => (
          <div key={idx} className={`blog-card ${animate ? "fade-in" : ""}`}>
            <div className="blog-img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p className="company">
                {post.company} — {post.month} {post.year}
              </p>
              <p className="desc">{post.description}</p>

              <div className="tech-icons">
                {post.tech.map((t, i) => (
                  <div key={i} className="tech-icon" style={{ color: t.color }}>
                    {t.icon}
                  </div>
                ))}
              </div>

              <Link to={post.link} style={{ color: "#FF3B3B", fontWeight: 600 }}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .blog-card {
          background: #2b2b2b;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 6px 15px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: row;
          height: 220px;
        }

        .blog-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 30px rgba(255,59,59,0.5);
        }

        .blog-img {
          width: 40%;
          height: 100%;
          overflow: hidden;
        }

        .blog-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-content {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 60%;
        }

        .blog-content h3 {
          color: #FF3B3B;
          margin-bottom: 0.3rem;
          font-size: 1.4rem;
        }

        .company {
          font-weight: 600;
          color: #ccc;
          font-size: 0.9rem;
        }

        .desc {
          color: #ddd;
          font-size: 0.85rem;
          margin-bottom: 0.5rem;
        }

        /* 🔥 Bigger + Hoverable Icons */
        .tech-icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
        }

        .tech-icon {
          font-size: 1.7rem;
          transition: transform 0.3s ease, text-shadow 0.3s ease;
        }

        .tech-icon:hover {
          transform: scale(1.3);
          text-shadow: 0 0 12px currentColor, 0 0 20px currentColor;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .blog-card {
            flex-direction: column;
            height: auto;
          }
          .blog-img {
            width: 100%;
            height: 220px;
          }
          .blog-content {
            width: 100%;
            padding: 0.8rem;
          }
          .tech-icon {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
