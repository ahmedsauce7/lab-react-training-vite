import React from 'react'

function Random(prop) {
    const random = Math.floor(Math.random() * (prop.max - prop.min) + prop.min);
  return (
    <div className="id-card">
        <p>{`Random value between ${prop.min} and ${prop.max} => ${random}`}</p>
    </div>
  )
}

export default Random