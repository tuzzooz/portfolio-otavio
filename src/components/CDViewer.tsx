import { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment, Float, Center } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/cd_final_v1.glb');
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (scene) {
        const { x, y, z } = scene.rotation;
        console.log(`VALORES PARA COPIAR: [${x.toFixed(2)}, ${y.toFixed(2)}, ${z.toFixed(2)}]`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [scene]);

  return (
    <Center>
      <primitive 
        object={scene} 
        scale={1.6} 
        rotation={[0, 0, 0]} 
      />
    </Center>
  );
}

export default function CDViewer() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 11], fov: 40 }}>
        <Suspense fallback={null}>
          <Environment preset="studio" />
          <ambientLight intensity={0.2} />
          
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model />
          </Float>

          <OrbitControls enableZoom={true} enablePan={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/cd_final_v1.glb');