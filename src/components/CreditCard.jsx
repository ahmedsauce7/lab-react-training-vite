import React from 'react'
import visaimg from '../assets/images/visa.png'
import masterimg from '../assets/images/master-card.svg'


function CreditCard(prop) {
    const {
        type, 
        number, 
        expirationMonth, 
        expirationYear, 
        bank, 
        owner, 
        bgColor, 
        color} = prop

    const cardstyle ={
    backgroundColor: bgColor,
    color: color,
    display:"flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    width:"300px",
    height:"150px",
}

    // const cardimage = type === 'Visa' ? '../images/visa.png' : '../assets/images/master-card.svg';

    const fortmatnumber = number ? '**** **** ****' + number.slice(-4):'';

  return (
    <div className='allcards'>
    <div style={cardstyle}>
        <div>
            <img className='cardlogos' src={type === 'Visa' ? visaimg : masterimg} alt="type"/>
        </div>
        <div className='wholeinfo'>
        <div className='cardnum'>{fortmatnumber}</div>
        <div className='bankExp'>
            <p className='cardP'>Expires {expirationMonth}/{expirationYear}</p>
            <p className='cardP'>{bank}</p>
        </div>
    <div>{owner}</div>
    </div>
    </div>
    </div>
  )
}

export default CreditCard