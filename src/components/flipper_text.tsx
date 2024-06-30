import React from "react";

import Rotate from '@/components/rotate-word'
import Text from '@/components/text_hero_generate'
import IconCloud from '@/components/hero-cloud'

export default function FlipWordsDemo() {
  const words = ["Wordpress-Designer","React-Developer", "Programmer", "Tech-Enthusiast"];

  return (
    <div className="h-[100dvh] flex justify-center text-center items-center px-2">
      <div className=" font-normal text-neutral-600 dark:text-neutral-400 justify-center">
        <div className="text-[6dvw] ">
        <Text/>
        </div>

        & i am
        <Rotate/>

      </div>
      
      
    </div>
  );
}
