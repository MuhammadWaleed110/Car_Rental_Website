import React from 'react';

const ContactUs = () => {
  return (
    <div id='booking' className="bg-gray-100 dark:bg-dark dark:text-primary py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-200 dark:bg-black py-8 px-6 rounded-sm shadow-lg">
          {/* Heading */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 mb-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary animate-fade-in text-center">
              Get In Touch for Your Next Ride
            </h1>
          </div>
          
          {/* Islamabad */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-serif text-primary">Islamabad - Rent a Car</h2>
            <p className="text-gray-600 font-serif leading-relaxed text-sm sm:text-base">
              Looking for a reliable car in Islamabad? Visit us at:
              <br />
              <span className="font-serif">456 Margalla Road, Islamabad, Pakistan</span>
              <br />
              Tel: <a href="tel:+92511234567" className="text-blue-500 dark:text-primary hover:underline">+92 51 123 4567</a>
              <br />
              Email: <a href="mailto:islamabad@carrentals.com" className="text-blue-500 dark:text-primary hover:underline">islamabad@carrentals.com</a>
              <br />
              Rent a car and explore the beauty of the capital city!
            </p>
          </div>
          
          {/* Lahore */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-serif text-primary">Lahore - Rent a Car</h2>
            <p className="text-gray-500 font-serif leading-relaxed text-sm sm:text-base">
              Need a car in Lahore? We’ve got you covered:
              <br />
              <span className="font-serif">123 Mall Road, Lahore, Pakistan</span>
              <br />
              Tel: <a href="tel:+924211234567" className="text-blue-500 dark:text-primary hover:underline">+92 42 123 4567</a>
              <br />
              Email: <a href="mailto:lahore@carrentals.com" className="text-blue-500 dark:text-primary hover:underline">lahore@carrentals.com</a>
              <br />
              Choose from our wide selection of cars and explore the city of gardens!
            </p>
          </div>
          
          {/* Abbottabad */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-serif text-primary">Abbottabad - Rent a Car</h2>
            <p className="text-gray-500 font-serif leading-relaxed text-sm sm:text-base">
              Planning a trip to Abbottabad? Rent a car from us:
              <br />
              <span className="font-serif">78 Main Bazaar, Abbottabad, Pakistan</span>
              <br />
              Tel: <a href="tel:+929922123456" className="text-blue-500 dark:text-primary hover:underline">+92 992 123 456</a>
              <br />
              Email: <a href="mailto:abbottabad@carrentals.com" className="text-blue-500 dark:text-primary hover:underline">abbottabad@carrentals.com</a>
              <br />
              Get a comfortable car to explore the scenic beauty of Abbottabad and nearby areas.
            </p>
          </div>
          
          {/* Karachi */}
          <div className="space-y-4 animate-slide-up">
            <h2 className="text-xl sm:text-2xl font-serif text-primary">Karachi - Rent a Car</h2>
            <p className="text-gray-500 font-serif leading-relaxed text-sm sm:text-base">
              Discover Karachi with ease by renting a car:
              <br />
              <span className="font-serif">12 Clifton Block 5, Karachi, Pakistan</span>
              <br />
              Tel: <a href="tel:+92211234567" className="text-blue-500 dark:text-primary hover:underline">+92 21 123 4567</a>
              <br />
              Email: <a href="mailto:karachi@carrentals.com" className="text-blue-500 dark:text-primary hover:underline">karachi@carrentals.com</a>
              <br />
              Rent a car and enjoy the vibrant energy of Karachi, Pakistan's largest city.
            </p>
          </div>

          {/* Contact Us Button */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid place-items-center mt-6">
            <a
              href="#"
              className="inline-block font-serif py-3 px-8 bg-gray-800 border-2 border-primary text-primary rounded-lg tracking-wider uppercase hover:bg-primary hover:text-white duration-300 transform hover:scale-105 shadow-md animate-pulse-slow"
              aria-label="Contact Us"
            >
              Contact Us
            </a>
          </div>
        </div>
    </div>
  );
};

export default ContactUs;
