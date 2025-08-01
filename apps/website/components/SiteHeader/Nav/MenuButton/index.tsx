const MenuButton = ({
	navOpened,
	toggleNav,
}: {
	navOpened: boolean;

	toggleNav: () => void;
}) => {
	const barStyles =
		"transform rounded border-b-2 border-current ease-in-out w-8 inline-block";

	return (
		<button
			className={`flex flex-col items-end border-red-500 text-gray-900 md:hidden`}
			onClick={toggleNav}
			type={"button"}
			aria-expanded={navOpened}
			aria-controls={"navbarDropdown"}
			aria-label={
				navOpened ? "Close Navigation Bar" : "Open Navigation Bar"
			}
		>
			<span
				className={`${barStyles} origin-center`}
				style={{
					transition: navOpened
						? "translate 0.25s, transform 0.25s 0.25s"
						: "transform 0.25s, translate 0.25s 0.25s",
					translate: navOpened ? "0 calc(0.5rem + 2px)" : "0 0",
					transform: navOpened ? "rotate(45deg)" : "",
				}}
			></span>
			<span
				className={`${barStyles} mt-2`}
				style={{
					opacity: navOpened ? 0 : 1,
					transition: "opacity 0s 0.25s",
				}}
			></span>
			<span
				className={`${barStyles} mt-2 origin-center`}
				style={{
					transition: navOpened
						? "translate 0.25s, transform 0.25s 0.25s"
						: "transform 0.25s, translate 0.25s 0.25s",
					translate: navOpened
						? "0 calc(-1 * (0.5rem + 2px))"
						: "0 0",
					transform: navOpened ? "rotate(-45deg)" : "",
				}}
			></span>
		</button>
	);
};

export default MenuButton;
