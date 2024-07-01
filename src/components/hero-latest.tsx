import Mobile from "./dashboard/mobile";
import TextReveal from "@/components/text_hero_generate";
import React from 'react';
import { Parallax, useParallax } from "react-scroll-parallax";



export default function Hero_New()
{
  
    return(
      

     <div className="w-full h-full outer z-[-2] ">
      <Parallax speed={5}>
     <div className="below" >
       <Mobile/>
     </div>
      </Parallax>

      <Parallax speed={20}>
    <div className="top ">

       <TextReveal/>
       <div className="w-full flex justify-center">

       <p className="p-0 m-0 text-sm text-center  text-[#333237]  subtitle-text">A FULL STACK DEVELOPER</p>
       
       </div>

    </div>
      </Parallax>
    </div>
    )
}