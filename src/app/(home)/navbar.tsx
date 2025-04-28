"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
		<Button asChild variant={isActive ? "default" : "outline"}>
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

type Props = {};

export const Navbar = (props: Props) => {
	const pathname = usePathname();
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	return (
		<div className="h-20 flex px-6 border-b justify-between font-medium bg-white">
			<Link href="/" className="flex items-center">
				<span className={cn("text-5xl font-semibold", poppins.className)}>
					funroad
				</span>
			</Link>

			<NavbarSidebar
				items={navbarItems}
				open={isSidebarOpen}
				onOpenChange={setIsSidebarOpen}
			/>

			<div className="items-center gap-4 hidden lg:flex">
				{navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						{...item}
						isActive={pathname === item.href}
					/>
				))}
			</div>

			<div className="hidden lg:flex">
				<Button
					asChild
					variant="secondary"
					className="border-l border-r-0 border-b-0 border-t-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
				>
					<Link href="sign-in">Log in</Link>
				</Button>

				<Button
					asChild
					variant="secondary"
					className="border-l border-r-0 border-b-0 border-t-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
				>
					<Link href="sign-up">Sign up</Link>
				</Button>
			</div>

			<div className="lg:hidden flex items-center justify-center">
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
