import InfinitySlider from "./InfinitySlider";
import SliderContainer from "./SliderContainer";
import SliderItem from "./SliderItem";

const TestimonySection = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-11/12 mx-auto h-fit poppins bg-base-200 rounded-lg">
        <div className="grid grid-cols-2 h-[42rem] w-3/4 mx-auto gap-10 ">
          <div className="aspect-[6/4] my-auto flex flex-col gap-5">
            <h1 className="text-5xl font-semibold tracking-tight">
              Our Delighted Community
            </h1>
            <p className="text-gray-400 leading-8">
              Experience the joy of our delighted community! Join us in
              celebrating the magic of storytelling and shared passion for
              meaningful experiences
            </p>
            <button className="btn btn-lg btn-primary w-52 btn-outline">
              Join Us
            </button>
          </div>
          <div className="aspect-[6/4] my-auto relative">
            <div className="flex absolute top-0 left-0 h-full w-fit py-10 gap-10">
              <InfinitySlider fadeColor="from-base-200">
                <SliderContainer speed={35}>
                  <SliderItem className="ml-10">
                    <div className="aspect-video rounded-lg border border-primary h-full bg-base-100"></div>
                  </SliderItem>
                  <SliderItem className="ml-10">
                    <div className="aspect-video rounded-lg border border-primary h-full bg-base-100"></div>
                  </SliderItem>
                  <SliderItem className="ml-10">
                    <div className="aspect-video rounded-lg border border-primary h-full bg-base-100"></div>
                  </SliderItem>
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
