'use client'

import { FloatingNav } from "./ui/navbar-menu";
import {cn} from '../utils/cn' 
import React from 'react'
import Link from 'next/link'


function Navbar()
{
    const navItems = [
        {
          name: "Home",
          link: "/",
         
        },
        {
          name: "About",
          link: "/about",
         
        },
        {
          name: "Contact",
          link: "/contact",
          
        },
      ];
      
    return(
        <div className="relative  w-full">
        <FloatingNav navItems={navItems} />
       
      </div>
    )
}



export default Navbar