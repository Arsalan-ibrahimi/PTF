"use client";
import React from "react";
import Bg_grid  from '@/components/grid'
// import Feature from '@/components/featured'
import Dashboard from "@/components/dashboard/dashboard";
import Mobile from '@/components/dashboard/mobile'
// import Loader from  '@/app/loader'
import Profile from '@/components/custom_components/profile/profile'
import Blog from "@/components/custom_components/blog-post/blog";
// import Form from "@/components/custom_components/form";
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
        }, 2000); // Adjust the delay time as needed
    
        return () => clearTimeout(timeout);
      }, []);
 
    

  return (
    
    <div className="wrapper h-full  w-full mt-[5rem] ">
     
      <Profile/>

   

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