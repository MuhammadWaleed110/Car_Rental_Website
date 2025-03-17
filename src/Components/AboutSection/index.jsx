import React from "react";
import Images from "../../Constants/Images";

const AboutSection = () => {
  return (
    <div id="about" className="dark:bg-dark dark:text-white bg-slate-100 duration-300 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:min-h-[600px] sm:grid sm:place-items-center">
          {/* Image Section */}
          <div data-aos="slide-right" data-aos-duration="1500" data-aos-once="false" className="flex justify-center">
            <img
              src={Images.car2}
              alt="Luxury Car"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-6 font-serif">
            <div>
              <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold font-serif text-primary">
                About Us
              </h1>
              <p data-aos="fade-up" className="text-gray-500 dark:text-gray-300 mt-4">
                At [ Elite Muhammad Waleed & transportation ], we are passionate about offering top-quality
                car rental services to meet your transportation needs. Whether you
                need a vehicle for a business trip, vacation, or a special event, 
                we have a diverse fleet of cars, ranging from compact cars to luxury
                SUVs, all available at competitive prices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold font-serif text-primary mt-6">
                Why Choose Our Services?
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 dark:text-gray-400 mt-4">
                <li>Wide selection of vehicles for every need, from economy to luxury</li>
                <li>Affordable and transparent pricing with no hidden fees</li>
                <li>Flexible rental options and convenient pickup/drop-off locations</li>
                <li>24/7 customer support to assist with any concerns or queries</li>
                <li>Well-maintained, clean, and insured vehicles for your peace of mind</li>
                <li>Easy online booking process with instant confirmation</li>
              </ul>
            </div>

            <div>
              <button className="bg-gray-800 text-yellow-500 border-2 border-yellow-500 hover:bg-primary hover:text-white hover:border-primary font-semibold py-2 px-6 rounded-md duration-300 transform hover:scale-105 hover:shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
