import React, { useEffect } from 'react';
import Images from '../../Constants/Images';
import AOS from "aos";
import "aos/dist/aos.css";

const StartYourJourney = ({ theme }) => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: '100',
    });
    AOS.refresh();
  }, []); // This ensures AOS is initialized once when the component is mounted

  const displayedImage = theme === 'dark' ? Images.mercedezBenz : Images.bannerCar;

  return (
    <div id='home' className="dark:bg-black dark:text-white bg-white text-gray-800 duration-300 relative -z-20">
      <div className="container min-h-[620px] flex flex-col justify-center">
        {/* Section Title */}
        <h1 className="text-center text-4xl lg:text-5xl font-bold font-serif mb-8">
          Start Your Journey with Comfort and Style
        </h1>

        {/* Content Grid */}
        <div className="grid gap-10 sm:gap-20 place-items-center grid-cols-1 sm:grid-cols-2">
          
          {/* Image Section with Animation */}
          <div data-aos="zoom-in" data-aos-duration="1300" className="order-1 sm:order-2">
            <img
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px-20px-6px-rgba(0,0,0,0.5)] w-full max-w-lg rounded-lg shadow-md"
              src={displayedImage} // Dynamically set the image
              alt="Car Rental"
            />
          </div>

          {/* Text Content Section (No Animation) */}
          <div  data-aos-delay="100" className="order-2 sm:order-1 font-serif space-y-6">
            <h1 data-aos="fade-up" data-aos-duration="1200" className="text-primary text-5xl lg:text-6xl font-semibold">
              Explore the Open Roads
            </h1>
            <p data-aos="fade-up" data-aos-duration="1100" className="text-lg text-gray-400">
              Embark on your next adventure with our premium car rental services.
              Choose from a wide range of vehicles tailored to suit your journey.
            </p>
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl font-medium font-serif text-primary">
              Why Choose Us?
            </h2>
            <p data-aos="fade-up" data-aos-duration="900" className="text-lg text-gray-400">
              From weekend getaways to cross-country road trips, our fleet of cars
              ensures a smooth ride wherever you go. Experience convenience, comfort,
              and competitive pricing with every rental.
            </p>
            {/* Call-to-Action Button */}
            <button data-aos="fade-up" data-aos-duration="800" className="bg-primary hover:bg-primary-dark text-white font-semibold py-2 px-6 mt-4 rounded-md duration-300 transform hover:scale-105 hover:shadow-lg">
              Start Your Journey
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StartYourJourney;
