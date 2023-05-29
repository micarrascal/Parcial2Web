import React, { useEffect, useState } from 'react'
import bannerimg from "../../assets/images/image 1.png"
import DetalleCafe from '../DetalleCafeComponent/DetalleCafe';
const ListaCafe = () => {
  const [listadoCafe,setListadoCafe] = useState([]);
  const [idCafe, setIdCafe] = useState(1);
  const handleCafes = (user, pass)  => {
    fetch('http://localhost:3001/cafes')
      .then(resp => resp.json())
      .then(data => {
        setListadoCafe(data);
      })  
  };
  useEffect(() => {
    handleCafes();
  }, [])
  
  return (
    <div> 
     <div className="container" style={{
    }}>
      <h3>El aroma mágico</h3>
      <hr class="hr" />
      <img src={bannerimg} alt="" style={{width: "100%"}} />
      <hr class="hr" />
      </div>
      <div className='row'>  
      <div className='col-8'>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Region</th>

                </tr>

            </thead>
            <tbody> 
              {listadoCafe.map((cafe,i) =>(
                <tr key={cafe.id} onClick={()=>setIdCafe(cafe.id)}>
                  <td>{i+1}</td>
                  <td>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
        <div className='col-4'>
          <DetalleCafe idCafe={idCafe}/>
        </div>          
      </div>
      <p className="text-center mt-5" >Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
    </div> 
  )
}

export default ListaCafe;