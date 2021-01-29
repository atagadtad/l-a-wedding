import React, { useState } from "react";
import {
  useHistory,
  // useLocation
} from "react-router-dom";
import { PUBLIC_LOGIN } from "../../api/Endpoints";
import useAuth from "../../hooks/useAuth";
import { parseResponse, handleResponse } from "../../helpers/HelperFunctions";

const Login = () => {
  const history = useHistory();
  const auth = useAuth();

  const [password, setPassword] = useState("");

  const login = () => {
    fetch(PUBLIC_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
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
    <div className="container bg-green-700 px-4">
      <h1 className="text-white flex justify-center items-center px-4 py-6 text-6xl font-serif">
        {"Login"}
      </h1>

      <div className="flex justify-center">
        <input
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              return login();
            }
          }}
          placeholder="Password"
          className="bg-white mt-4 max-w-lg font-serif focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
        />
      </div>
      <div className="px-4 py-8 flex justify-center">
        <button
          onClick={login}
          className="uppercase border focus:outline-none  hover:bg-white hover:text-green-700 focus:bg-white focus:text-green-700 tracking-widest text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white"
        >
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
