import React from "react";
import brand from "../assets/images/icon-brand-recognition.svg";
import records from "../assets/images/icon-detailed-records.svg";
import fully from "../assets/images/icon-fully-customizable.svg";

const Features = () => {
  const featuresArr = [
    {
      id: 1,
      icon: brand,
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 2,
      icon: records,
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 3,
      icon: fully,
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className="mt-20 px-5 lg:px-20 xl:px-36">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold text-verydarkblue">
          Advanced Statistics
        </h2>
        <p className="max-w-[480px] font-medium text-grayishviolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <div className="mt-24 flex flex-col items-center gap-28 xl:mt-0 xl:flex-row xl:justify-evenly xl:gap-6">
        {featuresArr.map((feature) => (
          <div
            key={feature.id}
            className={`relative max-w-[360px] xl:max-w-[450px] ${
              featuresArr.indexOf(feature) === 1 && "xl:pt-28"
            } ${featuresArr.indexOf(feature) === 2 && "xl:pt-56"}`}
          >
            <div className="flex flex-col items-center rounded-md bg-white px-5 pb-10 text-center xl:items-start xl:px-7 xl:text-left">
              <div className="-mt-12 grid h-24 w-24 place-items-center rounded-full bg-darkviolet">
                <img
                  src={feature.icon}
                  className="h-10 w-10"
                  alt={feature.title}
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold text-darkviolet">
                {feature.title}
              </h3>
              <p className="mt-4 font-medium leading-7 text-grayishviolet">
                {feature.content}
              </p>
            </div>
            {featuresArr.indexOf(feature) !== 2 && (
              <span className="absolute left-1/2 block h-40 w-2.5 -translate-x-1/2 bg-cyan xl:-right-40 xl:left-auto xl:top-1/2 xl:h-2.5 xl:w-40 xl:-translate-x-0 xl:translate-y-[400%]"></span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
