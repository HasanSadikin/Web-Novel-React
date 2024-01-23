import React from "react";
import AnalyticsIcon from "./AnalyticsIcon";
import { EyeIcon } from "../icons/EyeIcon";
import StarIcon from "../icons/StarIcon";
import BookmarkIcon from "../icons/BookmarkIcon";

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
      {data.map((x, i) => (
        <li className="flex items-center gap-1 text-xs" key={i}>
          {x}
        </li>
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
      <EyeIcon className="w-3.5 h-3.5" />
    </AnalyticsIcon>
  );
}

function Star({ amount }: AnalyticIconProps) {
  return (
    <AnalyticsIcon amount={amount}>
      <StarIcon className="w-3.5 h-3.5" />
    </AnalyticsIcon>
  );
}

function Bookmark({ amount }: AnalyticIconProps) {
  return (
    <AnalyticsIcon amount={amount}>
      <BookmarkIcon className="w-3.5 h-3.5" />
    </AnalyticsIcon>
  );
}
