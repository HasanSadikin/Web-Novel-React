import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { getNovels } from "../store/novel/novelSlice";
import { SuspenseNovelList } from "../components/home/SuspenseNovelList";
import { useEffect } from "react";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mb-16">
      <h1 className="text-center text-2xl py-10 font-bold">Home</h1>
      <SuspenseNovelList action={dispatch(getNovels())} />
    </div>
  );
}

export default HomePage;
