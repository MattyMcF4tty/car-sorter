import { useState } from "react";
import CarMap from "../components/car_map";

const MapPage = () => {
    const [cars, setCars] = useState<{ numberPlate: number; location: { lat: number; lng: number }; powerPercent: number }[]>([]);

    return (
        <div className="w-[calc(100vw-7rem)] h-[100vh]">
            <CarMap cars={cars}/>
        </div>
    )
}

export default MapPage;