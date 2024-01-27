const GenresSection = () => {
  return (
    <div className="w-full h-screen poppins">
      <div className="h-full w-3/4 mx-auto grid grid-cols-2 gap-5">
        <div className=" aspect-square my-auto grid grid-cols-2 grid-rows-2 gap-5">
          <div className=" bg-base-200"></div>
          <div className=" bg-base-200"></div>
          <div className=" bg-base-200"></div>
          <div className=" bg-base-200"></div>
        </div>
        <div className=" aspect-square my-auto flex flex-col gap-8 pl-16">
          <h1 className="text-5xl font-semibold tracking-tight ">
            Dive into Diverse Genres, Ignite Your Passion!
          </h1>
          <p className="text-gray-400 leading-8">
            Explore diverse novels igniting your imagination and stirring your
            soul. From gripping thrillers to enchanting romances, each page
            holds a new adventure. Let your passion for storytelling come alive
            in these captivating tales, where endless possibilities await
          </p>
          <button className="btn btn-lg btn-primary w-52 btn-outline">
            Find Your Genre
          </button>
        </div>
      </div>
    </div>
  );
};

export default GenresSection;
