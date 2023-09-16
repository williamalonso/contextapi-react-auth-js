import React, { createContext, useState } from "react";
import { loginService } from "../services/loginService";
import { useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verifique se os dados de autenticação estão presentes no localStorage
    const authToken = localStorage.getItem('authToken');
    const userEmail = localStorage.getItem('userEmail');

    if (authToken && userEmail) {
      // Se os dados existirem, defina o estado com esses dados na mesma estrutura
      const userData = {
        data: {
          token: authToken,
          user: {
            email: userEmail,
            password: '', // Não armazene a senha no localStorage por razões de segurança
          },
        },
      };
      setUser(userData);
    }
  }, []);

  const login = async(email, password) => {
    try {
      const authenticatedUser = await loginService(email,password);
      setUser(authenticatedUser);
      console.log('Resultado da autenticação:', authenticatedUser);
    } catch(e) {
      console.error('Erro ao autenticar usuário: ', e);
    }
  }

  const logout = () => {
    // Limpe os dados de autenticação no localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');

    // Remova o usuário e o token do estado
    setUser(null);
  }

  return(
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };