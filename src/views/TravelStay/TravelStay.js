import React from "react";

const TravelStay = () => {
  return (
    <div className="container h-auto bg-green-700">
      <div className="pt-16">
        <h1 className="text-white flex justify-center items-center px-4 py-2 text-6xl font-serif">
          {"Travel & Stay"}
        </h1>
        <div className="flex justify-center my-4">
          <a
            rel="noreferrer"
            target="_blank"
            className="underline font-serif text-xl text-white transition hover:text-gray-900"
            href="https://www.walper.com/"
          >
            The Walper Hotel
          </a>
        </div>
      </div>
    </div>
  );
};

export default TravelStay;
