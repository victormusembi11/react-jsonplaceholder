import { Button } from "@/components/ui/button";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { SVGProps } from "react";
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const links = [
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Contact", path: "/contact" },
];

export function Navbar() {
  return (
    <header className="flex  w-full shrink-0 items-center px-4 my-2 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="mr-6 hidden lg:flex" to={`/`}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            {links.map((link) => (
              <Link
                className="flex w-full items-center py-2 text-lg font-semibold"
                to={link.path}
                key={link.id}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <Link className="mr-6 hidden lg:flex" to={`/`}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <NavigationMenu className="hidden lg:flex gap-6">
        <NavigationMenuList>
          {links.map((link) => (
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              key={link.id}
            >
              {link.title}
            </NavigationMenuLink>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export function MenuIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function MountainIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
