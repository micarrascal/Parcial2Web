import React from 'react'
import { useState, useEffect } from "react";
import imgb from "../../assets/images/image 2.png"


const DetalleCafe = ({idCafe}) => {
    const [cafe,setCafe] =useState();
  
   
    const handleDetalleCafe = ()  => {
        fetch(`http://localhost:3001/cafes/${idCafe}`)
          .then(resp => resp.json())
          .then(data => {
            setCafe(data);
          })  
      };
      useEffect(() => {
        handleDetalleCafe(); 
      }, [idCafe]);
           
      

  return(
    
    <div className="card d-flex justify-content-center text-center align-items-center" 
    style={{background: "#E0BBBB"}
    }>
         <h3>{cafe?.nombre}</h3>
         <p>{cafe?.fecha_cultivo}</p>
         <img src={imgb} alt="" style={{width: "150px"}} />
         <p>Notas</p>
         <p>{cafe?.notas}</p>
         <h3>Cultivado a una altura de</h3>
         <h3>{cafe?.altura}</h3>
    </div>
    
  )
}

export default DetalleCafe