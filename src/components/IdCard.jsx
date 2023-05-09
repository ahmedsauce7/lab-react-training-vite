import React from "react";

function IdCard({prop}) {
  return (
    <div className="id-card">
        <div className="student-img"> <img src={prop.picture} className="student-pic" alt="student-pic" /> </div>
        <div className="text">
            <p className="idP"><b>First Name: </b>{prop.firstName}</p> 
            <p className="idP"><b>Last Name: </b> {prop.lastName}</p>
            <p className="idP"><b>Gender: </b>{prop.gender}</p>
            <p className="idP"><b>Height: </b>{prop.height} Meters</p>
            <p className="idP"><b>Birth: </b>{prop.birth}</p>
        </div>
    </div>
  );
}

export default IdCard;

