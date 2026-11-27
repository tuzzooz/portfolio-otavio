import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';

const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Guestbook = lazy(() => import('./pages/Guestbook'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <Router>
      <main className="min-h-screen w-full bg-manga-black font-sans antialiased flex flex-col">
        <div className="flex-1">
          <Suspense fallback={<div className="min-h-screen w-full bg-manga-black" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/guestbook" element={<Guestbook />} />
              <Route path="/projetos/:id" element={<ProjectDetails />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </main>
    </Router>
  );
}
