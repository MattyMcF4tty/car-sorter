import { useEffect, useState } from 'react';
import CarList from '../components/car_list'

const IndexPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      setCars(JSON.parse(sessionStorage.getItem("cars")))
    }
  }, [])

  const addCar = () => {
    const newCar = {
      numberPlate: Math.floor(Math.random() * 100000),
      location: { 
        lat: Math.random() * (57.751210 - 54.559132) + 54.559132, 
        lng: Math.random() * (15.158834 - 8.075610) + 8.075610
      },
      powerPercent: Math.floor(Math.random() * 100),
    };
    setCars((prevCars) => [...prevCars, newCar]);
    sessionStorage.setItem("cars", JSON.stringify(cars))
  };

  return (
    <div className='w-[calc(100vw-8.4rem)]'>
      <button className='bg-green-700 p-2' onClick={addCar}>New Car</button>
      <CarList cars={cars}/>
    </div>
  )
}

export default IndexPage
