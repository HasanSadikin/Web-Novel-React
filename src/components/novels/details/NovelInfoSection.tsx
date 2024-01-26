import NovelAnalytics from "../NovelAnalytics";

type Props = {
  novel_name: string;
  novel_author: string;
  novel_origin: string;
};

const NovelInfoSection = ({
  novel_name,
  novel_author,
  novel_origin,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 items-center pt-10 pb-6">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl text-center">{novel_name}</h1>
        <NovelAnalytics className="flex gap-2 pt-3" />
      </div>
      <h1 className="italic text-sm text-gray-500 pt-5">
        by {novel_author} - {novel_origin}
      </h1>
    </div>
  );
};

export default NovelInfoSection;
