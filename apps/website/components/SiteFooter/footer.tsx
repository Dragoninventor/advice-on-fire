"use client";

import { DateTime } from "luxon";
import Card from "@/components/Card/card";
import { ReactNode } from "react";

const SiteFooter = ({ children }: { children?: ReactNode }) => {
	return (
		<Card className={"rounded p-12"}>
			<footer
				className={"flex flex-col items-center justify-center gap-6"}
			>
				{children}
				<p
					className={
						"font-(family-name:--font-caption-default) text-sm"
					}
				>
					© Copyright {DateTime.now().year} Advice On Fire.{" "}
					<span style={{ display: "inline-block" }}>
						All rights reserved.
					</span>
				</p>
			</footer>
		</Card>
	);
};

export default SiteFooter;
