import React from 'react'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
  } from "@material-tailwind/react";
import Image from 'next/image';
import '@/app/ui/Landing/landing.css';
export default function first() {
  return (
    <>
    <section className='flexing'>
        <div className='content'>
            <div className='protagonistText'>
                <h1 > Full stack Developer </h1>
            </div>
            <div className='protagonistFigure'>
                <Image 
                    src={'/Nirmal.jpg'}
                        height={1000}
                        width={300}
                        // className='protagonistFigure'
                    
                />
            </div>
        </div>
    </section>
    <div className='container'>
        {/* <div className='flex justify-center items-center h-[65rem] relative '>
            <div className="p-6 mx:30 bg-red-700 rounded-lg shadow-md ">
                <h2 className="text-2xl font-semibold mx-5 mb-4"> Full stack Developer <br></br></h2>
                <p className="text-gray-700">
                Hi there, I am Nirmal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam facilisis
                    nunc id risus bibendum, vel dictum nunc laoreet. Vivamus elementum risus
                    vel erat consectetur, at fringilla enim malesuada. Aliquam erat volutpat.
                </p>
            </div>
          
        </div> */}
        
    </div>
    </>
    
  )
}
