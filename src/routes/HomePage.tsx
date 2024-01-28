import FooterSection from "../components/home/FooterSection";
import GenresSection from "../components/home/GenresSection";
import HeroSection from "../components/home/HeroSection";
import SecondCallToActionSection from "../components/home/SecondCallToActionSection";
import SocialProofSection from "../components/home/SocialProofSection";
import TestimonySection from "../components/home/TestimonySection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import Navbar from "../components/nav/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
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
