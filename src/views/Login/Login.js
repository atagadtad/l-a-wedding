import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LOGIN } from "../../api/Endpoints";
import useAuth from "../../hooks/useAuth";
import { parseResponse, handleResponse } from "../../helpers/HelperFunctions";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const auth = useAuth();
  const { from } = location.state || { from: { pathname: "/" } };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => parseResponse(response))
      .then((result) => {
        // console.log({ result });
        handleResponse(result, () => {
          auth.signin(() => {
            history.push("/");
          });
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="container h-screen  bg-teal-500">
      <div className="pt-16">
        <h1 className="text-gray-300 flex justify-center items-center px-4 py-2 text-6xl font-semibold">
          {"Login"}
        </h1>
        <p>You must log in to view the page at {from.pathname}</p>
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button className="bg-red-400 rounded-sm px-2 py-3" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
