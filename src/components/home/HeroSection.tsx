import Image1 from "../../images/2a2.webp";
import Image2 from "../../images/cover-10-rev.webp";
import Image3 from "../../images/novel1.webp";
import Image4 from "../../images/ominescent-reader.webp";
import InfinitySlider from "./InfinitySlider";
import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";

const HeroSection = () => {
  return (
    <div className={`w-full h-[38rem] overflow-hidden poppins`}>
      <div className="w-9/12 mx-auto grid grid-cols-10 grid-rows-8 gap-4 h-[38rem] mt-32">
        <InfinitySlider
          className="row-span-7 col-span-2 flex flex-col"
          direction="vertical"
        >
          <SliderContainer className="flex flex-col" direction="up" speed={35}>
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
        <div className="col-span-8 lg:row-span-3 xl:row-span-2 flex flex-col justify-center">
          <h1 className="text-7xl font-semibold tracking-tighter pl-20">
            Discover Your <br />
            Favorite Stories!
          </h1>
        </div>
        <InfinitySlider
          className="lg:row-span-4 xl:row-span-5 col-span-2 flex flex-col lg:mt-6 xl:mt-12"
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
        <div className="col-span-6 lg:row-span-9 xl:row-span-10 lg:pt-4 xl:p-10 lg:pl-10 xl:pl-20 leading-8 text-gray-400">
          <p>
            Explore captivating narratives that ignite your imagination and
            transport you to extraordinary realms. Uncover hidden gems and
            cherished classics as you embark on your next adventure!
          </p>
          <div className="lg:mt-8 xl:mt-16 flex gap-5">
            <button className="btn btn-lg btn-primary ">Start Reading</button>
            <button className="btn btn-lg btn-primary btn-outline">
              Share Your Stories
            </button>
          </div>
        </div>
        {/* <div className="bg-warning col-span-3 row-span-2">s</div> */}
      </div>
    </div>
  );
};

export default HeroSection;
