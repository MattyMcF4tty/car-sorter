import * as React from 'react'
import { User } from '../interfaces'


interface CarItemProps {
  numberplate: number,
  location: {lat: number, lng: number}
  powerPercent: number,
}

const CarItem = ({ numberplate, location, powerPercent }: CarItemProps) => {

  return (
    <li className='flex flex-row even:bg-slate-200'>
      <p>{ numberplate }</p>
      <p className='mx-4'>{ location.lat }, { location.lng }</p>
      <p>{ powerPercent }</p>
    </li>
  )
}

interface CarListProps {
  cars: {
    numberPlate: number;
    location: { lat: number; lng: number };
    powerPercent: number;
  }[];
}

const CarList = ({ cars }: CarListProps) => {

  return (
    <ul>
      {cars && cars.map((car) => (
        <CarItem
          numberplate={car.numberPlate}
          location={car.location}
          powerPercent={car.powerPercent}
        />
      ))}
    </ul>
  )
}
export default CarList;
