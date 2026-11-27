import HeroSection from '../components/HeroSection';
import WorkSection from '../components/WorkSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-manga-black">
      <HeroSection />
      <WorkSection />
    </div>
  );
}
