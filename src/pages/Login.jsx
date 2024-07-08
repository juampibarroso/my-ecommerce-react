import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Ingresa:</h2>
      <form>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Login;
