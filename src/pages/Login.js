import React, { useContext, useState } from "react";
import { AuthContext } from '../contexts/auth';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      await login(email, password);
      navigate("/home");
    } catch(e) {
      console.error("Erro ao autenticar usuário: ", e);
    }
  }

  return(
    <div className="container mx-auto flex flex-col w-40 mt-20">
      <input
        type="text"
        placeholder="E-mail"
        className="mt-5"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        className="mt-5"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        className="mt-5 border-double border-4 border-sky-500"
      >
        login
      </button>
    </div>
  );
}

export default Login;