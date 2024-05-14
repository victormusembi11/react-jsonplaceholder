import React from "react";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/Sidebar";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <div className="max-h-screen flex-col">
        <div>
          <Navbar />
          <Separator />
        </div>
        <div className="container flex w-full py-8 max-h-screen">
          <Sidebar />
          <ScrollArea className="w-full flex-grow mx-8 pr-4">
            <Outlet />
            {children}
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
