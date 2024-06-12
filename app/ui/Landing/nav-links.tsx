import React from "react";
import Link from 'next/link';
import '@/app/ui/Landing/nav.css';
import clsx from 'clsx';
import {
  Typography,
} from "@material-tailwind/react";

const links = [
    // {name: 'Nirmal', href: '/Landing'},
    {name: 'Home', href: '/Landing'},
    {name: 'About', href: '/Landing'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'},
];


export default function NabLinks() {
  return (
    <>
    <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    
        {links.map((link)=>{
        return(
          <>
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="p-1 font-normal"
            >
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center"
                >
                {link.name}
              </Link>
           </Typography>
            
          </>
        );
      })}
  
    </ul>
    </>
  )
}
