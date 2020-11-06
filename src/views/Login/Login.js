import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();

  const { from } = location.state || { from: { pathname: "/" } };
  const login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div className="container h-screen  bg-teal-500">
      <div className="pt-16">
        <h1
          onClick={login}
          className="text-gray-300 flex justify-center items-center px-4 py-2 text-6xl font-semibold"
        >
          {"Login"}
        </h1>
        <p>You must log in to view the page at {from.pathname}</p>
      </div>
    </div>
  );
};

export default Login;
