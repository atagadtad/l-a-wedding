import React from "react";
import { Link } from "react-router-dom";

const LAButton = ({ buttonText, navigatesTo }) => {
  return (
    <div className="mt-5">
      <div className="py-2">
        <button className="uppercase border transition duration-500 ease-in-out hover:bg-white tracking-wide  hover:text-green-700 hover:border-white  focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white">
          <Link to={navigatesTo}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default LAButton;
