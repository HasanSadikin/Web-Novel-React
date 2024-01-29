import { Link } from "react-router-dom";
import GlowBorder from "./GlowBorder";
import InfinitySlider from "./InfinitySlider";
import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";
import { NOVELS_ACCOUNT } from "../../utils/routes";

const TestimonySection = () => {
  const data = [
    {
      name: "Jane Doe",
      novel: "Reincarnation of the Strongest Sword God",
      comment: "Well, To be fair he's a prick, and nobody likes a prick",
    },
    {
      name: "Dane Joe",
      novel: "My Last Time With Her",
      comment:
        "I did not see that coming! How can she's so beautiful yet so wretched at heart?",
    },
    {
      name: "Joane Ed",
      novel: "Being a Goblin Is Not So Bad",
      comment: "This is funny as hell! can't wait for the next chapter",
    },
  ];
  return (
    <div className="overflow-hidden">
      <div className="w-full mx-auto rounded-lg lg:w-11/12 h-fit poppins bg-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[42rem] w-10/12 lg:w-3/4 mx-auto gap-10 py-10 lg:py-0">
          <div className="lg:aspect-[6/4] my-auto flex flex-col gap-5">
            <h1 className="text-3xl font-semibold tracking-tight text-center lg:text-left lg:text-5xl">
              Our Delighted Community
            </h1>
            <p className="text-sm leading-8 text-gray-400 lg:text-md">
              Experience the joy of our delighted community! Join us in
              celebrating the magic of storytelling and shared passion for
              meaningful experiences
            </p>
            <Link to={NOVELS_ACCOUNT}>
              <GlowBorder className="w-full rounded-lg lg:w-52">
                <button className="w-full btn lg:btn-lg btn-primary btn-outline">
                  Join Us
                </button>
              </GlowBorder>
            </Link>
          </div>
          <div className="relative h-[20rem] lg:h-full my-auto">
            <div className="top-0 left-0 flex w-full h-full gap-10 lg:absolute lg:py-10 lg:w-fit">
              <InfinitySlider fadeColor="from-base-200" className="flex">
                <SliderContainer
                  speed={35}
                  className="flex items-center lg:my-10"
                >
                  {data.map((x) => (
                    <SliderItem className="ml-10">
                      <GlowBorder className="aspect-[4/2] w-[18rem] lg:w-[32rem] rounded-lg border border-primary bg-base-100 p-5 lg:p-10 gap-5 flex flex-col">
                        <div className="flex flex-col items-center gap-2 lg:flex-row">
                          <div className="avatar">
                            <div className="w-20 rounded-full">
                              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                          </div>
                          <div className="flex flex-col items-center pl-5 lg:items-start">
                            <h1 className="text-lg font-semibold lg:text-2xl">
                              {x.name}
                            </h1>
                            <h1 className="text-xs italic text-center text-gray-400 lg:text-sm lg:text-left">
                              {x.novel}
                            </h1>
                          </div>
                        </div>
                        <p className="text-sm text-center lg:text-left lg:text-md">
                          "{x.comment}"
                        </p>
                      </GlowBorder>
                    </SliderItem>
                  ))}
                </SliderContainer>
              </InfinitySlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonySection;
