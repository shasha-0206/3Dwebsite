import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg,rightImg } from '../utils'
import Videos from "./Videos"
const Highlight = () => {

  useGSAP(() => {
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1,y:0,duration:1,stagger:0.25})

  },[])

  return (
    <section id = "highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the Highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">Watch The Film
               <img src = {watchImg} className="ml-2"/> 
            </p>

            <p className="link">Watch The event
               <img src = {rightImg} className="ml-2"/> 
            </p>

          </div>
        </div>

        <Videos />
      </div>
    </section>  
  )
}

export default Highlight