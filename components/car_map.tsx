import { GoogleMap, LoadScript, useJsApiLoader } from "@react-google-maps/api";

const CarMap = () => {
    const center = { lat: 0, lng: 0 };

    const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
    });

    if (loadError) {
        return <div>Error loading Google Maps API: {loadError.message}</div>;
    }

    if (isLoaded) {
        return (
        <div className='w-80 h-80'>
            <GoogleMap zoom={15} center={center} />
        </div>
        );
    }

    return <div>Loading Google Maps API...</div>;
};

export default CarMap;
