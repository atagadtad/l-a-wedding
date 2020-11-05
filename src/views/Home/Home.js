import React from "react";

const Home = () => {
  return (
    <div className="container h-screen  bg-teal-500">
      <div className="pt-16">
        <h1 className="text-gray-300 flex justify-center items-center px-4 py-2 text-6xl font-semibold">
          {`Lelaine & Aaron Are Tying The Knot`}
        </h1>
      </div>
      <div>
        <h1 className="text-3xl font-semibold px-4 pt-3">Ceremony</h1>
      </div>
      <div>
        <h1 className="text-gray-300 px-4 text-2xl font-semibold underline">
          The Walper Hotel
        </h1>
      </div>
      <div>
        <p className="text-gray-300 px-4 text-xl font-semibold">
          20 Queen St South <br />
          Kitchener, ON <br />
          4:00 pm
        </p>
      </div>
    </div>
  );
};

export default Home;
