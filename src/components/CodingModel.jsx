
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Float } from '@react-three/drei';
import * as THREE from 'three';

const CodeSymbols = () => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const symbols = ['<>', '{}', '[]', '()', '/>', '&&', '||', '=>'];
  
  return (
    <group ref={groupRef}>
      {symbols.map((symbol, index) => {
        const angle = (index / symbols.length) * Math.PI * 2;
        const radius = 3;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        
        return (
          <Float key={index} speed={1 + index * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh position={[x, Math.sin(index) * 0.5, z]}>
              <boxGeometry args={[0.5, 0.5, 0.1]} />
              <meshStandardMaterial 
                color={new THREE.Color().setHSL((index / symbols.length), 0.8, 0.6)}
                emissive={new THREE.Color().setHSL((index / symbols.length), 0.8, 0.2)}
              />
            </mesh>
            <Text3D
              position={[x, Math.sin(index) * 0.5 + 0.3, z]}
              font="/fonts/helvetiker_regular.typeface.json"
              size={0.2}
              height={0.05}
            >
              {symbol}
              <meshStandardMaterial 
                color="#00ffff"
                emissive="#004444"
              />
            </Text3D>
          </Float>
        );
      })}
    </group>
  );
};

const CentralCube = () => {
  const cubeRef = useRef();
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#8b5cf6"
        emissive="#2d1b69"
        wireframe={true}
      />
    </mesh>
  );
};

const CodingModel = () => {
  return (
    <div className="w-full h-96 md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <CentralCube />
        <CodeSymbols />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default CodingModel;
