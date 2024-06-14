'use-client';
import '@/app/globals.css';
import Image from 'next/image';
import React from "react";

export default function Landing() {
  return (
    <>
    <div className='h-max w-full py-3 m-0' >
        <div className=' flex flex-row space-x-4'>
            <div className=' flex ml-96 px-5 py-5 mt-16 mb-5 w-3/4'>
            <div className='mr-24'>
                <h1 className='text-5xl'>
                    Full-Stack <span>Developer</span>

                </h1>
                <div className='flex flex-row mt-1'>
                    <div className='text-xl ml-1 '>

                        Hi there, I am Nirmal Bhandari. 

                    </div>
                    <div className='ml-1'>  
                        <Image
                        src={'/hand.jpg'}
                        height={50}
                        width={25}
                        alt={'picture of hand'} 
                    />
                    </div>
                </div>
            </div>
            <div>
                <Image
                    src={'/asd.png'}
                    height={300}
                    width={300}
                    alt={'picture of user'} 
                />

                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}
