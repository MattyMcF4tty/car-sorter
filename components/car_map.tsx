import { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

interface CarMapProps {
  cars: {
    numberPlate: number;
    location: { lat: number; lng: number };
    powerPercent: number;
  }[];
}

const CarMap = ({ cars }: CarMapProps) => {
  const [mapCenter, setMapCenter] = useState<{ lat: number; lng: number }>({
    lat: 55.676098,
    lng: 12.568337,
  });

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [selectedCar, setSelectedCar] = useState(null);
  const [infoWindowOpen, setInfoWindowOpen] = useState(false);

  /* When clicking a car marker open a information window ontop */
  const onCarClick = (car: {
    numberPlate: number;
    location: { lat: number; lng: number };
    powerPercent: number;
  }) => {
    setSelectedCar(car);
    setInfoWindowOpen(true);
    setMapCenter(car.location);
  };

  /* Loading the map */
  if (loadError) {
    return (
      <div>
        <p>Error loading Google maps</p>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="w-[calc(100vw-7rem)] h-[100vh] flex justify-center items-center">
        <p>Loading Google maps...</p>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full">
        <GoogleMap
          center={mapCenter}
          zoom={5}
          mapContainerStyle={{
            height: "100%",
            width: "100%",
          }}
          options={{
            fullscreenControl: false,
            zoomControl: false,
            streetViewControl: false,
          }}
        >
          {cars &&
            cars.map((car) => (
              <Marker position={car.location} onClick={() => onCarClick(car)} />
            ))}
          {infoWindowOpen && selectedCar && (
            <InfoWindow
              position={selectedCar.location}
              onCloseClick={() => setInfoWindowOpen(false)}
            >
              <div>
                <h3>Number Plate: {selectedCar.numberPlate}</h3>
                <p>Power: {selectedCar.powerPercent}%</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </div>
    );
  }
};

export default CarMap;
