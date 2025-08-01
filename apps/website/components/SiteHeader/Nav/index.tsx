"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuButton from "@/components/SiteHeader/Nav/MenuButton";

const Nav = () => {
	const [opened, setOpened] = useState(false);
	const [smoothTransition, setSmoothTransition] = useState(true);

	const navStyles = "";

	const pathname = usePathname();

	useEffect(() => {
		setSmoothTransition(false);
		setOpened(false);
		setSmoothTransition(true);
	}, [pathname]);

	useEffect(() => {
		if (opened) {
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
		}
	}, [opened]);

	return (
		<>
			<nav
				className={`${
					opened
						? "opacity-100"
						: "pointer-events-none h-20 opacity-0"
				} font-(family-name:--font-caption-default) absolute left-0 top-0 -z-10 flex w-screen flex-col items-center gap-16 rounded border-b border-gray-300 bg-gray-50 py-20 text-lg shadow-lg shadow-gray-400/30 transition-all duration-200 sm:w-full md:pointer-events-auto md:relative md:z-0 md:h-auto md:min-h-0 md:items-end md:border-none md:bg-none md:py-0 md:text-gray-950 md:opacity-100 md:shadow-none`}
			>
				<Link
					href={"/"}
					className={navStyles}
					aria-current={pathname === "/" ? "page" : undefined}
				>
					Home
				</Link>
				<Link
					href={"/about"}
					className={navStyles}
					aria-current={pathname === "/about" ? "page" : undefined}
				>
					About
				</Link>
				{/* TODO: Add contact page */}
				{/*<Link*/}
				{/*	href={"/contact"}*/}
				{/*	className={navStyles}*/}
				{/*	aria-current={pathname === "/contact" ? "page" : undefined}*/}
				{/*>*/}
				{/*	Contact*/}
				{/*</Link>*/}
			</nav>
			<MenuButton
				navOpened={opened}
				toggleNav={() => setOpened(!opened)}
			/>
		</>
	);
};

export default Nav;
