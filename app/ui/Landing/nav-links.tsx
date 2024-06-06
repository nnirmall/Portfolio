'use client';
import {
    UserCircleIcon,
    CodeBracketSquareIcon,
    FolderIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import '@/app/ui/Landing/nav.css';
const links = [
    // {name: 'Nirmal', href: '/Landing'},
    {name: 'Home', href: '/Landing'},
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'},
];


export default function NabLinks() {
    const pathname = usePathname();
  return (
    <>
    <ul>
      {links.map((link)=>{
          return(
            <li>
              <Link
                  key={link.name}
                  href={link.href}
              >
             {link.name}
              </Link>
            </li>

          );
      })}
    </ul>
    </>
  )
}
