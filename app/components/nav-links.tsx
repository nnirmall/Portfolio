'use client'
import React from "react";
import Link from 'next/link';
// import '@/app/ui/Landing/nav.css';
import clsx from 'clsx';
import {
  Typography,
} from "@material-tailwind/react";

const links = [
    // {name: 'Nirmal', href: '/Landing'},
    {name: 'Home', href: '#'},
    {name: 'About', href: '#'},
    {name: 'Projects', href: '#'},
    {name: 'Contact', href: '#'},
];


export default function NabLinks() {
  return (
    <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        {links.map((link)=>{
        return(
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center p-1 font-small blue-gray"
                >
                {link.name}
              </Link>
        );
      })}

    </ul>
  )
}
