import Image from "../../ui/Image";

type Props = {
  novel_image: string;
};

const ImageSection = ({ novel_image }: Props) => {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 z-[-10] object-cover aspect-square overflow-hidden">
        <Image imagePath={novel_image} className="blur-lg" />
      </div>
      <div className="flex items-center justify-center aspect-square">
        <div className="w-60 aspect-[3/4]">
          <Image imagePath={novel_image} />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
