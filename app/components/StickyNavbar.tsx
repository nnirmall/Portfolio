'use client'
import React from "react";

import {
  Navbar,
  Button,
 
} from "@material-tailwind/react";
import NabLinks from "./nav-links";

export function StickyNavbar() {
  return (
    <>
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-gray-900">
          <div className="mr-4 cursor-pointer py-1.5 font-medium">Nirmal Bhandari</div>
          <div className="flex items-center gap-4">
            <div className="mr-4  lg:block"><NabLinks/></div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="lg:inline-block"
              >
              <span>Log In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="lg:inline-block"
              >
              <span>Sign in</span>
              </Button>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
}