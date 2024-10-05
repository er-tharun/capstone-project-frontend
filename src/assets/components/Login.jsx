import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <section className="login">
      <h1 className="text-3xl text-white">Login</h1>
      <form>
        <input type="email" name="" className="email" placeholder="enter your email" />
        <input type="password" name="" className="password" placeholder="enter your password" />
        <input type="submit" value="login" className="btn" />
      </form>
    </section>
  );
};

export default Login;