import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Archivo CSS personalizado
import { AuthContext } from "./AuthContext";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const { saveToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        saveToken(data.token);
        navigate('/home');
      } else {
        // Error 
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        setShowErrorPopup(true);
      }
    } catch (error) {
      console.log("Error al enviar la solicitud:", error);
    }
  };

  const handleAcceptError = () => {
    setShowErrorPopup(false);
  };

  return (
    <div className="banner-cafe">
      
    </div>
  );
};

export default Login;