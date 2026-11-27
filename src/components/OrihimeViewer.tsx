import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Center, ContactShadows, Html } from '@react-three/drei';
import { RotateCw, Pause } from 'lucide-react';

function OrihimeModel() {
  const { scene } = useGLTF('/orihime.glb');

  return (
    <Center>
      <primitive
        object={scene}
        scale={2.2}
        rotation={[0, 0, 0]}
      />
    </Center>
  );
}

function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 text-manga-green font-mono text-xs uppercase tracking-widest whitespace-nowrap bg-manga-black/80 px-6 py-4 border border-manga-green/40 rounded-full">
        <span>Carregando Modelo 3D...</span>
      </div>
    </Html>
  );
}

export default function OrihimeViewer() {
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className="relative w-full h-[520px] md:h-[680px] bg-gradient-to-b from-manga-white/[0.03] to-manga-green/[0.06] border border-manga-green/30 overflow-hidden">
      {/* Top Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-manga-black/80 backdrop-blur-md border border-manga-green/30 px-4 py-2 rounded-full">
        <span className="w-2 h-2 rounded-full bg-manga-green animate-pulse" />
        <span className="text-manga-green text-xs uppercase tracking-widest font-medium">
          Preview 3D Interativo • 31.361 Vértices / 41.553 Triângulos
        </span>
      </div>

      {/* Controls Overlay */}
      <div className="absolute bottom-4 right-4 z-10 flex items-center gap-3">
        <button
          type="button"
          onClick={() => setAutoRotate((prev) => !prev)}
          className="flex items-center gap-2 bg-manga-black/85 hover:bg-manga-green text-manga-green hover:text-manga-black border border-manga-green/40 px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-colors cursor-pointer"
        >
          {autoRotate ? <Pause className="w-3.5 h-3.5" /> : <RotateCw className="w-3.5 h-3.5" />}
          {autoRotate ? 'Pausar Rotação' : 'Girar Modelo'}
        </button>
      </div>

      <div className="absolute bottom-4 left-4 z-10 hidden md:block text-manga-white/40 text-xs uppercase tracking-widest pointer-events-none">
        Arraste para girar • Scroll para zoom
      </div>

      <Canvas camera={{ position: [0, 0.4, 5.2], fov: 42 }}>
        <Suspense fallback={<Loader />}>
          <Environment preset="studio" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 5]} intensity={1.2} />
          <directionalLight position={[-5, 3, -5]} intensity={0.5} />

          <OrihimeModel />

          <ContactShadows
            position={[0, -2.0, 0]}
            opacity={0.5}
            scale={6}
            blur={2.4}
            far={4}
          />

          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate={autoRotate}
            autoRotateSpeed={1.6}
            minDistance={2.2}
            maxDistance={9}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
