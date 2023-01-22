
import React from 'react'

import { Suspense, useRef, useMemo, useState } from 'react'
import { useLoader } from '@react-three/fiber'
import { useThree } from "@react-three/fiber";
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Html, useProgress } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// custom box
import Box from './MyBoxModel'
// leva
import {useControls} from 'leva'


function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

const Model = (props) => {

    
    // const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb')
    // const gltf = useGLTF('unitTests/unit_test_Shaders_02.gltf')
    const gltf = useGLTF('unitTests/unit_test_Actions.gltf')
    // console.log(gltf.nodes.length)
    console.log(gltf.animations.length) // 2 animations
    console.log(gltf.animations[0]) // AnimationAction
    console.log(gltf.scene) // Group (Scene), 
    console.log(gltf.scene.children) // Array of 6 objects
    let armatureObject = gltf.scene.children[0] // Armature
    let bone = armatureObject.children[0] // Bone
    console.log('bone 1: ', bone)
    let b1 = bone.children[0] // Bone
    let b2 = b1.children[0] // Bone
    console.log('bone 2: ', b2)


    return (<primitive object={gltf.scene} />)
  }


// export default function GltfSceneLoader () {
const GltfSceneLoader = (props) => {
    const gltf = useLoader(GLTFLoader, 'unitTests/unit_test_Shaders_02.gltf')
    const ref = useRef()
    const useGLTF = (url, draco) => {

    }
    const options = useMemo(() => {
      return {
        x: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        y: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        z: { value: 0, min: 0, max: Math.PI * 2, step: 0.01 },
        visible: true,
        color: { value: 'lime' },
      }
    }, [])
  
    const pA = useControls('Polyhedron A', options)
    const pB = useControls('Polyhedron B', options)
    // const { name, aNumber,aColor } = useControls({ name: 'World', aNumber: 0.5, aColor: '#bcd' })

    return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }} onCreated={bind({ state: editableState })}>
        <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} uniqueName="SpotLight"/>
      <pointLight position={[-10, -10, -10]} uniqueName="PointLight"/>
      {/* <Box position={[pA.x, pA.y, pA.z]}  /> */}
      <Box position={[3,1,0]}  uniqueName="Box1"/>
      <Box position={[-3, 1, 0]} uniqueName="Box2"/>
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
export default GltfSceneLoader;
