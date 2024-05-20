"use client";
import React from "react";
import CardScroll from '@/components/skillanima'
import CardsGrid from '@/components/skillcards'
import Lamp from '@/components/lamp'

import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracingbream";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">

            <CardsGrid/>
            <Lamp/>

    </TracingBeam>
  );
}

