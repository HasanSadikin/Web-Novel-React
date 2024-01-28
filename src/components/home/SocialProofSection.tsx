import GlowBorder from "./GlowBorder";

const SocialProofSection = () => {
  const data = [
    {
      name: "Jane Doe",
      comment:
        "I stumbled upon this novel platform and was instantly drawn intoits vibrant community. Engaging in discussions with fellow readersand creators has enriched my reading experience beyond measure.It's more than just a website; it's a sanctuary for literaryenthusiasts like me!",
    },
    {
      name: "Dane Joe",
      comment:
        "As an aspiring novelist, finding a platform that not only allows me to share my work but also connects me with a supportive community has been invaluable. The feedback I've received has helped me refine my storytelling skills and grow as a writer. Thank you for providing such a nurturing environment!",
    },
    {
      name: "Joane Ed",
      comment:
        "I've been an avid reader all my life, but this website has taken my love for novels to a whole new level. The diversity of stories and the opportunity to engage directly with authors has made my reading journey incredibly fulfilling. It's like having a book club that never sleeps!",
    },
  ];
  return (
    <div className="w-full my-20 h-fit poppins">
      <h1 className="mb-16 text-3xl font-semibold tracking-tight text-center lg:text-5xl">
        Social Proof
      </h1>
      <div className="grid w-10/12 grid-cols-1 gap-10 mx-auto my-auto lg:w-3/4 lg:grid-cols-3">
        {data.map((x) => (
          <GlowBorder className="flex flex-col items-center justify-center gap-2 p-10 rounded-xl">
            <div className="avatar">
              <div className="w-24 rounded-full md:w-16">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <h1 className="text-lg font-semibold lg:text-2xl">{x.name}</h1>
            <div className="mb-2 rating">
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-2"
                className="bg-orange-400 mask mask-star-2"
              />
            </div>
            <p className="text-sm text-center text-gray-400 lg:text-md lg:text-left">
              "{x.comment}"
            </p>
          </GlowBorder>
        ))}
      </div>
    </div>
  );
};

export default SocialProofSection;
