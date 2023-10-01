import { Environment, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { angleToRadians } from "../utils/angles";

export default function ThreeJS(){
    const drinksModels = {
        mojrito: useGLTF("../../Mojrito.gltf"),
        mojritoYellow: useGLTF("../../Mojrito2.gltf"), 
    }

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0.5, 0.6]}/>

            <Environment preset={"warehouse"} />
            <OrbitControls autoRotate autoRotateSpeed={1} enableZoom={false}/>

            <mesh>
                <primitive object={drinksModels.mojrito.scene} />
            </mesh>
        </>
    )
}