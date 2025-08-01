import { Post } from "@/payload-types";
import { Image } from "../Image";

const FeaturedImage = ({
	image,
	className,
	imageClassName,
}: {
	image: Post["heroImage"];
	className?: string;
	imageClassName?: string;
}) => {
	return (
		<div
			className={`relative flex w-full justify-center${className ? ` ${className}` : ""}`}
		>
			<Image
				payloadImage={image}
				className={`h-[40vh] max-h-[40vh] w-full max-w-6xl object-cover ${imageClassName ? ` ${imageClassName}` : ""}`}
				// sizes="(max-width: 56em) 100vw"
			/>
		</div>
	);
};

export default FeaturedImage;
