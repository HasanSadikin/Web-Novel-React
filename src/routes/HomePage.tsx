import FooterSection from "../components/home/FooterSection";
import GenresSection from "../components/home/GenresSection";
import HeroSection from "../components/home/HeroSection";
import InfinitySlider from "../components/home/InfinitySlider";
import SecondCallToActionSection from "../components/home/SecondCallToActionSection";
import SliderContainer from "../components/home/SliderContainer";
import SliderItem from "../components/home/SliderItem";
import SocialProofSection from "../components/home/SocialProofSection";
import TestimonySection from "../components/home/TestimonySection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import Navbar from "../components/nav/Navbar";

import Image1 from "../images/2a2.webp";
import Image2 from "../images/cover-10-rev.webp";
import Image3 from "../images/novel1.webp";
import Image4 from "../images/ominescent-reader.webp";

const HomePage = () => {
  const className = "aspect-[3/4] object-fit w-56 mx-2 rounded-md";
  return (
    <>
      <div className="fixed w-full h-16 bg-base-100/85 top-0 left-0 z-[20] backdrop-blur">
        <Navbar className="w-3/4 mx-auto" />
      </div>
      <HeroSection />
      <WhyChooseUsSection />
      <GenresSection />
      <TestimonySection />
      <SocialProofSection />
      <SecondCallToActionSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
