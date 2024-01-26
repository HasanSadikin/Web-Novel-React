interface Props {
  children: React.ReactNode;
  amount?: number;
}

const AnalyticsIcon = ({ children, amount = 1200 }: Props) => {
  function stringfy(number: number) {
    if (number < 1000) {
      return number;
    }
    return `${Math.round(number / 1000)}K`;
  }
  return (
    <>
      {children}
      <p className="">{stringfy(amount)}</p>
    </>
  );
};

export default AnalyticsIcon;
