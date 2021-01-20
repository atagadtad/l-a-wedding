import React from "react";
import { Link } from "react-router-dom";

// Custom Components
import Text from "../../components/Text";

const Home = () => {
  return (
    <div className="container md:mt-12 overscroll-auto bg-green-700">
      <div>
        <p className="text-gray-300 font-serif flex justify-start items-center px-4 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron Are <br /> Tying The Knot
        </p>
      </div>
      <div className="pt-4">
        <CovidUpdate />
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

        <div className="px-4 mt-6">
          <img
            className="object-contain"
            src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/l-a-cheek.jpg"
            alt="L-A"
          />
        </div>
      </div>

      <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />

      <div className="px-8 my-10">
        <WhiteDivider />
      </div>
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
    <div className="divide-y-2 divide-white">
      <div></div>
      <div></div>
    </div>
  );
};

const CovidUpdate = () => {
  return (
    <div className="px-8">
      <div className="my-4">
        <WhiteDivider />
      </div>

      <div className="mb-4">
        <Text>Dear Friends and Family,</Text>
      </div>
      <Text>
        We are so excited to celebrate our wedding with you! We know the last
        few months (year!) have been a roller coaster ride for most of us but we
        are believing in God’s best despite the pandemic.
      </Text>
      <div className="my-4">
        <Text>
          We will keep you updated via this website for any wedding plan
          changes. We are keeping a close eye on government restrictions here
          and also abroad.
        </Text>
      </div>
      <Text>
        Please join us in prayer that we may be able to celebrate with you all
        in August!
      </Text>
      <div className="mt-4 mb-2">
        <Text>Love,</Text>
      </div>
      <Text>Lelaine + Aaron</Text>

      <div className="my-4">
        <WhiteDivider />
      </div>
    </div>
  );
};
