import React from 'react';

const Register = () => {
  return (
    <div>
      <h2>Registrate ahora!</h2>
      <form>
        <div>
          <label htmlFor="username">Nuevo Usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Nueva Contraseña:</label>
          <input type="password" id="password" name="password" />
          
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
