import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Guestbook from './pages/Guestbook';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <main className="min-h-screen w-full bg-manga-black font-sans antialiased">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/projetos/:id" element={<ProjectDetails />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}