import React from "react";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const contacts = [
    {
      title: "Email Me",
      icon: <FaEnvelope />,
      info: "pulkitkrishna2005@gmail.com",
      link: "mailto:pulkitkrishna2005@gmail.com",
      bg: "linear-gradient(135deg, #FF3B3B, #FF7B7B)",
    },
    {
      title: "Call Me",
      icon: <FaPhone />,
      info: "+91 7209749002",
      link: "tel:+917209749002",
      bg: "linear-gradient(135deg, #FF7B59, #FFA17F)",
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      info: "Connect on LinkedIn",
      link: "https://www.linkedin.com/in/pulkit-krishna-4152802b3",
      bg: "linear-gradient(135deg, #0A66C2, #1E90FF)",
    },
    {
      title: "GitHub",
      icon: <FaGithub />,
      info: "View My Projects",
      link: "https://github.com/Vibhav11Krishna",
      bg: "linear-gradient(135deg, #333, #555)",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      info: "@pulkitkrishna",
      link: "https://instagram.com/KrishnaPulkit11",
      bg: "linear-gradient(135deg, #E4405F, #F77737)",
    },
    {
      title: "WhatsApp",
      icon: <FaWhatsapp />,
      info: "Chat on WhatsApp",
      link: "https://wa.me/917209749002",
      bg: "linear-gradient(135deg, #25D366, #128C7E)",
    },
  ];

  return (
    <section className="contact-section">
      <div className="heading-wrapper">
        <h2>Let's Connect</h2>
        <p className="contact-intro">
          You can reach out to me through the following platforms:
        </p>
      </div>

      <div className="outer-box">
        <div className="cards-wrapper">
          {contacts.map((c, idx) => (
            <a
              key={idx}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              style={{ 
                background: c.bg, 
                animationDelay: `${idx * 0.15}s` 
              }}
            >
              <div className="icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.info}</p>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .contact-section {
          min-height: 100vh;
          padding: 6rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0c0c0c, #1a1a1a);
          color: #fff;
        }

        .heading-wrapper {
          text-align: center;
          margin-bottom: 3rem;
        }

        .contact-section h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          color: #FF3B3B;
          margin-bottom: 1rem;
          text-shadow: 0 0 12px rgba(255,59,59,0.6);
        }

        .contact-intro {
          color: #ccc;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .outer-box {
          background: #2b2b2b;
          padding: 3rem;
          border-radius: 20px;
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 1000px;
        }

        .cards-wrapper {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          width: 100%;
        }

        .contact-card {
          padding: 2rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          color: #fff;
          text-decoration: none;
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          opacity: 0;
          transform: translateY(60px);
          animation: slideUp 0.6s forwards ease-out;
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-card:hover {
          transform: translateY(0) scale(1.05);
          box-shadow: 0 15px 35px rgba(0,0,0,0.5);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .contact-card .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease-in-out;
        }

        .contact-card:hover .icon {
          transform: scale(1.1);
        }

        .contact-card h3 {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
        }

        .contact-card p {
          font-size: 1rem;
          color: #eee;
        }

        @media(max-width:1024px){
          .cards-wrapper { grid-template-columns: repeat(2, 1fr); }
        }

        @media(max-width:768px){
          .cards-wrapper { grid-template-columns: 1fr; }
          .outer-box { padding: 2rem; }
          .contact-section { padding: 4rem 1rem; }
          .heading-wrapper h2,
          .heading-wrapper p {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
