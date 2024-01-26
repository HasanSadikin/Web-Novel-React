type SliderItemProps = {
  className?: string;
  children: React.ReactNode;
};

const SliderItem = ({ className, children }: SliderItemProps) => {
  return <div className={`overflow-hidden ${className}`}>{children}</div>;
};

export default SliderItem;
