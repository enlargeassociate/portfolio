"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1500;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      // Spread particles in a large sphere
      const r = 4 + Math.random() * 8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      // Color gradient: blue → purple → cyan
      const t = Math.random();
      if (t < 0.33) {
        // Blue
        col[i * 3] = 0.23;
        col[i * 3 + 1] = 0.51;
        col[i * 3 + 2] = 0.96;
      } else if (t < 0.66) {
        // Purple
        col[i * 3] = 0.55;
        col[i * 3 + 1] = 0.36;
        col[i * 3 + 2] = 0.96;
      } else {
        // Cyan
        col[i * 3] = 0.02;
        col[i * 3 + 1] = 0.71;
        col[i * 3 + 2] = 0.83;
      }
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function FloatingOrbs() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const orbs = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      position: [
        Math.sin(i * 1.2) * 3,
        Math.cos(i * 0.8) * 2,
        Math.sin(i * 1.5) * 3 - 2,
      ] as [number, number, number],
      scale: 0.15 + Math.random() * 0.2,
      color: ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#ec4899"][i],
    }));
  }, []);

  return (
    <group ref={group}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position}>
          <sphereGeometry args={[orb.scale, 16, 16]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function ConnectionLines() {
  const ref = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(-3, 1, -2),
      new THREE.Vector3(2, -1, -3),
      new THREE.Vector3(0, 2, -1),
      new THREE.Vector3(-2, -2, -2),
      new THREE.Vector3(3, 0, -2),
      new THREE.Vector3(1, 2, -3),
    ];

    const linePoints: THREE.Vector3[] = [];
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < 5) {
          linePoints.push(points[i], points[j]);
        }
      }
    }

    const geo = new THREE.BufferGeometry().setFromPoints(linePoints);
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <group ref={ref}>
      <lineSegments geometry={geometry}>
        <lineBasicMaterial color="#3b82f6" transparent opacity={0.08} />
      </lineSegments>
    </group>
  );
}

function Scene() {
  return (
    <>
      <Particles />
      <FloatingOrbs />
      <ConnectionLines />
    </>
  );
}

export function ParticleField() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
