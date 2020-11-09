import React, { useState } from "react";
import {
  useHistory,
  // useLocation
} from "react-router-dom";
import { LOGIN } from "../../api/Endpoints";
import useAuth from "../../hooks/useAuth";
import { parseResponse, handleResponse } from "../../helpers/HelperFunctions";

const Login = () => {
  const history = useHistory();
  // const location = useLocation();
  const auth = useAuth();
  // const { from } = location.state || { from: { pathname: "/" } };

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
    <div className="container h-screen p-6  bg-green-700">
      <div className="pt-16">
        <h1 className="text-gray-300 flex justify-center items-center px-4 py-2 text-6xl font-semibold">
          {"Login"}
        </h1>

        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="email"
          placeholder="Email"
        />

        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-white mt-4 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
        />
        <div className="flex justify-center">
          <button
            onClick={login}
            className="bg-green-500 mt-3  focus:outline-none hover:bg-blue-700 text-white font-bold py-2 px-4 tracking-wider rounded-md"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
