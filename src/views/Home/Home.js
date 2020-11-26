import React from "react";

const Home = () => {
  return (
    <div className="container pt-16 pb-6 overscroll-auto  bg-green-700">
      <div className="pt-8">
        <p className="text-gray-300 font-serif flex justify-center items-center px-4 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron Are <br /> Tying <br /> The Knot
        </p>
      </div>
      <div>
        <h1 className="text-xl font-serif uppercase px-4 pt-12">Ceremony</h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-8 px-4 text-xl tracking-wide font-serif underline">
          Crystal Ballroom
        </h1>
      </div>
      <div>
        <p className="text-gray-300 px-4 text-xl font-serif">
          20 Queen St South <br />
          Kitchener, ON <br />
          4:00 PM
        </p>
      </div>
      <div>
        <h1 className="text-xl uppercase tracking-wide font-serif px-4 pt-8">
          Reception
        </h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-6 px-4 text-2xl font-serif underline">
          Oak Lobby
        </h1>
      </div>
      <div>
        <p className="text-gray-300 px-4 text-xl font-serif">
          20 Queen St South <br />
          Kitchener, ON <br />
          5:00 PM - 11 PM
        </p>
      </div>
    </div>
  );
};

export default Home;
