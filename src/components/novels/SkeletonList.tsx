interface Props {
  amount: number;
}

const SkeletonList = ({ amount }: Props) => {
  return (
    <ul className="grid w-11/12 grid-cols-1 gap-5 mx-auto lg:grid-cols-3 md:grid-cols-2">
      {Array(amount)
        .fill(0)
        .map((e, i) => (
          <Skeleton key={e + i} />
        ))}
    </ul>
  );
};

export default SkeletonList;

function Skeleton() {
  return (
    <li className="grid grid-cols-12 aspect-[5/2] overflow-hidden rounded-lg">
      <div className="col-span-3 skeleton"></div>
      <div className="flex flex-col col-span-9 gap-2 px-4">
        <div className="w-32 h-4 skeleton"></div>
        <div className="w-20 h-4 skeleton"></div>
        <div className="w-20 h-4 skeleton"></div>
        <div className="w-full h-3 skeleton"></div>
        <div className="w-full h-3 skeleton"></div>
        <div className="w-full h-3 skeleton"></div>
        <div className="flex gap-2">
          <div className="w-12 h-4 skeleton"></div>
          <div className="w-12 h-4 skeleton"></div>
          <div className="w-12 h-4 skeleton"></div>
        </div>
      </div>
    </li>
  );
}
