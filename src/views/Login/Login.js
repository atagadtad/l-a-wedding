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
  const auth = useAuth();

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
        handleResponse(result, () => {
          auth.signin(() => {
            history.push("/");
          });
        });
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="container mx-auto p-6 bg-green-700">
      <div className="flex flex-col h-full justify-center pb-16">
        <div className="flex flex-col">
          <h1 className="text-gray-300 flex justify-center items-center px-4 py-6 text-6xl font-serif">
            {"Login"}
          </h1>
          <div className="flex justify-center">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white max-w-lg font-serif focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-center">
            <input
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="bg-white mt-4 max-w-lg font-serif focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="password"
            />
          </div>
          <div className="px-4 py-8 flex justify-center">
            <button
              onClick={login}
              className="uppercase border focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white"
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
