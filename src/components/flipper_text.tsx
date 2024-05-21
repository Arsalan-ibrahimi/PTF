import React from "react";
import { FlipWords } from "./ui/flip";
import Text from '@/components/text_hero_generate'

export default function FlipWordsDemo() {
  const words = ["Wordpress-Designer","ReactDeveloper", "Programmer", "TechEnthusiast"];

  return (
    <div className="h-[40rem] flex justify-center text-center items-center px-4">
      <div className=" mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        <div className="text-[8dvw]  ">
        <Text/>
        </div>

        I am a
        <FlipWords words={words} /> 
      
      </div>
      
    </div>
  );
}
