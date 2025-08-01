import Card from "@/components/Card/card";
import Nav from "@/components/SiteHeader/Nav";
import Logo from "@/components/SiteHeader/Logo";

const SiteHeader = () => {
	return (
		<Card
			className={
				"sticky top-1.5 z-50 flex justify-center border-y border-gray-400 shadow-lg sm:top-2.5 sm:border-y md:relative md:top-0 md:z-0 md:h-auto md:px-10"
			}
		>
			<header
				className={
					"relative flex h-20 w-full max-w-4xl flex-row items-center justify-between px-4 py-1 md:h-48 md:justify-between md:gap-7 md:py-6 lg:gap-10"
				}
			>
				<Logo />
				<Nav />
			</header>
		</Card>
	);
};

export default SiteHeader;
