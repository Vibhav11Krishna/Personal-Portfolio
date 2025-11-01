import React, { useRef, useEffect, useState } from "react";
import axios from "axios";

const Contact = () => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Base API URL (from .env)
  const API_URL = "https://personal-portfolio-backend-il4k.onrender.com";



  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle submit (send data to backend)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/contact`, formData);
      alert("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section ref={sectionRef} className="contact-section">
      <div className={`contact-form-wrapper ${visible ? "visible" : ""}`}>
        <h2>Let's Connect</h2>
        <p className="contact-intro">
          Have an idea, project, or collaboration in mind?  
          Reach out via the form below.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-details">
          <p><strong>Email:</strong> pulkitkrishna2005@gmail.com</p>
          <p><strong>Phone:</strong> +91 7209749002</p>
        </div>
      </div>

      <style>{`
        .contact-section {
          min-height: 100vh;
          width: 100%;
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 100%);
          color: #E0E0E0;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .contact-form-wrapper {
          width: 80%;
          max-width: 900px;
          padding: 4rem 3rem;
          background: rgba(255,255,255,0.05);
          border-radius: 25px;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 35px rgba(255,59,59,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          text-align: center;
          opacity: 0;
          transform: translateY(60px);
          transition: all 0.8s ease;
        }
        .contact-form-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-form-wrapper h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 2.8rem;
          color: #FF3B3B;
          text-shadow: 0 0 10px rgba(255,59,59,0.6);
        }

        .contact-intro {
          font-size: 1rem;
          color: #ccc;
          max-width: 700px;
          line-height: 1.6;
        }

        form {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        input, textarea {
          padding: 1.2rem;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #FF3B3B;
          box-shadow: 0 0 10px rgba(255,59,59,0.3);
        }

        button {
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 15px;
          font-weight: 600;
          background: linear-gradient(90deg, #FF3B3B, #ff7b7b);
          color: #fff;
          border: none;
          transition: all 0.4s ease;
          cursor: pointer;
          letter-spacing: 0.5px;
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(255,59,59,0.6);
        }

        .contact-details {
          margin-top: 1.5rem;
          font-size: 1rem;
          color: #ccc;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 3rem 1rem;
          }
          .contact-form-wrapper {
            width: 95%;
            padding: 3rem 2rem;
          }
          .contact-form-wrapper h2 { font-size: 2.2rem; }
          .contact-intro { font-size: 0.95rem; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
