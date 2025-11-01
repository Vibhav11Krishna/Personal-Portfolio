import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Blog from './pages/Blog';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Timeline from './pages/Timeline';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';
import InternshipPage from './pages/InternshipPage';
import CreativeXPage from './pages/CreativeXPage';

function App() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column" style={{ background: "#121212", color: "#E0E0E0" }}>
        <Navbar /> {/* Make sure Navbar links use <Link to="..." /> */}
        <main className="flex-grow-1 d-flex align-items-center justify-content-center">
          <div className="w-100 px-3 px-md-5 py-5 fade-in">
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/certificates" element={<Certificates />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/internship" element={<InternshipPage />} />
              <Route path="/creativex" element={<CreativeXPage />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
