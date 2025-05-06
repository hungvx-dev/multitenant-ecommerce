"use client";

import { useState } from "react";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { NavbarSidebar } from "./navbar-sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

type NavbarItemProps = {
  children: React.ReactNode;
  href: string;
  isActive?: boolean;
};

const NavbarItem = ({ children, href, isActive }: NavbarItemProps) => {
  return (
    <Button
      asChild
      variant={isActive ? "default" : "outline"}
      className={cn(isActive || "hover:border-primary border-transparent shadow-none")}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-20 justify-between border-b bg-white px-6 font-medium">
      <Link href="/" className="flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>funroad</span>
      </Link>

      <NavbarSidebar items={navbarItems} open={isSidebarOpen} onOpenChange={setIsSidebarOpen} />

      <div className="hidden items-center gap-4 lg:flex">
        {navbarItems.map((item) => (
          <NavbarItem key={item.href} {...item} isActive={pathname === item.href} />
        ))}
      </div>

      <div className="-mr-6 hidden lg:flex">
        <Button
          asChild
          variant="secondary"
          className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-white px-12 text-lg transition-colors hover:bg-pink-400"
        >
          <Link href="sign-in">Log in</Link>
        </Button>

        <Button
          asChild
          variant="secondary"
          className="h-full rounded-none border-t-0 border-r-0 border-b-0 border-l bg-black px-12 text-lg text-white transition-colors hover:bg-pink-400 hover:text-black"
        >
          <Link href="sign-up">Sign up</Link>
        </Button>
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant="ghost"
          className="size-12 border-transparent bg-white"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      </div>
    </div>
  );
};
