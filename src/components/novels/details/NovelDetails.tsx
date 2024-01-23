import { FC } from "react";
import { Novel } from "../../../store/novel/novelSlice";
import DetailsHeader from "./DetailsHeader";
import { Image } from "../../ui/Image";
import NovelAnalytics from "../NovelAnalytics";

interface Props {
  novel: Novel;
}

const NovelDetails: FC<Props> = ({ novel }) => {
  return (
    <div className="mb-20 mt-16">
      <DetailsHeader
        id={novel.id}
        name={novel.novel_name}
        author={novel.author}
      />
      <div className="relative">
        <div className="absolute top-0 left-0 z-[-10] object-cover aspect-square overflow-hidden">
          <Image imagePath={novel.image} className="blur-lg" />
        </div>
        <div className="flex items-center justify-center aspect-square">
          <div className="w-60 aspect-[3/4]">
            <Image imagePath={novel.image} />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto ">
        <div className="flex flex-col gap-2 items-center pt-10 pb-6">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-xl text-center">
              {novel.novel_name}
            </h1>
            <NovelAnalytics className="flex gap-2 pt-3" />
          </div>
          <h1 className="italic text-sm text-gray-500 pt-5">
            by {novel.author} - {novel.origin}
          </h1>
        </div>
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-lg font-semibold">Descriptions</h1>
          <p>{novel.description}</p>
          <button className="btn btn-primary w-full btn-lg my-10">
            Read First Chapter
          </button>
        </div>
        <div className="mt-3">
          <h1 className="text-lg font-semibold text-center mb-5">Comments</h1>
          <textarea
            className="textarea textarea-primary w-full leading-5 p-3 h-24"
            placeholder="Write Your Comment..."
          ></textarea>
          <button className="btn btn-primary btn-sm w-full">Post</button>
        </div>
        <div className="mt-5">
          <ul className="flex flex-col gap-2">
            <li className="grid grid-cols-11 p-5 gap-3 border rounded-lg border-primary">
              <div className="col-span-2 aspect-square bg-primary rounded-full"></div>
              <div className="col-span-9 flex flex-col gap-4">
                <h1>email</h1>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                  unde.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-11 p-5 gap-3 border rounded-lg border-primary">
              <div className="col-span-2 aspect-square bg-primary rounded-full"></div>
              <div className="col-span-9 flex flex-col gap-4">
                <h1>email</h1>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                  unde.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-11 p-5 gap-3 border rounded-lg border-primary">
              <div className="col-span-2 aspect-square bg-primary rounded-full"></div>
              <div className="col-span-9 flex flex-col gap-4">
                <h1>email</h1>
                <p className="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea,
                  unde.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NovelDetails;