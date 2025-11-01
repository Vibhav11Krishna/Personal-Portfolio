import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const sections = [
    { name: "About", path: "/about" },
    { name: "Timeline", path: "/timeline" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Certificates", path: "/certificates" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="d-flex justify-content-center py-3 position-relative">
      <nav
        className="navbar-wrapper d-flex align-items-center justify-content-between"
        style={{
          padding: "0.5rem 1.5rem",
          width: "950px",
          maxWidth: "95%",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.37)",
          position: "relative",
        }}
      >
        <span
          className="brand"
          style={{
            fontSize: "1.8rem",
            color: "#FF3B3B",
            fontWeight: "700",
          }}
        >
          Portfolio
        </span>

        {/* Desktop Menu */}
        <div
          className="nav-menu d-none d-lg-flex gap-4 justify-content-end"
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          {sections.map((section) => (
            <Link
              key={section.name}
              to={section.path}
              className={`nav-btn ${location.pathname === section.path ? "active" : ""}`}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                background: location.pathname === section.path ? "rgba(255,59,59,0.8)" : "transparent",
                color: "#fff",
                fontWeight: "600",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              {section.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="drawer-toggle d-lg-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "12px",
            background: "rgba(255,59,59,0.8)",
            color: "#fff",
            fontWeight: "600",
            border: "none",
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          ☰
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div
            className="mobile-drawer"
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              width: "100%",
              background: "rgba(30,30,30,0.9)",
              backdropFilter: "blur(15px)",
              borderRadius: "0 0 20px 20px",
              display: "flex",
              flexDirection: "column",
              padding: "1rem 0",
              zIndex: 9,
            }}
          >
            {sections.map((section) => (
              <Link
                key={section.name}
                to={section.path}
                onClick={() => setIsOpen(false)}
                className={`drawer-btn ${location.pathname === section.path ? "active" : ""}`}
                style={{
                  padding: "0.8rem 1rem",
                  textAlign: "center",
                  background: location.pathname === section.path ? "rgba(255,59,59,0.8)" : "transparent",
                  color: "#fff",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  margin: "0.2rem 0",
                }}
              >
                {section.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
