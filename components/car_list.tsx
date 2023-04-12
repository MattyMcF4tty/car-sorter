import * as React from 'react'
import { User } from '../interfaces'


interface CarItemProps {
  numberplate: number,
  location: {lat: number, lng: number}
  powerPercent: number,
}

const CarItem = ({ numberplate, location, powerPercent }: CarItemProps) => {

  return (
    <tr className='even:bg-slate-200 text-center'>
      <td className='w-1/3'>{ numberplate }</td>
      <td className='w-1/3'>{ location.lat }, { location.lng }</td>
      <td className='w-1/3'>{ powerPercent }</td>
    </tr>
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
    <table className='w-full'>
      <thead className='w-full'>
        <tr className='justify-evenly'>
          <th className='w-1/3 font-semibold'>Numberplate</th>
          <th className='w-1/3 font-semibold'>Location</th>
          <th className='w-1/3 font-semibold'>Battery Percentage</th>
        </tr>
      </thead>
      <tbody className='w-full'>
        {cars && cars.map((car) => (
          <CarItem
            key={car.numberPlate}
            numberplate={car.numberPlate}
            location={car.location}
            powerPercent={car.powerPercent}
          />
        ))}
      </tbody>
    </table>
  )
}
export default CarList;

