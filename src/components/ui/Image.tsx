import { useSupabaseImage } from "../../hooks/useSupabaseImage";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  imagePath: string;
}

export function Image({ imagePath, ...props }: Props) {
  const [image, isLoading] = useSupabaseImage(imagePath);
  return (
    <>
      {!isLoading && <img src={image} {...props} />}
      {isLoading && <div className="skeleton w-full h-full"></div>}
    </>
  );
}
