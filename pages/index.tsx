import { useEffect, useState } from "react";
import CarList from "../components/car_list";
import { BatterySearch } from "../components/search_fields";

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
  const [showFilterSettings, setShowFilterSettings] = useState<boolean>(false);

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      const storedCars = JSON.parse(sessionStorage.getItem("cars"));
      setCars(storedCars);
      setFilteredCars(storedCars);
    }
  }, []);

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
    setFilteredCars(cars);
    sessionStorage.setItem("cars", JSON.stringify(cars));
  };

  return (
    <div className="w-[calc(100vw-9.2rem)] p-10 ">
      <div className="flex flex-col items-left mb-6">
        <div className="relative z-20">
          <div className="relative group inline-block">
            <button className="font-semibold shadow-md bg-MainGreen-300 p-2 rounded-md hover:bg-MainGreen-200">
              Menu
            </button>
            <div className="hidden p-2 bg-white group-hover:block absolute top-full left-0 overflow-auto max-h-[calc(100vh-8rem)]">
              <BatterySearch cars={cars} setFilteredCars={setFilteredCars} />
              <button
                className="font-semibold shadow-md bg-MainGreen-300 p-2 rounded-md hover:bg-MainGreen-200"
                onClick={addCar}
              >
                New Car
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-lg rounded-md bg-MainGreen-300">
        <CarList cars={filteredCars} />
      </div>
    </div>
  );
};

export default IndexPage;
