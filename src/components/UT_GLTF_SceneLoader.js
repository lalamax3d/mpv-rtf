
import React from 'react'

import { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html, useProgress } from '@react-three/drei'




function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function Model() {
    // const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
    const gltf = useGLTF('unitTests/unit_test_Shaders_02.gltf')
    return (<primitive object={gltf.scene} />)
  }


export default function GltfSceneLoader () {
// const GltfSceneLoader = (props) => {
    const gltf = useLoader(GLTFLoader, 'unitTests/unit_test_Shaders_02.gltf')
    const ref = useRef()
    const useGLTF = (url, draco) => {

    }
    return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Suspense fallback={<Loader />}>
        {/* Approach 1 using three loader, worked but wasn't getting % loading */}
         {/* <primitive object={gltf.scene} /> */}
         {/* Approach 2 (using drei loader with % loading as well) */}
         <Model />
       </Suspense>
      <OrbitControls />
    </Canvas>
    )
}
// export default GltfSceneLoader;