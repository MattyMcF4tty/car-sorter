import * as React from 'react'
import { User } from '../interfaces'


interface CarItemProps {
  numberplate: number,
  location: {lat: number, lng: number}
  powerPercent: number,
}

const CarItem = ({ numberplate, location, powerPercent }: CarItemProps) => {

  return (
    <tr className='even:bg-slate-200'>
      <td>{ numberplate }</td>
      <td>{ location.lat }, { location.lng }</td>
      <td>{ powerPercent }</td>
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
    <table>
      <thead>
        <tr>
          <th className='font-semibold'>Numberplate</th>
          <th className='font-semibold mx-4'>Location</th>
          <th className='font-semibold'>Battery Percentage</th>
        </tr>
      </thead>
      <tbody>
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

