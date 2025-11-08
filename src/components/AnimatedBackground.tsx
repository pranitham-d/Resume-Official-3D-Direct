
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Points } from '@react-three/drei';

const AbstractScene = () => {
    const group = useRef<THREE.Group>(null!);
    const particlesRef = useRef<THREE.Points>(null!);
    const linesRef = useRef<THREE.LineSegments>(null!);
    
    const count = 200;
    const radius = 4;

    const [points, lines] = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const r = Math.sqrt(Math.random()) * radius;
            const theta = THREE.MathUtils.randFloatSpread(360); 
            const phi = THREE.MathUtils.randFloatSpread(360); 
            p[i * 3] = r * Math.sin(theta) * Math.cos(phi)
            p[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
            p[i * 3 + 2] = r * Math.cos(theta);
        }
        
        const linePositions = [];
        const pos = new THREE.BufferAttribute(p, 3);
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const p1 = new THREE.Vector3().fromBufferAttribute(pos, i);
                const p2 = new THREE.Vector3().fromBufferAttribute(pos, j);
                if (p1.distanceTo(p2) < 1.5) {
                    linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
                }
            }
        }
        const lineGeo = new Float32Array(linePositions);
        
        return [p, lineGeo];
    }, [count, radius]);

    useFrame((state) => {
        const { clock, pointer } = state;
        if(group.current) {
            group.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
            group.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.1) * 0.2;
            group.current.rotation.z += 0.001;
            
            // Parallax effect
            group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.5, 0.03);
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, pointer.y * 0.5, 0.03);
        }
    });

    return (
        <group ref={group}>
            <Points ref={particlesRef} positions={points}>
                <pointsMaterial
                    size={0.03}
                    color="#007bff"
                    sizeAttenuation
                    depthWrite={false}
                />
            </Points>
            <lineSegments ref={linesRef}>
                <bufferGeometry attach="geometry">
                    <bufferAttribute
                        attach="attributes-position"
                        count={lines.length / 3}
                        array={lines}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    attach="material"
                    color="#6c757d"
                    transparent
                    opacity={0.2}
                    depthWrite={false}
                />
            </lineSegments>
        </group>
    );
};

const AnimatedBackground: React.FC = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full -z-10">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <fog attach="fog" args={['#f8f9fa', 5, 12]} />
                <AbstractScene />
            </Canvas>
        </div>
    );
};

export default AnimatedBackground;