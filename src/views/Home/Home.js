import React from "react";
import { Link } from "react-router-dom";
import Proposal from "../../assets/jpgs/black_white_l_a.jpg";

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
        <h1 className="text-xl uppercase tracking-wide font-serif px-4 pt-8 pb-1">
          Reception
        </h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-8 px-4 text-xl font-serif underline">
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
      <div className="mt-5">
        <div className="px-4 py-2">
          <button className="uppercase border focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white">
            <Link to="/RSVP">I'll be there!</Link>
          </button>
        </div>
      </div>

      <div className="px-4 mt-6">
        <img src={Proposal} />
      </div>
      <div className="px-10 py-10 mt-10 divide-y-2 divide-white">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
