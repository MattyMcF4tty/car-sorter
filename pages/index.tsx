import { useEffect, useState } from "react";
import CarList from "../components/car_list";
import batterySearch from "../logic/search_logic";

const IndexPage = () => {
  const [cars, setCars] = useState<
    {
      numberPlate: number;
      location: { lat: number; lng: number };
      powerPercent: number;
    }[]
  >([]);
  const [filteredCars, setFilteredCars] = useState<
    {
      numberPlate: number;
      location: { lat: number; lng: number };
      powerPercent: number;
    }[]
  >([]);
  const [searchValue, setSearchValue] = useState<number>();

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      setCars(JSON.parse(sessionStorage.getItem("cars")));
    }
    setFilteredCars(cars);
  }, []);

  useEffect(() => {
    const filteredList = batterySearch({ searchTerm: searchValue, cars });
    setFilteredCars(filteredList);
  }, [searchValue, cars]);

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
    <div className="w-[calc(100vw-8rem)]">
      <div className="border-2 border-red-500 ">
        <div className="mt-4 mb-4 border-2 border-red-500 flex items-center justify-center">
          <button className="border-2 rounded-md bg-gray-200">Menu</button>
        </div>
      </div>
      <CarList cars={cars} />
    </div>
  );
};

export default IndexPage;
