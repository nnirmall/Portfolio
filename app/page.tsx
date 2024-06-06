// import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
// import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={'text-xl text-gray-800 md:text-3xl md:leading-normal'}>
            <strong>Welcome to my portfolio.</strong> Click this{' '}
            <a href="/Landing" className="text-blue-500">
             Landing Page {' '}
            </a>
             link to go to the portfolio
          </p>
          <Link
            href="/Landing"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Take me to the Landing Page </span> <ArrowRightIcon className="w-5 md:w-6" />
            
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src={"/Nirmal.jpg"}
            width={1000}
            height={760}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop version'
          />
          <Image
          src={"/Nirmal.jpg"}
          width={560}
          height={620}
          className='block md:hidden'
          alt='Screenshots of the dashboard project showing mobile version'
          />
        </div>
      </div>
    </main>
  );
}
