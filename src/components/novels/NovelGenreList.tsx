interface Props {
  genres: string[];
  amount?: number;
}

export function NovelGenreList({ genres, amount = 5 }: Props) {
  const slicedGenres = genres.slice(0, amount);
  const haveMoveGenre = amount < genres.length;
  const moreGenre = genres.length - amount;
  return (
    <ul className="text-xs flex flex-wrap gap-1 mt-2">
      {slicedGenres.map((x, i) => (
        <li className="bg-primary text-black px-3 rounded-full h-fit" key={i}>
          {x}
        </li>
      ))}
      {haveMoveGenre && (
        <li className="bg-primary text-black px-3 rounded-full h-fit" key={"p"}>
          {moreGenre}+ more
        </li>
      )}
    </ul>
  );
}