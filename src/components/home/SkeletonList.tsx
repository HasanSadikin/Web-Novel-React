interface Props {
  amount: number;
}

const SkeletonList = ({ amount }: Props) => {
  return (
    <ul className="grid grid-cols-1 gap-5 w-10/12 mx-auto">
      {Array(amount)
        .fill(0)
        .map((e, i) => (
          <li className="flex flex-col gap-4 w-full mx-auto" key={e + i}>
            <div className="skeleton aspect-square w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </li>
        ))}
    </ul>
  );
};

export default SkeletonList;
