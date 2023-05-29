import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import bannerimg from "../assets/images/image 1.png" // Archivo CSS personalizado
import { json } from "react-router-dom";
import ListaCafe from "./ListaCafeComponent/ListaCafe";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (user, pass)  => {
    fetch('http://localhost:3001/login', 
      {method: "POST",
      body: JSON.stringify({"login": user,"password": pass}),
      headers: {"Content-Type": "application/json"}
      })
      .then(resp => {
        console.log(resp.status);
        if( resp.status === 200)
          {
            setError(false);
            navigate("/cafes");
          }
        if( resp.status === 401)
          {setError(true);
          }
          
      })
    
  };

  return (
    <div className="container" style={{
    }}>
      <h3>El aroma mágico</h3>
      <hr class="hr" />
      <img src={bannerimg} alt="" style={{width: "100%"}} />
      <hr class="hr" />
      <div className="container" style={{margin:"auto",width: "650px"}}>
        <p><b>Inicio de sesión</b></p>
        <div style={{
          border: '1px solid #aaa',
          padding: '10px 100px',
          paddingBottom: '50px',
          background: '#fbf1f1',
        }}>
          <div class="form-group">
            <label for="userid"><b>Nombre de usuario</b></label>
            <input style={{
              background: '#d9d9d9',
              border: 'none',
            }} type="text" id="userid" class="form-control" aria-describedby="emailHelp" placeholder="" 
              onChange={(e) => setUser(e.target.value)}
            />

          </div>
          <div class="form-group">
            <label for="pass"><b>Contraseña</b></label>
            <input style={{
              background: '#d9d9d9',
              border: 'none',
            }} type="password" id="pass" class="form-control" aria-describedby="emailHelp" placeholder=""
                onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="container m-0 mt-3 gap-3 row">
            <button style={{
              background: '#8daa91',
              border: 'none',
            }} className="col py-2" 
            onClick={() => handleLogin(user,pass)}
            ><b>Ingresar</b></button>
            <button style={{
              background: '#f25f60',
              border: 'none',
            }} className="col py-2"><b>Cancelar</b></button>
          </div>
          {error && <p className="" style={{color:"#CD3232", position: "absolute"}}><b>Error de autenticación. Revise sus credenciales</b></p>}
        </div>
      </div>
      <p className="text-center mt-5" >Contact us: +57 3102105253 - info@elaromamagico.com - @elaromamagico</p>
    </div>
  );
};

export default LoginForm;