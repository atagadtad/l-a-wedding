import React, { useState } from "react";

const RSVP = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="sm:container h-screen  bg-green-700">
      <div className="pt-16 h-full flex items-center">
        <div className="w-screen mb-40">
          <h1 className="text-gray-300 flex justify-start px-4 py-2 text-6xl font-semibold">
            RSVP
          </h1>
          <div className="px-4 mb-6">
            <p className="text-xl text-gray-100">
              We look forward to celebrating with you! <br />
              Confirm with the button.
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              onClick={() => setShowForm(!showForm)}
              className="uppercase border focus:outline-none text-lg font-thin text-white py-3 px-5 border-solid border-white"
            >
              I'll be there!
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div className="h-screen absolute inset-0 bg-red-300">
          <div className="px-3 py-3 flex w-screen justify-end">
            <button
              className="flex items-center px-3 py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white"
              onClick={() => setShowForm(!showForm)}
            >
              <svg
                className="text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
