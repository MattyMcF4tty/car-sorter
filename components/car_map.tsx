import { GoogleMap, LoadScript, Marker, useJsApiLoader } from "@react-google-maps/api";

interface CarMapProps {
    cars: {
        numberPlate: number;
        location: { lat: number; lng: number };
        powerPercent: number;
    }[];
}

const CarMap = ({ cars }: CarMapProps) => {
    const center = { lat: 0, lng: 0 };

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if (loadError) {
        return (
          <div>
            <p>Error loading Google maps</p>
          </div>
        );
      } else if (!isLoaded) {
        return (
          <div>
            <p>Loading Google maps...</p>
          </div>
        );
      } else {
          return (
              <div className="w-full h-full">
                  <GoogleMap
                  center={center}
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
                            <Marker 
                            position={car.location}
                            />
                        ))}
                  </GoogleMap>
              </div>
          );
      }
};

export default CarMap;