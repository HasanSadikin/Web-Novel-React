import HeroSection from "../components/home/HeroSection";
import InfinitySlider from "../components/home/InfinitySlider";
import SliderContainer from "../components/home/SliderContainer";
import SliderItem from "../components/home/SliderItem";
import Navbar from "../components/nav/Navbar";

import Image1 from "../images/2a2.webp";
import Image2 from "../images/cover-10-rev.webp";
import Image3 from "../images/novel1.webp";
import Image4 from "../images/ominescent-reader.webp";

const HomePage = () => {
  const className = "aspect-[3/4] object-fit w-56 mx-2 rounded-md";
  return (
    <>
      <div className="absolute w-full h-16 bg-base-100">
        <Navbar className="w-3/4 mx-auto" />
      </div>
      <HeroSection />
      <InfinitySlider className="py-10 w-3/4 mx-auto">
        <SliderContainer speed={50}>
          <SliderItem className={className}>
            <img src={Image1} />
          </SliderItem>
          <SliderItem className={className}>
            <img src={Image2} />
          </SliderItem>
          <SliderItem className={className}>
            <img src={Image3} />
          </SliderItem>
          <SliderItem className={className}>
            <img src={Image4} />
          </SliderItem>
          <SliderItem className={className}>
            <img src={Image1} />
          </SliderItem>
          <SliderItem className={className}>
            <img src={Image2} />
          </SliderItem>
        </SliderContainer>
      </InfinitySlider>
    </>
  );
};

export default HomePage;
