import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';
import Footer from '../components/Footer'; // Adicione a importação

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-manga-black">
      <HeroSection />
      <WorkSection />
      <Footer /> 
    </div>
  );
}