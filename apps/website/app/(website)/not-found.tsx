import Card from "@/components/Card/card";
import React from "react";
import { Content } from "@/components/Content";

export const generateMetadata = async () => {
	return {
		title: "404 - Page not found",
	};
};

const NotFound = async () => {
	return (
		<main>
			<Card className={`h-full px-2 pb-4 pt-2`}>
				<Content>
					<h1 className={`mb-2 mt-4 text-4xl leading-snug`}>
						404 - Page Not Found
					</h1>
				</Content>
			</Card>
		</main>
	);
};

export default NotFound;
