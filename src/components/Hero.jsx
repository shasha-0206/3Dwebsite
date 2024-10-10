import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react';
import { heroVideo,smallHeroVideo } from '../utils';
const Hero = () => {

    // two videos sm and md screens 
    const [viderSrc,setVideoSrc] = useState(window.innerWidth < 760? smallHeroVideo:heroVideo);

    // for changing dynamically 
    const dynamicvideoSrc = () =>{
        if(window.innerWidth < 760){
            setVideoSrc(smallHeroVideo)
        }
        else{
            setVideoSrc(heroVideo)
        }
    }

    useEffect(() =>{
        window.addEventListener('resize',dynamicvideoSrc)

        return () => {
            window.removeEventListener('resize',dynamicvideoSrc);
        }
    },[])

    // for animations tag 
    useGSAP(() =>{
        gsap.to('#hero',{opacity:1,delay:2.5})
        gsap.to('#cta',{opacity:1,y:-50,delay:2.5})
    }, []);


  return (
    <section className = "w-full nav-height  relative">  
        {/* first part has videos both */}
        <div className ="h-5/6 w-full flex-center flex-col">    
            <p id = "hero" className="hero-title">iphone 15 Pro</p>

            <div className = "md:w-10/12 w-9/12">
                <video className='pointer-events-none' autoPlay muted playsInline = {true} key = {viderSrc } src={viderSrc}>
                    {/* <source src = {viderSrc}/> */}
                </video>
            </div>

        </div>

        {/* second part  */}
        <div id = "cta" className='flex flex-col items-center opacity-0 translate-y-20'>

            <a href="#Highlights" className='btn'>Buy</a>
            <p className='font-normal text-xl' >From $199/month or $999</p>

        </div>
    </section>
  )
}

export default Hero