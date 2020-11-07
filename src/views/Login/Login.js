import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { LOGIN } from "../../api/Endpoints";
import useAuth from "../../hooks/useAuth";

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
      .then((response) => {
        const { status, statusText } = response;
        const data = response.json();
        return Promise.all([status, statusText, data])
          .then((res) => {
            const [status, statusText, data] = res;
            return { status, statusText, data };
          })
          .catch((err) => {
            return { status: undefined, data: err };
          });
      })
      .then((result) => {
        const { status, statusText, data } = result;
        const { message } = data;
        console.log({ result });
        if (status === 200 || status === 201) {
          auth.signin(() => {
            history.replace(from);
          });
        } else if (status === 401) {
          alert("Invalid token!");
        } else if (status >= 402 && status <= 499) {
          alert(`${statusText}. ${message && message} Error code: ${status}`);
        } else {
          alert("Server error.");
        }
      })
      .catch((err) => console.log({ err }));
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
        <input onChange={(e) => setEmail(e.target.value)} placeholder="email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
      </div>
    </div>
  );
};

export default Login;
