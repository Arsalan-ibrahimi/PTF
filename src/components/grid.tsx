import React from "react";
// import Text from '@/components/text_hero_generate'
import Flipper from "@/components/flipper_text";
import Mobile from "@/components/dashboard/mobile";

export default function DotBackgroundDemo() {
  return (
    <div className="h-[100dvh] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative  items-center justify-center relative ">
      {/* Radial gradient for the container to give a faded look */}

      <div className=" absolute bod text-left pointer-events-none inset-0 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] "></div>
      <Flipper />

      <div className=" absolute bottom-0 w-full h-full z-20">
        <Mobile />
      </div>
    </div>
  );
}
