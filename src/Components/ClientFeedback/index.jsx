import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Feedbacks = [
  {
    id: 1,
    name: 'Muhammad Umair',
    title: 'Excellent Customer Service',
    feedback: 'I absolutely loved our service at Elite Muhammad Waleed & Transportation. The staff were attentive, helpful, and always ready to assist me. I highly recommend this place to anyone looking for a reliable and trustworthy car rental service.',
    aosDelay: "0",
    rating: 5,
  },
  {
    id: 2,
    name: 'Fatima Rahman',
    title: 'Friendly Staff',
    feedback: 'I had a great time renting a car at Elite Muhammad Waleed & Transportation. The friendly staff and attentive drivers were wonderful. I highly recommend this place to anyone looking for a comfortable and friendly car rental service.',
    aosDelay: "300",
    rating: 4,
  },
  {
    id: 3,
    name: 'Ahmed Abdul-Rahman',
    title: 'Friendly Staff & Comfortable Cars',
    feedback: 'I rented a car at Elite Muhammad Waleed & Transportation. The friendly staff and comfortable cars were perfect for my needs. I highly recommend this place to anyone looking for a car rental service that meets their needs.',
    aosDelay: "600",
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Ayesha-Akbar',
    title: 'Highly Comfortable Cars & Friendly Staff',
    feedback: 'I had a great time renting a car at Elite Muhammad Waleed & Transportation. The comfortable cars and friendly staff were perfect for my needs. I highly recommend this place to anyone looking for a car rental service that meets their needs.',
    aosDelay: "900",
    rating: 4.5,
  }
];

const ClientFeedback = () => {
  // Function to render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating > i - 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex items-center space-x-1">{stars}</div>;
  };

  return (
    <div className="dark:bg-dark dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* Header Section */}
        <div className="space-y-4 pb-12">
          <h1 className="text-3xl text-center font-semibold font-serif sm:text-4xl text-primary">
            What Our Clients Say
          </h1>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300 font-serif">
            At Elite Muhammad Waleed & Transportation, we pride ourselves on delivering exceptional service and unmatched quality. Here's what our valued clients have shared about their experiences with us.
          </p>
          <p className="text-center">
            <span className="font-semibold font-serif">
              - Elite Muhammad Waleed & Transportation
            </span>
          </p>
        </div>

        {/* Client Feedback Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-black dark:text-white">
          {Feedbacks.map(({ id, name, title, feedback, aosDelay, rating }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={aosDelay}
            >
              <div className="mb-4 flex items-center">
                <div>
                  <h3 className="text-lg font-semibold text-primary">{name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">"{feedback}"</p>
              <div className="mt-4">{renderStars(rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
