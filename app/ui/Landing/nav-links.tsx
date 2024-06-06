'use client';
import {
    UserCircleIcon,
    CodeBracketSquareIcon,
    FolderIcon,
  } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    {name: 'Home', href: '/', icon: UserCircleIcon},
    {name: 'Projects', href: '/projects', icon: CodeBracketSquareIcon},
    {name: 'Websites', href: '/websites', icon: FolderIcon},
    // {name: 'Websites', href: '/websites', icon: FolderIcon},
];


export default function NabLinks() {
    const pathname = usePathname();
  return (
    <>
    {links.map((link)=>{
        const LinkIcon = link.icon;
        return(
            <Link
                key={link.name}
                href={link.href}
                className={
                    'flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    }
            >
            <LinkIcon className="hidden md:block " />
            <p className="">{link.name}</p>
            </Link>
        );
    })}
    </>
  )
}
