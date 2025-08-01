import { ReactNode } from "react";
import { IconContext } from "react-icons";

const IconsProvider = ({ children }: { children: ReactNode }) => {
	return (
		<IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
			{children}
		</IconContext.Provider>
	);
};

export default IconsProvider;
