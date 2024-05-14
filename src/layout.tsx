import React from "react";
import { Separator } from "@/components/ui/separator";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Separator />
      <div className="container">
        <Outlet />
        {children}
      </div>
    </>
  );
}
