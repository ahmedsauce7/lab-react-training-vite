import React from 'react'

function DriverCard(prop) {
    const {name, rating, img, car} = prop
    const roundstars = Math.floor(rating)
    const fullstars = '★'.repeat(roundstars)
    const nostars = '☆'.repeat(5-roundstars)
    return (
        <div className='driverallcard'>
        <img className='driverimg' src={img} alt={name}/>
    <div className='drivercard'>
        <h2 className='drating'>{name}</h2>
        <p className='drating'>{fullstars}{nostars}</p>
        <p className='drating'>{car.model}-{car.licensePlate}</p>
    </div>
    </div>
  )
}

export default DriverCard