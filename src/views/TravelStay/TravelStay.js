import React from "react";

const TravelStay = () => {
  return (
    <div className="container h-auto bg-green-700">
      <div className="pt-16">
        <h1 className="text-white flex justify-center items-center px-4 py-2 text-6xl font-serif">
          {"Travel & Stay"}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-12">
          <div className="flex mx-6 justify-center items-center">
            <a
              rel="noreferrer"
              target="_blank"
              className="underline font-serif text-xl text-white transition hover:text-gray-900"
              href="https://www.walper.com/"
            >
              The Walper Hotel
            </a>
          </div>
          <div className="mx-6">
            <img
              className="object-contain rounded-md shadow-md"
              alt="WALPER"
              src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/walper.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelStay;
