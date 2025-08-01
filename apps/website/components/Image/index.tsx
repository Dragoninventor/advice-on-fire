import NextImage from "next/image";
import { ImageProps, parseImage } from "@/utilities/parseImage";

export const Image = (props: ImageProps) => {
	const image = parseImage(props);
	if (!image) return null;

	const fill = image.fill ?? !(image.width && image.height);

	return (
		<NextImage
			src={image.src}
			alt={image.alt}
			className={`overflow-hidden rounded-sm ${image.className ? ` ${image.className}` : ""}`}
			width={!fill ? image.width : undefined}
			height={!fill ? image.height : undefined}
			fill={fill}
		/>
	);
};
