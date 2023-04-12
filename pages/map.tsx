import { useState, useEffect } from "react";
import CarMap from "../components/car_map";
import batterySearch from "../logic/search_logic";

const MapPage = () => {
  const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [showFilterSettings, setShowFilterSettings] = useState<boolean>(false);
  const [filteredCars, setFilteredCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);
  const [searchValue, setSearchValue] = useState<number>();

  useEffect(() => {
    const storedCars = sessionStorage.getItem("cars");
    if (storedCars != null || storedCars != undefined) {
      setCars(JSON.parse(sessionStorage.getItem("cars")))
    }
  }, [])

  useEffect(() => {
    const filteredList = batterySearch({ searchTerm: searchValue, cars });
    setFilteredCars(filteredList);
  }, [searchValue, cars])

  return (
    <div className="w-[calc(100vw-8rem)] h-[100vh]">
      <div className="absolute z-20 top-[0.65rem] right-2">
        <button onClick={() => setShowFilterSettings(!showFilterSettings)} 
        className="font-semibold shadow-md bg-white p-2 rounded-sm hover:bg-slate-200">Filter</button>
        {showFilterSettings &&
          <div className="bg-white">
            <label htmlFor="batteryFilter">Battery %</label>
            <input type="number" value={searchValue} onChange={(event) => setSearchValue(parseInt(event.target.value))} />
          </div>
        }
      </div>
      <CarMap cars={filteredCars}/>
    </div>
  )
}

export default MapPage;