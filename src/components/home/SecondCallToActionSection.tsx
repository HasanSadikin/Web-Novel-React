import GlowBorder from "./GlowBorder";

const SecondCallToActionSection = () => {
  return (
    <div className="poppins w-10/12 mx-auto lg:w-full h-[32rem] flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl font-semibold text-center lg:text-5xl ">
        Many People Are Waiting For You
      </h1>
      <div className="flex flex-col w-full gap-2 lg:gap-5 lg:w-fit lg:flex-row">
        <button className="w-full btn lg:btn-lg btn-primary lg:w-52">
          Start Reading
        </button>
        <GlowBorder className="rounded-lg">
          <button className="w-full btn lg:btn-lg btn-primary lg:w-52 btn-outline">
            Share Your Stories
          </button>
        </GlowBorder>
      </div>
    </div>
  );
};

export default SecondCallToActionSection;
