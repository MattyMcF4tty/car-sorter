import { useEffect, useState } from "react";

interface BatterySearchProps {
    cars: {
        numberPlate: number;
        location: { lat: number; lng: number };
        powerPercent: number;
    }[];
    setFilteredCars: (filteredCars: {
        numberPlate: number;
        location: { lat: number; lng: number };
        powerPercent: number;
    }[]) => void;
}

export const BatterySearch = ({ cars, setFilteredCars}: BatterySearchProps) => {
    const [sliderValue, setSliderValue] = useState<number>(0);

    useEffect(() => {
        if (sliderValue === null) {
            setFilteredCars(cars);
          } else {
            const filteredList = cars.filter((car) => car.powerPercent >= sliderValue);
            filteredList.sort((a, b) => b.powerPercent - a.powerPercent);
            setFilteredCars(filteredList);
        }
    }, [sliderValue]);

    return (
        <div className="flex flex-col">
            <label htmlFor="BatterySearchBar">Battery Percentage</label>
            <div className="flex flex-row">
                <input 
                className="accent-MainGreen-300"
                id="BatterySearchBar"
                type="range" 
                min="0" 
                max="100"
                value={sliderValue}
                onChange={(event) => setSliderValue(parseInt(event.target.value))}
                />
                <p className="ml-2">{sliderValue}%</p>
            </div>
        </div>
    )

}