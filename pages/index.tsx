import { useEffect, useState } from 'react';
import CarList from '../components/car_list'
import { BatterySearch } from '../components/search_fields';

const IndexPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [filteredCars, setFilteredCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      const storedCars = JSON.parse(sessionStorage.getItem("cars"))
      setCars(storedCars)
      setFilteredCars(storedCars)
    }
  }, [])

  const addCar = () => {
    const newCar = {
      numberPlate: Math.floor(Math.random() * 100000),
      location: {
        lat: Math.random() * (57.75121 - 54.559132) + 54.559132,
        lng: Math.random() * (15.158834 - 8.07561) + 8.07561,
      },
      powerPercent: Math.floor(Math.random() * 100),
    };
    setCars((prevCars) => [...prevCars, newCar]);
    sessionStorage.setItem("cars", JSON.stringify(cars));
  };

  return (
    <div className='w-[calc(100vw-8rem)]'>
      <div>
        <BatterySearch
        cars={cars}
        setFilteredCars={setFilteredCars}
        />
        <button className='bg-green-700 p-2' onClick={addCar}>New Car</button>
        <CarList cars={filteredCars}/>
      </div>
      <CarList cars={cars} />
    </div>
  );
};

export default IndexPage;
