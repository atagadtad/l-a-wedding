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
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const login = () => {
    setIsLoggingIn(true);
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
            setIsLoggingIn(false);
            history.push("/");
          });
        });
      })
      .catch((err) => {
        setIsLoggingIn(false);
        console.log({ err });
      });
  };

  return (
    <div className="container bg-green-700 px-4">
      <h1 className="text-gray-300 flex justify-center items-center px-4 py-6 text-6xl font-serif">
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
          className="bg-white shadow-2xl mt-4 max-w-lg font-serif border-transparent focus:ring-2 focus:ring-gray-300 focus:outline-none rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          type="password"
        />
      </div>
      <div className="px-4 py-8 flex justify-center">
        <button
          onClick={login}
          className="uppercase border hover:bg-gray-300 hover:text-gray-500 hover:border-gray-300 focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white"
        >
          {isLoggingIn ? (
            <svg class="animate-spin h-5 w-5 mx-3" viewBox="0 0 24 24">
              <circle
                className="bg-white"
                stroke="white"
                stroke-width="4"
                fill="transparent"
                r="52"
                cx="60"
                cy="60"
              />
            </svg>
          ) : (
            "LOGIN"
          )}
        </button>
      </div>
    </div>
  );
};

export default Login;
