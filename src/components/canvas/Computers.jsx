import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from "../../Loader";
import { computerImg } from "../../assets"; // ← import it

const Computers = () => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  if (!computer?.scene) return null;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  // ✅ show static image on mobile
  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={computerImg}
          alt="computer"
          className="w-[280px] h-auto object-contain"
        />
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;