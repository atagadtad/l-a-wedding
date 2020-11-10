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
        <div className="h-screen pt-6 overflow-hidden  absolute inset-0 bg-gray-100">
          <div className="py-3 flex w-screen justify-space-between items-start">
            <div className="mx-10">
              <h1 className="text-gray-800 font-semibold text-lg">{`RSVP for Lelaine & Aaron's Wedding`}</h1>
            </div>
            <button
              className="flex mx-10 items-center px-3 py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white"
              onClick={() => setShowForm(!showForm)}
            >
              <svg
                className="text-gray-800 h-6 w-6"
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
          <div className="h-full mx-10">
            <h1 className="text-gray-800 mb-3">Name: *</h1>
            <div className="flex justify-between">
              <input
                placeholder="First Name"
                className="bg-white w-40 focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block  appearance-none leading-normal"
              />
              <input
                placeholder="Last Name"
                className="bg-white w-40 focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal"
              />
            </div>
            <h1 className="text-gray-800 mt-6 mb-3">Email: *</h1>
            <div className="flex">
              <input
                placeholder="Email"
                className="bg-white focus:outline-none border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              />
            </div>

            <h1 className="text-gray-800 mt-6 mb-1">
              Will you be attending? *
            </h1>
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">Yes</span>
              </label>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="md:w-1/3"></div>
              <label class="md:w-2/3 block text-gray-500 font-bold">
                <input class="mr-2 leading-tight" type="checkbox" />
                <span class="text-sm">No</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;
