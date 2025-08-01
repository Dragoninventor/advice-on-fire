"use client";

import { ReactNode } from "react";
import IconsProvider from "@/components/Providers/IconContext";

const Providers = ({ children }: { children: ReactNode }) => {
	return <IconsProvider>{children}</IconsProvider>;
};

export default Providers;
