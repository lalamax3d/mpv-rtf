
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import GltfSceneLoader from './components/UT_GLTF_SceneLoader'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import {getProject} from '@theatre/core'
import {createRoot} from 'react-dom/client'

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject('Demo Project').sheet('Demo Sheet')

export default function App() {
//   const ref = useRef()
  return (
    
    <GltfSceneLoader/>
  )
}

// createRoot(document.getElementById('root')!).render(<App/>)
