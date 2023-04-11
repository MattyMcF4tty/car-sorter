import { useState } from 'react';
import CarList from '../components/car_list'

const IndexPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

  const addCar = () => {
    const newCar = {
      numberPlate: Math.floor(Math.random() * 100000),
      location: { lat: 34.0522, lng: -118.2437 },
      powerPercent: Math.floor(Math.random() * 100),
    };
    setCars((prevCars) => [...prevCars, newCar]);
    console.log(cars)
  };

  return (
    <div>
      <button className='bg-green-700 p-2' onClick={addCar}>New Car</button>
      <CarList cars={cars}/>
    </div>
  )
}

export default IndexPage
