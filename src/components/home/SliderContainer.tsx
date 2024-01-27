import classes from "./InfinitySlider.module.css";

interface SliderContainerProps {
  children: React.ReactNode;
  direction?: "up" | "right" | "down" | "left";
  speed?: number;
  className?: string;
}

const SliderContainer = ({
  children,
  speed = 5,
  direction = "left",
  className,
}: SliderContainerProps) => {
  let dir = "";

  switch (direction) {
    case "up":
      dir = classes.SlideUp;
      break;
    case "right":
      dir = classes.SlideRight;
      break;
    case "down":
      dir = classes.SlideDown;
      break;
    case "left":
      dir = classes.SlideLeft;
      break;
    default:
      break;
  }

  return (
    <div
      className={`flex ${className}`}
      style={{
        animationName: dir,
        animationDuration: `${speed}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;
