import react, {useState} from "react";

interface CarItemProps {
  numberplate: number;
  location: { lat: number; lng: number };
  powerPercent: number;
}

const CarItem = ({ numberplate, location, powerPercent }: CarItemProps) => {
  const [showSettings, setShowSettings] = useState<boolean>(false);

  return (
    <tr className="even:bg-MainGreen-100 odd:bg-white text-center h-10" 
    onMouseOver={() => setShowSettings(true)}
    onMouseLeave={() => setShowSettings(false)}
    >
      <td className="w-1/3">{numberplate}</td>
      <td className="w-1/3">
        {location.lat}, {location.lng}
      </td>
      <td className="w-1/3">{powerPercent}%</td>
    </tr>
  );
};

interface CarListProps {
  cars: {
    numberPlate: number;
    location: { lat: number; lng: number };
    powerPercent: number;
  }[];
}

const CarList = ({ cars }: CarListProps) => {
  return (
    <table className="w-full">
      <thead className="w-full">
        <tr className="justify-evenly">
          <th className="w-1/3 font-semibold py-[1px]">Numberplate</th>
          <th className="w-1/3 font-semibold py-[1px]">Location</th>
          <th className="w-1/3 font-semibold py-[1px]">Battery Percentage</th>
        </tr>
      </thead>
      <tbody className="w-full">
        {cars &&
          cars.map((car) => (
            <CarItem
              key={car.numberPlate}
              numberplate={car.numberPlate}
              location={car.location}
              powerPercent={car.powerPercent}
            />
          ))}
      </tbody>
    </table>
  );
};
export default CarList;
