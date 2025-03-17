import React from "react";
import {
  FaCamera,
  FaCameraRetro,
  FaShieldAlt,
  FaRocket,
  FaCarSide,
} from "react-icons/fa";
import { GiNotebook, GiWorld } from "react-icons/gi";

const Skills = [
  {
    name: "Best-Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "We provide the best prices across all car rental options without compromising on quality.",
    extra:
      "Our competitive pricing ensures you get the best deal every time you rent with us.",
    aosDelay: "0",
  },
  {
    name: "Fast & Safe",
    icon: (
      <FaShieldAlt className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "Your safety is our priority. We offer quick and secure booking processes.",
    extra:
      "With GPS-enabled cars and 24/7 support, we ensure a safe journey for our customers.",
    aosDelay: "300",
  },
  {
    name: "Excellent Customer Service",
    icon: (
      <FaCamera className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "We prioritize customer satisfaction with 24/7 dedicated support.",
    extra:
      "Our team is always available to assist you with bookings, queries, or roadside assistance.",
    aosDelay: "600",
  },
  {
    name: "Global Reach",
    icon: (
      <GiWorld className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "We are available worldwide, offering car rentals in major cities and tourist destinations.",
    extra:
      "No matter where you travel, we are there to provide reliable car rental services.",
    aosDelay: "900",
  },
  {
    name: "Innovative Solutions",
    icon: (
      <FaRocket className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "We integrate cutting-edge technology to enhance your experience.",
    extra:
      "From mobile apps to AI-based booking recommendations, we make car rentals seamless and smart.",
    aosDelay: "1200",
  },
  {
    name: "Flexible Rental Plans",
    icon: (
      <FaCarSide className="text-5xl text-primary group-hover:text-black dark:text-white dark:group-hover:text-primary duration-300" />
    ),
    link: "#",
    description:
      "Choose from hourly, daily, weekly, or long-term rental options.",
    extra:
      "We offer customizable rental plans to suit business trips, vacations, or everyday commuting needs.",
    aosDelay: "1500",
  },
];

const Services = () => {
  return (
    <div className="py-4 dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl text-primary">
            Why Choose Us
          </h1>
          <p className=" text-xl mt-4 text-center text-gray-600 dark:text-gray-300 font-serif">
            Discover why we are the go-to choice for car rentals. From
            affordability to flexibility, we’ve got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 border rounded-lg shadow-lg flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
            >
              {skill.icon}
              <h2 className="mt-4 text-xl font-bold font-serif text-primary">
                {skill.name}
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300 font-serif">
                {skill.description}
              </p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-serif">
                {skill.extra}
              </p>
              <a
                href={skill.link}
                className="mt-4 text-primary hover:text-black dark:hover:text-primary font-serif duration-300"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
