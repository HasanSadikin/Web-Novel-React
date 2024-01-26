type SliderProps = {
  children: React.ReactNode;
  className?: string;
};

const InfinitySlider = ({ className, children }: SliderProps) => {
  return (
    <>
      <div className={`flex overflow-hidden ${className}`}>
        {/* <div
          className={`flex`}
          style={{
            animationName: dir,
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {children}
        </div>
        <div
          className={`flex`}
          style={{
            animationName: dir,
            animationDuration: `${speed}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          {children}
        </div> */}
        {children}
        {children}
      </div>
    </>
  );
};

export default InfinitySlider;
