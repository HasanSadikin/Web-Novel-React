interface Props {
  amount: number;
}

const SkeletonList = ({ amount }: Props) => {
  return (
    <ul className="grid grid-cols-1 gap-5 w-11/12 mx-auto ">
      {Array(amount)
        .fill(0)
        .map((e, i) => (
          <li
            className="grid grid-cols-12 aspect-[5/2] overflow-hidden rounded-lg"
            key={e + i}
          >
            <div className="skeleton col-span-3"></div>
            <div className="col-span-9 flex flex-col gap-2 px-4">
              <div className="skeleton w-32 h-4"></div>
              <div className="skeleton w-20 h-4"></div>
              <div className="skeleton w-20 h-4"></div>
              <div className="skeleton w-full h-3"></div>
              <div className="skeleton w-full h-3"></div>
              <div className="skeleton w-full h-3"></div>
              <div className="flex gap-2">
                <div className="skeleton w-12 h-4"></div>
                <div className="skeleton w-12 h-4"></div>
                <div className="skeleton w-12 h-4"></div>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default SkeletonList;
