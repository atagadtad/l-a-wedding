import React from "react";

const RSVP = () => {
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
            <button className="uppercase border focus:outline-none text-lg font-thin text-white py-3 px-5 border-solid border-white">
              I'll be there!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
