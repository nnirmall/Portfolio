'use client'
import React, { useState } from "react";
import Link from 'next/link';
// import '@/app/ui/Landing/nav.css';
import clsx from 'clsx';
import {
  Typography,
} from "@material-tailwind/react";
import Landing from "./Landing";

const links = [
    // {name: 'Nirmal', href: '/Landing'},
    {name: 'Home', href: '#'},
    {name: 'About', href: '#about'},
    {name: 'Projects', href: '#project'},
    {name: 'Contact', href: '#'},
];


export default function NabLinks() {
  const [activeSection, setActiveSection] = useState('home');

  const handleLinkClick = (sectionName: any) => {
    setActiveSection(sectionName.toLowerCase());
  };

  return (
    <div>
      <nav>
        <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="flex items-center p-1 font-small blue-gray"
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
