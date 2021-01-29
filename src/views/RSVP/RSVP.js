import React, { useState } from "react";

const RSVP = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="sm:container h-auto  bg-green-700">
      <div className="pt-16 h-full flex items-center">
        <div className="w-screen mb-40">
          <h1 className="text-white flex justify-start px-4 py-2 text-6xl font-serif">
            RSVP
          </h1>
          <div className="px-4 mb-6">
            <p className="text-xl text-gray-100 font-serif">
              We look forward to celebrating with you! <br />
              Confirm with the button.
            </p>
          </div>
          <div className="px-4 py-2">
            <button
              onClick={() => setShowForm(!showForm)}
              className="uppercase border transition duration-500 ease-in-out hover:bg-white hover:text-green-700 hover:border-gray-300 hover:font-extrabold focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white"
            >
              I'll be there!
            </button>
          </div>
        </div>
      </div>
      {showForm && <RSVPForm showForm={showForm} setShowForm={setShowForm} />}
    </div>
  );
};

const RSVPForm = ({ showForm, setShowForm }) => {
  return (
    <div className="h-screen pt-6 overflow-hidden absolute inset-0 bg-gray-100">
      <div className="py-3 flex w-screen justify-space-between items-start">
        <div className="mx-6">
          <h1 className="text-gray-800 font-semibold text-lg">
            RSVP for Lelaine & Aaron's Wedding
          </h1>
        </div>
        <CloseFormButton showForm={showForm} setShowForm={setShowForm} />
      </div>
      <div className="h-full mx-6">
        <h1 className="text-gray-800 mb-3">Name: *</h1>
        <div className="flex justify-evenly">
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

        <h1 className="text-gray-800 mt-6 mb-1">Will you be attending? *</h1>
        <div className="md:flex md:items-center mb-1">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Yes</span>
          </label>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md:w-2/3 block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">No</span>
          </label>
        </div>
      </div>
    </div>
  );
};

const CloseFormButton = ({ showForm, setShowForm }) => {
  return (
    <button
      className="flex mx-10 items-center py-2  text-teal-200 border-teal-400 hover:text-white hover:border-white"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default RSVP;
