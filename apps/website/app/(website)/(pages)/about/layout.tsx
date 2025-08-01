import { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter/footer";

const HomeLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			{children}
			<SiteFooter />
		</>
	);
};

export default HomeLayout;
