import React from 'react';
import { useAuthenticate } from '../effects';


const Login = () => {
  const { username, password, changeUsername, changePassword, login, error } = useAuthenticate();

  return (
    <div className="container center-content">
      <form className="login-block" onSubmit={login} >
        <h1 className="title">Login</h1>
        <input type="text" onChange={changeUsername} value={username} placeholder="Username" required/>
        <input type="password" onChange={changePassword} value={password} placeholder="Password" required/>
        {error ? <p className="error">Wrong username or password</p>:  null}
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login;
