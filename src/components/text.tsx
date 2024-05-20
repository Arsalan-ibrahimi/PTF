"use client";
import { TextGenerateEffect } from "./ui/text-generator copy";

var mytext ="A Self Taught Full-Stack Web Developer"
export default function TextGenerateEffectDemo() {
  return (
    <div>
       <TextGenerateEffect words={mytext} />
      
    </div>
  );
}
