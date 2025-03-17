import React from 'react';
import Images from '../../Constants/Images';

const bannerDetail = [
  {
    backgroundImage: `url(${Images.pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  },
];

const PlayStoreBanner = () => {
  return (
    <div className=" dark:bg-black dark:text-white bg-slate-200 pb-14 w-full min-h-screen flex items-center justify-center">
      <div
        className="text-black py-10 sm:min-h-[400px] grid place-items-center rounded-xl w-full max-w-5xl mx-auto"
        style={bannerDetail[0]}
      >
        <div className="space-y-6 max-w-xl text-center">
          <h1
            data-aos="fade-up"
            className="text-2xl sm:text-4xl font-semibold font-serif"
          >
            Download our app on the Play Store
          </h1>
          <p
            data-aos="fade-up"
            className="text-md sm:text-base sm:px-20 leading-relaxed font-serif"
          >
            Get the latest updates, exclusive offers, and exclusive features.
            Download our app today and experience the best in car rental
            services.
          </p>
        </div>
        <div className="flex slex-wrap justify-center items-center gap-4">
          <a href="#playStore">
            <img
              src={Images.playStore}
              alt="Play Store"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
          <a href="#appStore">
            <img
              src={Images.appStore}
              alt="App Store"
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlayStoreBanner;
