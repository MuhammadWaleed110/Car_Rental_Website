import React, { useState } from 'react';
import Images from '../../Constants/Images';

const carData = [
  {
    id: 1,
    name: 'Tesla Model S',
    type: 'Electric Sedan',
    pricePerDay: 199,
    features: {
      mileage: '396 miles', // Corrected mileage
      transmission: 'Automatic',
      seatingCapacity: 5,
    },
    brand: 'Tesla',
    image: Images.tesla,
  },
  {
    id: 2,
    name: 'BMW M3',
    type: 'Sedan',
    pricePerDay: 150,
    features: {
      mileage: '23 mpg', // Corrected mileage
      transmission: 'Automatic',
      seatingCapacity: 5, // Corrected seating capacity
    },
    brand: 'BMW',
    image: Images.bmw,
  },
  {
    id: 3,
    name: 'Mercedes-Benz C-Class',
    type: 'Compact Executive Sedan', // Updated type
    pricePerDay: 135, // Corrected price
    features: {
      mileage: '24 mpg', // Corrected mileage
      transmission: 'Automatic',
      seatingCapacity: 5,
    },
    brand: 'Mercedes-Benz',
    image: Images.mercedezBenzCClass,
  },
];

const CarListing = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredCars = carData.filter((car) => {
    if (!filter) return true;
    return (
      car.brand.toLowerCase().includes(filter.toLowerCase()) ||
      car.type.toLowerCase().includes(filter.toLowerCase()) ||
      car.features.seatingCapacity.toString() === filter
    );
  });

  return (
    <section id='cars' className='pb-24 bg-white dark:bg-dark dark:text-white'>
      <div className='container'>
        {/* Heading */}
        <header className='mb-10 text-gray-600 dark:text-gray-300'>
          <h1
            data-aos='fade-up'
            className='text-3xl sm:text-4xl font-semibold font-serif mb-3 text-primary'>
            Our Car Listings
          </h1>
          <p data-aos='fade-up' className='text-xl font-serif'>
            Browse through our extensive inventory of luxury cars, offering a wide range of options for both budget and enthusiasts.
          </p>

          {/* Filters */}
          <div className='mt-6'>
            <label
              htmlFor='filter'
              className='block text-md font-medium font-serif mb-2'>
              Filter by brand, type, or seating capacity.
            </label>
            <input
              id='filter'
              type='text'
              placeholder='Search for cars by brand, type, or seating capacity'
              value={filter}
              onChange={handleFilterChange}
              className='border rounded-lg p-2 w-full sm:w-1/2 font-serif text-black dark:text-black'
            />
          </div>
        </header>

        {/* Car Listings */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              data-aos='fade-up'
              data-aos-delay={`${index * 300}`}
              className='border border-gray-300 hover:border-primary p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200'>
              <img
                src={car.image}
                alt={car.name}
                className='w-full h-48 object-cover rounded-md mb-4'/>
              <h2 className='text-xl font-bold font-serif mb-2 text-primary'>{car.name}</h2>
              <p className='text-gray-500 font-serif mb-1'>Type: {car.type}</p>
              <p className='text-gray-500 font-serif mb-1'>Price/Day: ${car.pricePerDay}</p>
              <p className='text-gray-500 font-serif mb-1'>Mileage: {car.features.mileage}</p>
              <p className='text-gray-500 font-serif mb-1'>Transmission: {car.features.transmission}</p>
              <p className='text-gray-500 font-serif'>Seating Capacity: {car.features.seatingCapacity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarListing;
