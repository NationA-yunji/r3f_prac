import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import Model from "./Model";
import MyElement3D from "./MyElement3D";

interface ModelViewerProps {
  model: string;
}

const ModelViewer = () => {
  const modelRef = useRef<any>();

  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <Model />
        <ambientLight color={"#fff"} intensity={1.2} />
        <directionalLight
          castShadow
          position={[3, 8, 6]}
          intensity={0.7}
          shadow-mapSize={1024}
        >
          <orthographicCamera
            attach="shadow-camera"
            args={[-10, 10, -10, 10, 0.1, 50]}
          />
        </directionalLight>
      </Canvas>
    </Suspense>
  );
};

export default ModelViewer;
