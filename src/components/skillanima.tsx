"use client";
import React from "react";
import { ContainerScroll } from "./ui/animate-scroll";
import Image from "next/image";
import SS from '@/img/era.au.png'

export default function HeroScrollDemo() {
  return (
    <div className=" overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-md font-semibold text-black dark:text-white">
              ERA Solutions <br />
              <span className="text-lg  font-bold mt-1 leading-none">
                Rocking the Air Con Business
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={SS}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

