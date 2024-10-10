import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import Lights from './Lights';
import Loader from "./Loader";
import IPhone from './Iphone';
import * as THREE from 'three'
import { Suspense } from "react";

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  return (
    
    <View
    index={index}
    id={gsapType}
    className={` w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>

      {/* AmbientLight = removes all shadows from object being displayed in canvas*/}
      <ambientLight intensity={0.3}/>

      {/* Objects that are further away from the camera appear smaller, creating a sense of depth and realism in the scene */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* lights for the object to be visible */}
      <Lights />

      {/* for moving the iphone using mouse */}
      <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.7}
        target={new THREE.Vector3(0, 0 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        // on used for knowing which direction the phone is facing after rotating it
      /> 
      
      <group ref={groupRef} name={`${index === 1}? 'small':'large'`} position={[0,0,0]}>

        <Suspense fallback = {<Loader />} >
        {/* suspense =  loading screen before the model loads */}
          <IPhone scale = {index === 1?[15,15,15] : [17,17,17]} item = {item} size = {size}/>
        </Suspense>
      </group>



    </View>
  
  )
}

export default ModelView