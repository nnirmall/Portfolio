'use client';
import Link from 'next/link';
import '@/app/ui/Landing/nav.css';
const links = [
    // {name: 'Nirmal', href: '/Landing'},
    {name: 'Home', href: '/Landing'},
    {name: 'About', href: '/about'},
    {name: 'Projects', href: '/projects'},
    {name: 'Contact', href: '/contact'},
];


export default function NabLinks() {
  return (
    <ul>
      {links.map((link)=>{
          return(
            // <li>
              <Link
                  key={link.name}
                  href={link.href}
              >
             {link.name}
              </Link>
            // </li>

          );
      })}
    </ul>
  )
}
