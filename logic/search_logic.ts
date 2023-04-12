import { useState, useEffect } from "react";

interface BatterySearchProps {
  searchTerm: number;
  cars: {
    numberPlate: number;
    location: { lat: number; lng: number };
    powerPercent: number;
  }[];
}

function batterySearch({ searchTerm, cars }: BatterySearchProps) {
    if (isNaN(searchTerm) || searchTerm === null) {
        return cars;
      } else {
        const filteredList = cars.filter((car) => car.powerPercent >= searchTerm);
        return filteredList;
      }
}
  
export default batterySearch;
