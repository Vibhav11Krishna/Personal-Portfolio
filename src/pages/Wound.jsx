import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiPhp, SiMysql, SiFigma } from "react-icons/si";
import { SiPython, SiNumpy, SiOpencv, SiPandas, SiScikitlearn, SiLinux, SiChartdotjs } from "react-icons/si";

import Wound1Img from "../assets/Wound1.jpg";
import Wound2Img from "../assets/Wound2.jpg";
import Wound3Img from "../assets/Wound3.jpg";
import Wound4Img from "../assets/Wound4.jpg";
import UNetImg from "../assets/UnetModel.png";
import ResNetImg from "../assets/ResNet.png";
import Model1Img from "../assets/Model1.jpg";
import Model2Img from "../assets/Model2.jpg";
import certificateImg from "../assets/Nit-Certificate.jpeg";
import NIT from "../assets/NIT.png";
import { AiOutlineFilePdf } from "react-icons/ai";
import reportPDF from "../assets/Report.pdf";
import NitCertificatePdf from "../Certificates/Nit-Certificate.pdf";
import MedicalReportPdf from "../assets/Medical-Report.pdf";
import PptFile from "../assets/Ppt-Report.pdf";



const projectOverview = [
  { img: Wound1Img, title: "Training V/s Testing Graph", desc: "Difference Of the value in testing and training datasets" },
  { img: Wound2Img, title: "Confusion Matrix Graph", desc: "Graph Shows Predicting values to different Tumor in brain" },
  { img: Wound3Img, title: "Analytical Graph", desc: "Graph Shows analytically to distinguish between tumors" },
  { img: Wound4Img, title: "Precison / Recall Graph", desc: "Graph shows Values of precision and recall of tumor identification" },
 
];

const techStack = [
  { category: "Libraries", name: "Python", icon: <SiPython /> },
  { category: "Data Handling", name: "Numpy", icon: <SiNumpy /> },
  { category: "Image Processing", name: "OpenCV", icon: <SiOpencv /> },
  { category: "Data Management", name: "Pandas", icon: <SiPandas /> },
  { category: "Ml Modelling", name: "Scikit-Learn", icon: <SiScikitlearn /> },
  { category: "File Management", name: "OS", icon: <SiLinux /> },
  { category: "Visualization", name: "Matplotlib", icon: <SiChartdotjs /> },
];

const weeklyRoutine = [
  { week: "Week 1", tasks: "Data Acquisition and Pre-processing." },
  { week: "Week 2", tasks: "Noise Reduction and Feature Engineering" },
  { week: "Week 3", tasks: "Data Mapping and Partitioning" },
  { week: "Week 4", tasks: "Ensemble Model Configuration" },
  { week: "Week 5", tasks: "Performance Evaluation" },
];

const Wound = () => {
  return (
    <section style={{ background: "#1E1E1E", color: "#E0E0E0", padding: "4rem 2rem" }}>
      {/* Title */}
      <h1 style={{ textAlign: "center", fontSize: "3rem", color: "#FF3B3B", fontFamily: "'Orbitron', sans-serif'", marginBottom: "3rem",  }}>
        Departmental Internship
      </h1>


{/* About Company */}
<div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }} className="about-company">
  <img 
    src={NIT} 
    alt="Owner" 
    style={{ width: "200px", height: "200px",  objectFit: "cover", borderRadius: "10px", marginBottom: "1rem" }} 
  />
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>About the Institute</h2>
  
  <div className="company-info-grid">
    <p>
      <strong>National Institute of Technology Patna</strong> is the 18th National Institute of Technology created by the Ministry of Human Resource Development, Government of India, after rechristening the erstwhile Bihar College of Engineering, Patna, on 28.01.2004. NIT Patna traces its humble beginnings back to 1886 with the establishment of the Pleaders’ Survey Training School, which was subsequently upgraded to the Bihar College of Engineering, Patna, in 1924.
    </p>
    <p>
     National Institute of Technology Patna has been declared an Institution of National Importance, as given in the NIT Act, and has been granted fully autonomous status by the MoE (previously MHRD), Government of India. The institute has also been declared a Centre of Excellence for imparting high-level education, training, research, and development in science, engineering, technology, and humanities.
    </p>
    <div className="company-website-box">
      <a href="https://www.nitp.ac.in/" target="_blank" rel="noopener noreferrer">
        Visit Institute Website
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

     


<div style={{ margin: "30px" }}>  </div>
 {/* Project Information */}
<div style={{ maxWidth: "900px", margin: "0 auto 3rem", textAlign: "center" }} className="project-info">
  <h1 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Project - Chronic Wound Analysis Using Deep Learning</h1>
  
  <div className="project-info-grid">
    <p>
      I utilize a deep learning model U-Net (Encoder + Decoder) structure & Rest 50 Net to segment the wounded region. These segmented masks are used to quantitatively analyse the wound area and track healing progress, providing a comprehensive diagnostic tool.
    </p>
    <p>
     Through the development, debugging, and deployment of both traditional deep learning and pipelines, I have acquired a comprehensive set of technical competencies
    </p>

    <div className="project-features">
      <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>Technical Learning Outcome</h3>
      <ul style={{ textAlign: "left", color: "#E0E0E0", fontSize: "0.95rem", lineHeight: "1.6" }}>
        <li>Algorithmic Mapping & Data Partitioning</li>
        <li>Dimensionality, Vector Space, & Pixel-Wise Mechanics </li>
        <li>Ensemble & CNN Architectural Design</li>
        <li>Comprehensive Clinical Evaluation</li>
      </ul>
    </div>

 <div className="project-features">
      <h3 style={{ color: "#FF3B3B", marginBottom: "0.5rem" }}>Methodology</h3>
      <ul style={{ textAlign: "left", color: "#E0E0E0", fontSize: "0.95rem", lineHeight: "1.6" }}>
        <li><strong>Dataset Collection:</strong> The wound image segmentation dataset consists of wound images and their corresponding ground truth masks. The dataset was collected from a publicly available source and used to train and evaluate the deep learning models for wound segmentation. </li>
        <li><strong>Data Pre-processing:</strong> Before training, the dataset was pre-processed to improve model performance. All images and masks were resized to 256 × 256 pixels and normalized to the range of 0–1. Data augmentation techniques were applied to increase the diversity of the training data and improve the model's generalization ability. Finally, the dataset was split into training and testing sets for model training and evaluation. </li>
        <li><strong>U-Net Model:</strong>The U-Net model was implemented for wound image segmentation. The architecture consists of an encoder that extracts image features and a decoder that reconstructs the segmentation mask. Skip connections were used to preserve spatial information and improve segmentation accuracy. The model was trained using the Adam optimizer with a batch size of 1 for 20 epochs. </li>
        <li><strong> ResNet50 Model: </strong>The ResNet50 U-Net model was implemented by replacing the standard U-Net encoder with the ResNet50 backbone. The 13 extracted features were passed to the U-Net decoder to generate the final segmentation mask. The model was trained using the same pre-processing steps, optimizer, batch size, and number of epochs to ensure a fair comparison with the U-Net model. </li>
        <li><strong>Model Evaluation: </strong>The performance of both models was evaluated using training accuracy, validation accuracy, training loss, and validation loss. The predicted segmentation masks were visually compared with the corresponding ground truth masks. The evaluation metrics and segmentation results were used to compare the performance of the U-Net and ResNet50 U-Net models. </li>
      </ul>
    </div>
    <div className="project-links">
      <a href="https://github.com/Vibhav11Krishna/Wound-area-analysis" target="_blank" rel="noopener noreferrer">
        <FaGithub /> View GitHub
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
              height: "400px", // increased height
              objectFit: "cover",
              borderRadius: "2px",
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

 {/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Classification Report For U-Net Model</h2>
  <img
    src={UNetImg}
    alt="Certificate"
    style={{
      width: "100%",
      maxWidth: "750px",
      height: "290px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>

{/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Classification Report For ResNet50 Model</h2>
  <img
    src={ResNetImg}
    alt="Certificate"
    style={{
      width: "100%",
      maxWidth: "750px",
      height: "290px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>

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

      
   {/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Result From U-Net Model</h2>
  <img
    src={Model1Img}
    alt="Certificate"
    style={{
      width: "100%",
      maxWidth: "750px",
      height: "360px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>

{/* Certificate */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Result From ResNet50 Model</h2>
  <img
    src={Model2Img}
    alt="Certificate"
    style={{
      width: "100%",
      maxWidth: "750px",
      height: "320px",
      borderRadius: "12px",
      objectFit: "cover",
    }}
    className="certificate-img"
  />
</div>
     

 {/* Internship Certificate / PDF Preview */}
<div style={{ maxWidth: "900px", margin: "0 auto 4rem", textAlign: "center", padding: "0 1rem" }}>
  <h2 style={{ color: "#FF3B3B", marginBottom: "1rem" }}>Internship Certificate</h2>
  
  <div
    style={{
      background: "#2b2b2b",
      padding: "1rem",
      borderRadius: "12px",
      border: "1px solid #333",
      display: "inline-block",
      width: "100%",
      maxWidth: "500px",
    }}
  >
    <img
      src={certificateImg}
      alt="Internship Certificate Preview"
      style={{
        width: "100%",
        height: "auto",
        maxHeight: "350px",
        objectFit: "contain",
        borderRadius: "8px",
        marginBottom: "1rem",
      }}
    />
    <br />
    <a
      href={NitCertificatePdf}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "0.6rem 1.2rem",
        background: "#FF3B3B",
        color: "#fff",
        fontWeight: "600",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "0.9rem",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      <AiOutlineFilePdf size={20} />
      View Certificate PDF
    </a>
  </div>
</div>

{/* Report Buttons Section */}
<div style={{ textAlign: "center", marginBottom: "4rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
  
  {/* Internship Report Button */}
  <a
    href={MedicalReportPdf}
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
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(255,59,59,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <AiOutlineFilePdf size={22} />
    View Internship Report
  </a>

  {/* PPT Report Button */}
  <a
    href={PptFile}
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
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 5px 15px rgba(255,59,59,0.4)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    <AiOutlineFilePdf size={22} />
    View PPT Report
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
  <p>I gained hands-on experience building an end-to-end Chronic Wound Analysis system. Learned to process medical imaging data, train deep learning models, and implement computer vision workflows in a practical environment. Improved data preprocessing practices, model evaluation, and technical problem-solving skills. This project strengthened my knowledge in Python, NumPy, OpenCV, Pandas, Scikit-Learn, Matplotlib, and building effective image classification pipelines.</p>
  <p>Working through the model development lifecycle helped me understand data handling challenges, feature extraction, and classification report evaluation. I also explored model optimization, result visualization, and performance tuning throughout the project.</p>
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

export default Wound;
