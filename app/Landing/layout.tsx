"use client";
import { StickyNavbar } from "../ui/Landing/StickyNavbar";
import Nav from "../ui/Landing/nav";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <StickyNavbar />
    </div>
    <div className="">{children}</div>        
    </>
  );
}