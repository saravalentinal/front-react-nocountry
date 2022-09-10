import React, { useState } from "react";

export default function Login() {

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    userForm: "Nombre de usuario incorrecto",
    passForm: "La contraseña es incorrecta"
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    var { userForm, passForm } = document.forms[0];

    const userData = database.find((user) => user.username === userForm.value);
  
    if (userData) {
      if (userData.password !== passForm.value) {
        setErrorMessages({ name: "passForm", message: errors.passForm });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "userForm", message: errors.userForm });
    }
  };

  const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const renderForm = (

    <form className="login-form" onSubmit={handleSubmit}>

        <div className="email-pass-container">

            <h1 className="login-title">Iniciá Sesión</h1>

            <label htmlFor="exampleuserinput" className="user-label">Usuario</label>
            <input type="text" placeholder="RamiroCosa" name="userForm" required></input>
            {renderErrorMessage("userForm")}

            <label htmlFor="exampleuserpassword" className="password-label">Contraseña</label>
            <input type="password" name="passForm" required></input>
            {renderErrorMessage("passForm")}
                    
        </div>

        <div className="login-div-button">
            <button type="submit" className="login-button">
              Iniciar Sesión
            </button>
        </div>

    </form>
    
  );


  return (
    <>
      
      {isSubmitted ? <div>User is successfully logged in</div> : renderForm}

    </>

  )
}