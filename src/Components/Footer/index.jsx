import React from 'react';
import { FaLocationArrow, FaPhone, FaEnvelope, FaHome, FaInfoCircle, FaCar, FaPhoneAlt, FaFileContract } from 'react-icons/fa';

const FooterInfo = [
  {
    content: (
      <>
        <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary">Car Rentals</h2>
        <p className="text-sm sm:text-base font-serif leading-relaxed">
          Rent a car with ease and travel comfortably across cities. Explore Pakistan’s famous locations with our reliable and affordable rental services.
        </p>
      </>
    )
  },
  {
    title: 'Quick Links',
    content: (
      <ul className="text-sm sm:text-base font-serif space-y-2">
        <li className="flex items-center"><FaHome className="mr-2 text-primary" /> <a href="#home" className="text-primary hover:text-gray-300">Home</a></li>
        <li className="flex items-center"><FaInfoCircle className="mr-2 text-primary" /> <a href="#about" className="text-primary hover:text-gray-300">About Us</a></li>
        <li className="flex items-center"><FaCar className="mr-2 text-primary" /> <a href="#services" className="text-primary hover:text-gray-300">Services</a></li>
        <li className="flex items-center"><FaPhoneAlt className="mr-2 text-primary" /> <a href="#contact" className="text-primary hover:text-gray-300">Contact</a></li>
        <li className="flex items-center"><FaFileContract className="mr-2 text-primary" /> <a href="#terms" className="text-primary hover:text-gray-300">Terms & Conditions</a></li>
      </ul>
    )
  },
  {
    title: 'Contact Us',
    content: (
      <ul className="text-sm sm:text-base font-serif space-y-2">
        <li><FaPhone className="inline-block text-primary" /> <a href="tel:+923012345678" className="text-primary hover:text-gray-300">+92 30 123 45678</a></li>
        <li><FaEnvelope className="inline-block text-primary" /> <a href="mailto:info@carrentals.com" className="text-primary hover:text-gray-300">info@carrentals.com</a></li>
        <li><FaLocationArrow className="inline-block text-primary" /> 123 Rent Road, Lahore, Pakistan</li>
      </ul>
    )
  },
  {
    title: 'Follow Us',
    content: (
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" className="text-blue-500 hover:text-blue-700">
          <i className="fab fa-facebook-f text-xl"></i>
        </a>
        <a href="https://www.twitter.com" className="text-blue-400 hover:text-blue-600">
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://www.youtube.com" className="text-red-500 hover:text-red-700">
          <i className="fab fa-youtube text-xl"></i>
        </a>
        <a href="https://www.instagram.com" className="text-pink-500 hover:text-pink-700">
          <i className="fab fa-instagram text-xl"></i>
        </a>
        <a href="https://www.linkedin.com/in/muhammad-waleed-gazar/" className="text-blue-700 hover:text-blue-900">
          <i className="fab fa-linkedin-in text-xl"></i>
        </a>
      </div>
    )
  }
];

const Footer = () => {
  return (
    <div className="bg-gray-900 dark:bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            {FooterInfo[0].content} {/* Company Info without the title */}
          </div>
          {FooterInfo.slice(1).map((section, index) => (
            <div className="space-y-4" key={index}>
              <h3 className="text-xl sm:text-2xl font-semibold font-serif text-primary">{section.title}</h3>
              {section.content}
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm sm:text-base text-gray-400 font-serif">
          <p>&copy; 2025 Car Rentals. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
