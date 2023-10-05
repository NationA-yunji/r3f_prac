import { useMemo } from "react";
import { OrbitControls, Environment, useFBX } from "@react-three/drei";
import { useEffect } from "react";

interface ModelProps {
  model: string;
}

const Model = () => {
  const fbx = useFBX("./v_sponge_bob.fbx");

  useMemo(() => {
    fbx.traverse((child) => {
      // @ts-ignore
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // 모델이 투명하게 되는 경우를 방지하기 위해 추가
        // @ts-ignore
        child.material.transparent = false;
        // @ts-ignore
        for (let i = 0; i < child.material.length; i++) {
          // @ts-ignore
          if (child.material[i].name !== "Brows_MAT") {
            // @ts-ignore
            child.material[i].transparent = false;
          }
        }
      }
    });
  }, [fbx]);

  return (
    <>
      <OrbitControls />

      {/* <Environment preset="sunset" /> */}

      <primitive scale={0.8} object={fbx.children[0]} position-y={-0.5} />
    </>
  );
};

export default Model;
