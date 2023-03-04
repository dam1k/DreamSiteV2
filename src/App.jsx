import { useStat, useEffect } from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
// import Box from "./components/Three/Box";
import Cylinder3d from './components/Three/Cylinder';
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
          <Header/>
          <Hero/>
           <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight /> 
          <Cylinder3d position={[-1.5, 0, 0]} />
          <Cylinder3d position={[1.2, 0, 0]} />
            </Canvas>
      </div>
    </div>
  )
}

export default App
