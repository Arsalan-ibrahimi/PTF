import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/herobg";
import Text from '@/components/text'
import { TextGenerateEffect } from "@/components/ui/text-generator";
import Cards from '@/components/skillcards'

export default function SpotlightPreview() {
  return (
    <div className="h-[100dvh] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="top-0 left-10 md:left-20 md:-top-0"
        fill="#874CCC"
      />
      <div className="text-center  max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
       
          <TextGenerateEffect words="Hi, I'm Arsalan Ibrahimi"/>
        
          <Text/>
        
      </div>
    </div>
  );
}
