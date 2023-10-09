import * as THREE from 'three'
import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Drinks } from "../utils/database";
import { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ThreeJS({ model }){
    const selectedDrink = Drinks[model].drinkModel
    const gltf = useGLTF(selectedDrink)

    const { scene, animations } = gltf

    const mixerRef = useRef();
    const [mixer] = useState(() => new THREE.AnimationMixer(scene));

    useEffect(() => {
        animations.forEach((clip) => {
            mixer.clipAction(clip, scene).play();
        });
        mixerRef.current = mixer;
        return () => {
            mixer.stopAllAction();
        };
    }, [animations, mixer, scene]);

    useFrame((state, delta) => {
        if (mixerRef.current) {
            mixerRef.current.update(delta);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0.5, 0.6]}/>

            <Environment preset={"warehouse"} />
            <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false}/>

            {selectedDrink && (
                <mesh>
                    <primitive object={scene} />
                </mesh>
            )}
        </>
    )
}