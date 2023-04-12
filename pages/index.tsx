import { useEffect, useState } from 'react';
import CarList from '../components/car_list'
import batterySearch from '../logic/search_logic';

const IndexPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [filteredCars, setFilteredCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [searchValue, setSearchValue] = useState<number>();


  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      setCars(JSON.parse(sessionStorage.getItem("cars")))
    }
    setFilteredCars(cars)
  }, [])

  useEffect(() => {
    const filteredList = batterySearch({ searchTerm: searchValue, cars });
    setFilteredCars(filteredList);
  }, [searchValue, cars])

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
    <div className='w-[calc(100vw-8rem)]'>
      <div>
        <input type="number" value={searchValue} onChange={(event) => setSearchValue(parseInt(event.target.value))} />
        <button className='bg-green-700 p-2' onClick={addCar}>New Car</button>
        <CarList cars={filteredCars}/>
      </div>
    </div>
  )
}

export default IndexPage
