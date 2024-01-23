import React from "react";
import AnalyticsIcon from "./AnalyticsIcon";

interface Props extends React.HtmlHTMLAttributes<HTMLUListElement> {
  amount?: number;
}

function NovelAnalytics({ amount = 1200, ...props }: Props) {
  const data = [
    <Eye amount={amount} />,
    <Star amount={amount} />,
    <Bookmark amount={amount} />,
  ];
  return (
    <ul {...props}>
      {data.map((x) => (
        <li className="flex items-center gap-1 text-xs">{x}</li>
      ))}
    </ul>
  );
}

export default NovelAnalytics;

interface AnalyticIconProps {
  amount: number;
}

function Eye({ amount }: AnalyticIconProps) {
  return (
    <AnalyticsIcon amount={amount}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
      >
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path
          fillRule="evenodd"
          d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
          clipRule="evenodd"
        />
      </svg>
    </AnalyticsIcon>
  );
}

function Star({ amount }: AnalyticIconProps) {
  return (
    <AnalyticsIcon amount={amount}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
          clipRule="evenodd"
        />
      </svg>
    </AnalyticsIcon>
  );
}

function Bookmark({ amount }: AnalyticIconProps) {
  return (
    <AnalyticsIcon amount={amount}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-3.5 h-3.5"
      >
        <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.708V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
      </svg>
    </AnalyticsIcon>
  );
}
