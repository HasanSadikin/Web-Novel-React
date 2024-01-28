import GlowBorder from "./GlowBorder";

const GenresSection = () => {
  return (
    <div className="w-full py-16 h-fit poppins">
      <div className="flex flex-col w-10/12 gap-10 mx-auto h-fit lg:gap-5 lg:grid lg:w-3/4 xl:grid-cols-2">
        <div className="grid grid-cols-2 grid-rows-2 gap-3 my-auto md:grid-rows-1 xl:grid-rows-2 md:grid-cols-4 xl:grid-cols-2 lg:gap-5 xl:aspect-square">
          <div className="flex flex-col items-center justify-center gap-10 text-2xl leading-7 md:h-42 aspect-square md:aspect-auto xl:aspect-square md:py-10 bg-base-200">
            <div className="flex flex-col items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 57 57"
                strokeWidth="1.5"
                fill="currentColor"
                className="w-12 h-12 lg:w-16 lg:h-16"
              >
                <path d="M57,0h-8.837L18.171,29.992l-4.076-4.076l-1.345-4.034c-0.22-0.663-0.857-1.065-1.55-0.98  c-0.693,0.085-1.214,0.63-1.268,1.327l-0.572,7.438l5.982,5.982L4.992,46H2.274C1.02,46,0,47.02,0,48.274v6.452  C0,55.98,1.02,57,2.274,57h6.452C9.98,57,11,55.98,11,54.726v-3.421l10-10l6.021,6.021l6.866-1.145  c0.685-0.113,1.182-0.677,1.21-1.37c0.028-0.693-0.422-1.295-1.096-1.464l-3.297-0.824l-4.043-4.043L57,8.489V0z M9,54.726  C9,54.877,8.877,55,8.726,55H2.274C2.123,55,2,54.877,2,54.726v-6.452C2,48.123,2.123,48,2.274,48h0.718h5.734  C8.877,48,9,48.123,9,48.274v5.031V54.726z M11,48.477v-0.203C11,47.02,9.98,46,8.726,46H7.82l8.938-8.938l1.417,1.417l1.411,1.411  L11,48.477z M30.942,44.645l-3.235,0.54l-5.293-5.293l0,0l-2.833-2.833l-8.155-8.155l0.292-3.796l0.63,1.89l4.41,4.41l0,0  l4.225,4.225l8.699,8.699L30.942,44.645z M25.247,37.066l-2.822-2.822l-2.839-2.839L48.991,2h4.243L23.829,31.406  c-0.391,0.391-0.391,1.023,0,1.414c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293L55,3.062v4.592L25.247,37.066z" />
              </svg>
              <p className="text-sm text-center lg:text-md">
                100+ <br />
                Action
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 text-2xl leading-7 md:h-42 aspect-square md:aspect-auto xl:aspect-square md:py-10 bg-base-200">
            <div className="flex flex-col items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-12 h-12 lg:w-16 lg:h-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <p className="text-sm text-center lg:text-md">
                100+ <br />
                Romance
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 text-2xl leading-7 md:h-42 aspect-square md:aspect-auto xl:aspect-square md:py-10 bg-base-200">
            <div className="flex flex-col items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 56.598 56.598"
                fill="currentColor"
                className="w-12 h-12 lg:w-16 lg:h-16"
              >
                <g>
                  <path d="M31.02,21.428c0,0-0.001,0-0.001,0.001c0,0-0.001,0.001-0.001,0.001L0.092,52.355l4.243,4.242l40.341-40.342l-4.242-4.242   L31.02,21.428z M4.334,53.77L2.92,52.355L31.725,23.55l1.414,1.414L4.334,53.77z M34.554,23.55l-1.414-1.414l7.294-7.294   l1.414,1.414L34.554,23.55z" />
                  <path d="M40.506,9c0.552,0,1-0.447,1-1V1c0-0.553-0.448-1-1-1s-1,0.447-1,1v7C39.506,8.553,39.954,9,40.506,9z" />
                  <path d="M40.506,23c-0.552,0-1,0.447-1,1v7c0,0.553,0.448,1,1,1s1-0.447,1-1v-7C41.506,23.447,41.058,23,40.506,23z" />
                  <path d="M55.506,15h-7c-0.552,0-1,0.447-1,1s0.448,1,1,1h7c0.552,0,1-0.447,1-1S56.058,15,55.506,15z" />
                  <path d="M25.506,17h7c0.552,0,1-0.447,1-1s-0.448-1-1-1h-7c-0.552,0-1,0.447-1,1S24.954,17,25.506,17z" />
                  <path d="M46.506,11c0.256,0,0.512-0.098,0.707-0.293l4.95-4.95c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0l-4.95,4.95   c-0.391,0.391-0.391,1.023,0,1.414C45.994,10.902,46.25,11,46.506,11z" />
                  <path d="M47.213,21.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l4.95,4.95c0.195,0.195,0.451,0.293,0.707,0.293   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L47.213,21.293z" />
                  <path d="M33.799,10.707C33.994,10.902,34.25,11,34.506,11s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414l-4.95-4.95   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L33.799,10.707z" />
                </g>
              </svg>
              <p className="text-sm text-center lg:text-md">
                100+ <br />
                Fantasy
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:h-42 aspect-square md:aspect-auto xl:aspect-square md:py-10 bg-base-200">
            <h1 className="text-4xl">100+</h1>
            <p className="text-sm lg:text-md">More Genres</p>
          </div>
        </div>
        <div className="flex flex-col order-first gap-8 h-fit xl:my-auto xl:order-last xl:pl-16 xl:aspect-square">
          <h1 className="text-3xl font-semibold tracking-tight text-center lg:text-left lg:text-5xl">
            Dive into Diverse Genres, Ignite Your Passion!
          </h1>
          <p className="text-sm leading-8 text-center text-gray-400 lg:text-md lg:text-left">
            Explore diverse novels igniting your imagination and stirring your
            soul. From gripping thrillers to enchanting romances, each page
            holds a new adventure. Let your passion for storytelling come alive
            in these captivating tales, where endless possibilities await
          </p>
          <GlowBorder className="w-full rounded-lg lg:w-52">
            <button className="w-full btn btn-lg btn-primary btn-outline">
              Find Your Genre
            </button>
          </GlowBorder>
        </div>
      </div>
    </div>
  );
};

export default GenresSection;
