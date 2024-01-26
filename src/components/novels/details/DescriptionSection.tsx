type Props = {
  novel_description: string;
};

const DescriptionSection = ({ novel_description }: Props) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-lg font-semibold">Descriptions</h1>
      <p>{novel_description}</p>
    </div>
  );
};

export default DescriptionSection;
