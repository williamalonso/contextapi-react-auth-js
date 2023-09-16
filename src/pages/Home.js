import React, {useContext} from "react";
import { AuthContext } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleLogout = () => {
    logout();
    navigate('/');
  }

  if (user && user.data && user.data.token !== '') {
    return (
      <div className="container mx-auto flex flex-col w-80 mt-20">
        <h1>Bem-vindo, você está logado!</h1>
        <p>Email: {user.data.user.email}</p>
        <button onClick={handleLogout} className="mt-5 border-double border-4 border-sky-500">Logout</button>
      </div>
    );
  } else {
    return (
      <>
        <h1>Você não está logado.</h1>
      </>
    );
  }
}

export default Home;