import React from 'react'

function Rating(prop) {
    const roundstars = Math.floor(prop.children)
    const fullstars = '★'.repeat(roundstars)
    const nostars = '☆'.repeat(5-roundstars)

  return (
    <div>{fullstars + nostars}</div>
  )
}

export default Rating