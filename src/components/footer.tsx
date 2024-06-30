'use client'

import React from 'react'


export default function Footer()
{
  return(
    <footer className='w-full  flex justify-between footer  pt-5 pb-5 px-3 '>
      <div className='detail-container w-[33%]  '>
        <div className=' flex items-center gap-1'>
        <div className='logo' >
        <svg width="22" height="22" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='position-absolute left-[50%]'>
          <path d="M5.83725 18.3026L3.90002 14.9473L6.74301 10.0366L8.54958 13.166L19.2143 13.1602L16.1881 18.349L5.83725 18.3026Z" fill="#FFAD64"/>
          <path d="M21.1187 9.8285L19.1815 13.1838L13.5072 13.1771L15.314 10.0479L9.97668 0.814819L15.9833 0.841176L21.1187 9.8285Z" fill="#ADD4D3"/>
          <path d="M6.13575 0.796936H10.0102L12.8415 5.71441L9.22803 5.71423L3.9007 14.953L0.920166 9.73795L6.13575 0.796936Z" fill="#FB8351"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4826 0.0200427L10.471 0H5.67808L0 9.7339L3.89771 16.5538L3.90249 16.5455L5.37598 19.0976L16.6448 19.148L20.6021 12.3625H20.5758L22.0377 9.83051L16.447 0.0462083L10.4826 0.0200427ZM14.1902 6.51135H14.2201L11.4027 1.61804L15.5196 1.63609L20.1996 9.8264L18.7347 12.3636L14.896 12.3656L16.2344 10.0476L14.1902 6.51135ZM9.50655 1.59392L11.4277 4.91735L8.76775 4.91729L4.2139 12.8146L3.90328 13.3512L1.84056 9.742L6.59361 1.59392H9.50655ZM7.65947 10.03L9.68852 6.51123L12.3492 6.51135L14.3936 10.048L13.0548 12.3667L9.00969 12.3689L7.65947 10.03ZM4.82216 14.9505L5.5941 13.6119L6.74204 11.629L8.08963 13.9633L12.1342 13.9611L12.1276 13.9724L17.8142 13.9791L15.7316 17.55L6.2986 17.5078L4.82216 14.9505Z" fill="#333237"/>
          </svg>
        </div>
        <p className=' sm:text-[14px] text-[#333237] font-[Lato] font-bold'>ARSALAN IBRAHIMI</p>
        </div>
        
      </div>
      <div className='w-[33%] text-center text-[11px]'>Copyright © 2024 ARSALAN. All rights reserved.</div>
      <div className='w-[33%] text-end resume-footer text-[11px]'>
        <button >RESUME</button>
      </div>
    </footer>
  )
}