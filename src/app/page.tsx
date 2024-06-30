"use client";
import React from "react";
// import Bg_grid  from '@/components/grid'
// import Feature from '@/components/featured'
// import Dashboard from "@/components/dashboard/dashboard";
// import Mobile from '@/components/dashboard/mobile'
import Loader from  '@/app/loader'
// import Profile from '@/components/custom_components/profile/profile'
// import Blog from "@/components/custom_components/blog-post/blog";
// import Form from "@/components/custom_components/form";
// import TextReveal from '@/components/text_hero_generate'
import NewHero from '@/components/hero-latest'
import { useState, useEffect } from "react";
/**<Bg_grid/>
  
 <Feature/> 
**/


export default function MyPage()
{

    const [isDashboardLoaded, setIsDashboardLoaded] = useState(false);

    useEffect(() => {
        // Simulate loading delay
        const timeout = setTimeout(() => {
          setIsDashboardLoaded(true);
        }, 5000); // Adjust the delay time as needed
    
        return () => clearTimeout(timeout);
      }, []);
 
    

  return (
    
    <div className="wrapper h-full  w-full ">
     


     {isDashboardLoaded ? (
        <>
        
        <NewHero/>
        </>
      ) : (
        <Loader />
      )}
     

   

    </div>
  )

}

    // <div className="isometric-tiles">
    // <Profile/>
    // <Blog/>
    // </div>
    // <div className="isometric-tiles">
    // <Profile/>
    // <Blog/>
    // </div>

// {isDashboardLoaded ? (
//   <>
  
//   <Dashboard/>
//   </>
// ) : (
//   <Loader />
// )}







// <div className="w-full h-full outer z-[-2]">

// <div className="below">
//   <Mobile/>
// </div>
// <div className="top ">

//   <TextReveal/>
//   <div className="w-full flex justify-center">

//   <p className="p-0 m-0 text-sm text-center  text-[#333237]  subtitle-text">A FULL STACK DEVELOPER</p>
//   </div>

// </div>
// </div>