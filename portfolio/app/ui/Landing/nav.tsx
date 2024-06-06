import Link from "next/link"
import NabLinks from "./nav-links"
import Image from "next/image"


export default function Nav() {
  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
            className="flex items-center space-x-3 rtl:space-x-reverse"
        href="/"
        >
            <Image className="h-8" alt="Flowbite Logo"
             src={"https://flowbite.com/docs/images/logo.svg"}
             width={50}
             height={50}
             />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nirmal</span>
        </Link>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <NabLinks/>
            </ul>
        </div>
    </div>
  )
}
