import React from "react";

const Home = () => {
  return (
    <div className="container pt-16 pb-6 overscroll-auto bg-teal-500">
      <div className="">
        <h1 className="text-gray-300 flex justify-center items-center px-4 py-2 text-6xl font-semibold">
          {`Lelaine & Aaron Are Tying The Knot`}
        </h1>
      </div>
      <div>
        <h1 className="text-3xl font-semibold px-4 pt-3">Ceremony</h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-12 px-4 text-2xl font-semibold underline">
          Crystal Ballroom
        </h1>
      </div>
      <div>
        <p className="text-gray-300 px-4 text-xl font-semibold">
          20 Queen St South <br />
          Kitchener, ON <br />
          4:00 pm
        </p>
      </div>
      <div>
        <h1 className="text-3xl font-semibold px-4 pt-3">Reception</h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-12 px-4 text-2xl font-semibold underline">
          Oak Lobby
        </h1>
      </div>
      <div>
        <p className="text-gray-300 px-4 text-xl font-semibold">
          20 Queen St South <br />
          Kitchener, ON <br />
          5:00 pm - 11 pm
        </p>
      </div>
    </div>
  );
};

export default Home;
