import { useMediaQuery } from "react-responsive";
import Image1 from "../../images/2a2.webp";
import Image2 from "../../images/cover-10-rev.webp";
import Image3 from "../../images/novel1.webp";
import Image4 from "../../images/ominescent-reader.webp";
import InfinitySlider from "./InfinitySlider";
import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";
import { Link } from "react-router-dom";
import { NOVELS_HOME } from "../../utils/routes";

const HeroSection = () => {
  const md = useMediaQuery({ query: "(min-width: 768px)" });
  const lg = useMediaQuery({ query: "(max-width: 1023px)" });

  const isMd = md && lg;

  return (
    <div
      className={`w-full lg:h-[32rem] overflow-hidden poppins mt-16 lg:mt-32`}
    >
      <div className="flex flex-col w-10/12 h-full gap-2 mx-auto lg:gap-4 lg:grid lg:w-9/12 lg:grid-cols-10 lg:grid-rows-6 ">
        {isMd && (
          <>
            <InfinitySlider className="flex" direction="horizontal">
              <SliderContainer className="flex" direction="left" speed={20}>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image1} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image2} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image3} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image4} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image2} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image3} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image4} alt="" className="" />
                </SliderItem>
              </SliderContainer>
            </InfinitySlider>
            <InfinitySlider className="flex" direction="horizontal">
              <SliderContainer className="flex" direction="right" speed={20}>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image1} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image2} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image3} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image4} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image2} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image3} alt="" className="" />
                </SliderItem>
                <SliderItem className="ml-2 w-24 aspect-[3/4] object-cover">
                  <img src={Image4} alt="" className="" />
                </SliderItem>
              </SliderContainer>
            </InfinitySlider>
          </>
        )}
        {!isMd && (
          <InfinitySlider
            className="flex-col hidden lg:col-span-2 lg:row-span-6 md:flex"
            direction="vertical"
          >
            <SliderContainer
              className="flex flex-col"
              direction="up"
              speed={35}
            >
              <SliderItem className="mt-2">
                <img src={Image1} alt="" />
              </SliderItem>
              <SliderItem className="mt-2">
                <img src={Image2} alt="" />
              </SliderItem>
              <SliderItem className="mt-2">
                <img src={Image4} alt="" />
              </SliderItem>
            </SliderContainer>
          </InfinitySlider>
        )}
        <div className="flex flex-col justify-center row-span-1 lg:col-span-8 lg:row-span-3 xl:row-span-2 lg:pl-20">
          <h1 className="py-5 text-4xl font-semibold tracking-tighter text-center lg:text-left lg:text-7xl">
            Discover Your <br />
            Favorite Stories!
          </h1>
        </div>
        <InfinitySlider
          className="hidden xl:row-span-4 lg:row-span-3 lg:col-span-2 lg:flex lg:flex-col lg:mt-6 xl:mt-12"
          direction="vertical"
        >
          <SliderContainer className="flex flex-col" direction="up" speed={50}>
            <SliderItem className="mt-2">
              <img src={Image3} alt="" />
            </SliderItem>
            <SliderItem className="mt-2">
              <img src={Image2} alt="" />
            </SliderItem>
            <SliderItem className="mt-2">
              <img src={Image4} alt="" />
            </SliderItem>
          </SliderContainer>
        </InfinitySlider>
        <div className="text-gray-400 lg:col-span-6 lg:row-span-3 xl:row-span-3 lg:pt-4 xl:p-10 lg:pl-10 xl:pl-20">
          <p className="text-sm leading-8 text-center lg:text-md lg:text-left">
            Explore captivating narratives that ignite your imagination and
            transport you to extraordinary realms. Uncover hidden gems and
            cherished classics as you embark on your next adventure!
          </p>
          <div className="flex flex-col gap-2 mt-8 xl:mt-16 lg:flex-row lg:gap-5">
            <Link to={NOVELS_HOME}>
              <button className="btn lg:btn-lg btn-primary ">
                Start Reading
              </button>
            </Link>
            {/* <GlowBorder className="rounded-lg">
              <button className="w-full btn lg:btn-lg btn-primary btn-outline">
                Share Your Stories
              </button>
            </GlowBorder> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
