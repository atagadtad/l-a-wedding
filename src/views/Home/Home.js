import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container md:mt-12 overscroll-auto bg-green-700">
      <div>
        <p className="text-gray-300 font-serif flex justify-start items-center px-4 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron Are <br /> Tying <br /> The Knot
        </p>
      </div>

      <div className="flex-row px-4 md:grid md:grid-cols-2">
        <div className="flex-col md:flex-row">
          <LocationDetails
            header="Ceremony"
            location="Crystal Ballroom"
            details={["20 Queen St South", "Kitchener, ON", "4:00 PM"]}
          />

          <LocationDetails
            header="Reception"
            location="Oak Lobby"
            details={["20 Queen St South", "Kitchener, ON", "5:00 PM - 11 PM"]}
          />
        </div>

        <div className="flex px-4 mt-6">
          <img
            src="https://server.l-a-wedding.net/storage/l-a-cheek.jpg"
            alt="L-A"
          />
        </div>
      </div>

      <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />

      <WhiteDivider />
    </div>
  );
};

export default Home;

const LocationDetails = ({ header, location, details }) => {
  const mapDetails = details.map((string, index) => (
    <p key={index} className="text-gray-300 px-4 text-xl font-serif">
      {string}
    </p>
  ));
  return (
    <div className="flex-col">
      <div>
        <h1 className="text-xl font-serif uppercase px-4 pt-12">{header}</h1>
      </div>
      <div>
        <h1 className="text-gray-300 py-8 px-4 text-xl tracking-wide font-serif underline">
          {location}
        </h1>
      </div>
      <div>{mapDetails}</div>
    </div>
  );
};

const LAButton = ({ buttonText, navigatesTo }) => {
  return (
    <div className="mt-5 px-4">
      <div className="px-4 py-2">
        <button className="uppercase border focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white">
          <Link to={navigatesTo}>{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

const WhiteDivider = () => {
  return (
    <div className="px-10 py-10 mt-10 divide-y-2 divide-white">
      <div></div>
      <div></div>
    </div>
  );
};
