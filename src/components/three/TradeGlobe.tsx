"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function latLngToVec3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

function GlobePoints() {
  const ref = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      positions[i * 3] = 1.02 * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = 1.02 * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = 1.02 * Math.cos(phi);

      // Gradient colors
      const t = i / count;
      colors[i * 3] = 0.23 + t * 0.32;     // R: blue to purple
      colors[i * 3 + 1] = 0.51 - t * 0.15;  // G
      colors[i * 3 + 2] = 0.96;              // B
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function TradeArcs() {
  const ref = useRef<THREE.Group>(null);

  const arcs = useMemo(() => {
    const pairs = [
      [{ lat: 28.6, lng: 77 }, { lat: 51.5, lng: -0.1 }],
      [{ lat: 28.6, lng: 77 }, { lat: 1.3, lng: 103.8 }],
      [{ lat: 28.6, lng: 77 }, { lat: 25.2, lng: 55.3 }],
      [{ lat: 28.6, lng: 77 }, { lat: 35.7, lng: 139.7 }],
      [{ lat: 28.6, lng: 77 }, { lat: -33.9, lng: 18.4 }],
      [{ lat: 28.6, lng: 77 }, { lat: 40.7, lng: -74 }],
    ];

    return pairs.map(([from, to], index) => {
      const fromVec = latLngToVec3(from.lat, from.lng, 1);
      const toVec = latLngToVec3(to.lat, to.lng, 1);
      const mid = new THREE.Vector3().addVectors(fromVec, toVec).multiplyScalar(0.5);
      const dist = fromVec.distanceTo(toVec);
      mid.normalize().multiplyScalar(1 + dist * 0.5);

      const curve = new THREE.CubicBezierCurve3(
        fromVec,
        mid.clone().lerp(fromVec, 0.25),
        mid.clone().lerp(toVec, 0.25),
        toVec
      );

      const colors = ["#3b82f6", "#8b5cf6", "#06b6d4", "#10b981", "#ec4899", "#f59e0b"];
      return { geometry: new THREE.TubeGeometry(curve, 44, 0.006, 8, false), color: colors[index] };
    });
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={ref}>
      {arcs.map((arc, i) => (
        <mesh key={i} geometry={arc.geometry}>
          <meshBasicMaterial color={arc.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const outerGlowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.08;
    if (globeRef.current) globeRef.current.rotation.y = t;
    if (wireframeRef.current) wireframeRef.current.rotation.y = t;
    if (glowRef.current) {
      glowRef.current.rotation.y = t * 0.5;
      const scale = 1.12 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
      glowRef.current.scale.setScalar(scale);
    }
    if (outerGlowRef.current) {
      const scale = 1.25 + Math.sin(state.clock.elapsedTime * 0.3) * 0.03;
      outerGlowRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group>
      {/* Main globe - dark with blue tint */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          color="#0f172a"
          emissive="#1e3a5f"
          emissiveIntensity={0.15}
          transparent
          opacity={0.9}
          shininess={30}
        />
      </mesh>

      {/* Gradient wireframe */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[1.005, 40, 40]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.1} wireframe />
      </mesh>

      <GlobePoints />
      <TradeArcs />

      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.05} />
      </mesh>

      {/* Outer atmospheric glow */}
      <mesh ref={outerGlowRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

function GlobeScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 3, 5]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-5, -3, -5]} intensity={0.4} color="#3b82f6" />
      <pointLight position={[3, 4, -3]} intensity={0.3} color="#8b5cf6" />
      <Globe />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI * 0.7}
        minPolarAngle={Math.PI * 0.3}
        rotateSpeed={0.3}
      />
    </>
  );
}

export function TradeGlobe() {
  return (
    <div className="w-full h-full min-h-[350px]">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}
