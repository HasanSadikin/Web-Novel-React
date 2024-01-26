import React from "react";
import AnalyticsIcon from "./AnalyticsIcon";
import { EyeIcon } from "../icons/EyeIcon";
import StarIcon from "../icons/StarIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import {
  useBookmarkCount,
  useLikeCount,
  useViewsCount,
} from "../../hooks/useBookmarkCount";

interface Props extends React.HtmlHTMLAttributes<HTMLUListElement> {
  novel_id: number;
}

function NovelAnalytics({ novel_id, ...props }: Props) {
  const liked = useLikeCount(novel_id);
  const bookmarked = useBookmarkCount(novel_id);
  const views = useViewsCount(novel_id);

  const data = [
    <Eye amount={views} />,
    <Star amount={liked} />,
    <Bookmark amount={bookmarked} />,
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
