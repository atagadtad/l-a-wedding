import React, { useState } from "react";

const RSVP = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="h-auto  bg-green-700">
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
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div
            onClick={() => setShowForm(!showForm)}
            class="absolute inset-0 bg-gray-500 opacity-75"
          ></div>
        </div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          class="w-full inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-gray-100 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 flex justify-end">
                  <CloseFormButton
                    showForm={showForm}
                    setShowForm={setShowForm}
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first_name"
                    class="block text-sm font-bold font-serif tracking-wider text-black"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autocomplete="given-name"
                    class="mt-1 form-input block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last_name"
                    class="block text-sm font-bold font-serif tracking-wider text-black"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autocomplete="family-name"
                    class="mt-1 form-input block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email"
                    class="block text-sm font-bold font-serif tracking-wider text-black"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autocomplete="email"
                    class="form-input mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="rsvp"
                    class="block text-sm font-bold font-serif tracking-wider text-black"
                  >
                    Will you be attending?
                  </label>
                  <select
                    id="rsvp"
                    name="rsvp"
                    class="mt-1 font-serif font-bold block form-select w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex transition duration-500 ease-in-out justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-700 hover:bg-white hover:text-green-700 hover:border-green-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-green-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CloseFormButton = ({ showForm, setShowForm }) => {
  return (
    <button
      className="hover:text-white hover:border-white"
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
