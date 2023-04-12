import { useState, useEffect } from "react";
import CarMap from "../components/car_map";
import { BatterySearch } from "../components/search_fields";

const MapPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [showFilterSettings, setShowFilterSettings] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      const storedCars = JSON.parse(sessionStorage.getItem("cars"))
      setCars(storedCars)
      setFilteredCars(storedCars)    
    }
  }, [])

  return (
    <div className="w-[calc(100vw-8rem)] h-[100vh]">
      <div className="absolute z-20 top-[0.65rem] right-2">
        <div className="relative">
          <button onClick={() => setShowFilterSettings(!showFilterSettings)} 
          className="font-semibold shadow-md bg-white p-2 rounded-sm hover:bg-slate-200">Filter</button>
          {showFilterSettings &&
            <div className="bg-white w-52 p-2 absolute right-0 rounded-sm shadow-md">
              <BatterySearch 
              cars={cars}
              setFilteredCars={setFilteredCars}
              />
            </div>
          }
        </div>
      </div>
      <CarMap cars={filteredCars}/>
    </div>
  )
}

export default MapPage;