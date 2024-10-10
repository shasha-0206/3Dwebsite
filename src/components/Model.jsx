import { useGSAP } from '@gsap/react'
import ModelView from './ModelView'
import React, { useState,useRef, useEffect } from 'react'
import { yellowImg } from '../utils'
import gsap from 'gsap'
import  * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from '../utils/animaitons'
const Model = () => {

    const [size,setSize] = useState('small')
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })


    // camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();
    
    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);
    
    const tl = gsap.timeline();


    // for changing the size of phone and silaying different phone when clicked on button
    useEffect(() => {

        if(size === 'large'){
            animateWithGsapTimeline(tl,small,smallRotation,'#view1','#view2',{
                transform: 'translateX(-100%)',
                duration:2, 

            })
        }

        if(size === 'small'){
            animateWithGsapTimeline(tl,large,largeRotation,'#view2','#view1',{
                transform: 'translateX(0)',
                duration:2, 

            })
        }


    },[size])

    useGSAP(() => {
        gsap.to('#heading',{
            opacity:1,y:0
        })
    })

    return (
        <section className='common-padding'>
            <div className='screen-max-width'>
                <h1 id='heading' className='section-heading'>
                    Take a closer Look
                </h1>

                <div className='flex flex-col items-center mt-5'>
                    <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative' >
                        <ModelView 
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />  

                        <ModelView 
                            index={2}
                            groupRef={large}
                            gsapType="view2"
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />
                        
                        <Canvas
                            className="w-full h-full"
                            style={{
                              position: 'fixed',
                              top: 0,
                              bottom: 0,
                              left: 0,
                              right: 0,
                              overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}
                            >

                              <View.Port />  
                              {/* view port is the way to render multiple views of a model in same canvas */}
                              
                        </Canvas>
                    </div>
                        
                    
                    {/* loading animations and there colors */}
                    <div className='mx-auto w-full'>
                        <p className='text-sm text-center mb-5 font-light'>{model.title}</p>
                        <div className='flex-center '> 
                            <ul className='color-container'>
                                {models.map((item, i) => (
                                <li key={i}
                                 className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                                 style={{ backgroundColor: item.color[0] }} 
                                 onClick={() => setModel(item)} />

                                //  when clicked the object inside the list is being updated in useState

                                ))}
                            </ul>
                            

                            {/* size buttons  */}
                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                  <span key={label} 
                                    className="size-btn" 
                                    style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white'}}
                                    // for transition between selected button and normal button
                                    
                                    onClick={() => setSize(value)}
                                    // when clicked the size being updated in useState
                                    >
                                    {label}
                                  </span>
                                ))}
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Model