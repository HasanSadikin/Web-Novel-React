type SliderProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "vertical" | "horizontal";
  fadeColor?: string;
};

const InfinitySlider = ({
  className,
  children,
  direction = "horizontal",
  fadeColor = "from-base-100",
}: SliderProps) => {
  let spanClassTop = "";
  let spanClassBottom = "";

  switch (direction) {
    case "vertical":
      spanClassTop = "top-0 left-0 h-24 bg-gradient-to-b w-full";
      spanClassBottom = "bottom-0 right-0 h-24 bg-gradient-to-t w-full";
      break;
    case "horizontal":
      spanClassTop = "top-0 left-0 h-full bg-gradient-to-r w-24";
      spanClassBottom = "top-0 right-0 h-full bg-gradient-to-l w-24";
      break;
    default:
      break;
  }

  return (
    <>
      <div className={`relative flex overflow-hidden ${className}`}>
        <span className={`absolute ${fadeColor} z-[10] ${spanClassTop}`}></span>
        {children}
        {children}
        <span
          className={`absolute ${fadeColor} z-[10] ${spanClassBottom}`}
        ></span>
      </div>
    </>
  );
};

export default InfinitySlider;
