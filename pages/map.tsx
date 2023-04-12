import { useState, useEffect } from "react";
import CarMap from "../components/car_map";

const MapPage = () => {
    const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

    useEffect(() => {
        const storedCars = sessionStorage.getItem("cars");
        if (storedCars != null || storedCars != undefined) {
          setCars(JSON.parse(sessionStorage.getItem("cars")))
        }
      }, [])

    return (
        <div className="w-[calc(100vw-8rem)] h-[100vh]">
            <CarMap cars={cars}/>
        </div>
    )
}

export default MapPage;