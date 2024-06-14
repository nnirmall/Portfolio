"use client";
import { StickyNavbar } from "../components/StickyNavbar";

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
    <div className="">
      <StickyNavbar />
    </div>
    {/* <first/> */}
    <div className="">{children}</div>        
    </>
  );
}