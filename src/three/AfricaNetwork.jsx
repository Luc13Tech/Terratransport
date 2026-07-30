import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, QuadraticBezierLine } from '@react-three/drei'
import * as THREE from 'three'

// Approximate lat/lon of a handful of African markets Terratransport & Industrie
// Mobile serves or is targeting — this is what the network actually represents,
// not decoration: each dot is a real place, each arc a real corridor.
const NODES = [
  { name: 'Dakar', lat: 14.7, lon: -17.4 },
  { name: 'Conakry', lat: 9.5, lon: -13.7 },
  { name: 'Accra', lat: 5.6, lon: -0.2 },
  { name: 'Abidjan', lat: 5.3, lon: -4.0 },
  { name: 'Kinshasa', lat: -4.4, lon: 15.3 },
  { name: 'Nairobi', lat: -1.3, lon: 36.8 },
  { name: 'Johannesburg', lat: -26.2, lon: 28.0 },
]

const RADIUS = 2.15

function latLonToVec3(lat, lon, r = RADIUS) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  )
}

function Globe() {
  const groupRef = useRef()
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  const nodePositions = useMemo(
    () => NODES.map((n) => ({ ...n, pos: latLonToVec3(n.lat, n.lon) })),
    []
  )

  const dakar = nodePositions[0].pos
  const conakry = nodePositions[1].pos
  const midPoint = dakar.clone().add(conakry).multiplyScalar(0.5).normalize().multiplyScalar(RADIUS * 1.22)

  useFrame((_, delta) => {
    if (prefersReducedMotion || !groupRef.current) return
    groupRef.current.rotation.y += delta * 0.12
  })

  return (
    <group ref={groupRef} rotation={[0.15, -0.6, 0]}>
      {/* Wireframe globe */}
      <mesh>
        <icosahedronGeometry args={[RADIUS, 3]} />
        <meshBasicMaterial color="#B8935A" wireframe transparent opacity={0.18} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[RADIUS * 0.995, 1]} />
        <meshBasicMaterial color="#0F3D2E" transparent opacity={0.55} />
      </mesh>

      {/* Market nodes */}
      {nodePositions.map((n) => (
        <mesh key={n.name} position={n.pos}>
          <sphereGeometry args={[0.035, 12, 12]} />
          <meshBasicMaterial color="#D4B788" />
        </mesh>
      ))}

      {/* Featured corridor: Dakar — Conakry (the RFI project route) */}
      <QuadraticBezierLine
        start={dakar}
        end={conakry}
        mid={midPoint}
        color="#F7F5EE"
        lineWidth={1.4}
        transparent
        opacity={0.85}
      />
    </group>
  )
}

function Crystal({ position, scale = 1, speed = 1 }) {
  return (
    <Float speed={speed} rotationIntensity={0.6} floatIntensity={1.1}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#B8935A" flatShading roughness={0.35} metalness={0.15} />
      </mesh>
    </Float>
  )
}

export default function AfricaNetwork({ className = '' }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 3, 5]} intensity={1.1} color="#F7F5EE" />
        <pointLight position={[-4, -2, -3]} intensity={0.4} color="#B8935A" />

        <Suspense fallback={null}>
          <Globe />
          <Crystal position={[2.6, 1.1, -1]} scale={0.22} speed={1.4} />
          <Crystal position={[-2.4, -1.3, 0.4]} scale={0.16} speed={1.8} />
          <Crystal position={[2.1, -1.6, 0.8]} scale={0.13} speed={2.1} />
        </Suspense>
      </Canvas>
    </div>
  )
}
