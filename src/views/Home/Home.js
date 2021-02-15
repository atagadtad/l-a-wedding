import React, { useState } from "react";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

// Custom Components
import Text from "../../components/Text";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="container md:mt-12 overscroll-auto bg-green-700">
      <div>
        <p className="text-white hidden font-serf md:flex justify-start items-center px-8 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron Are <br /> Tying The Knot
        </p>
        <p className="text-white flex font-serif md:hidden justify-start items-center px-8 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron <br /> Are Tying <br /> The Knot
        </p>
      </div>
      <div className="pt-4">
        <CovidUpdate />
      </div>

      <div className="flex-row px-4 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-between lg:justify-center">
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
          <div className="flex justify-start px-4 mt-12 md:hidden lg:flex">
            <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />
          </div>
        </div>

        <div className="px-4 mt-6">
          <img
            onLoad={() => setImageLoaded(true)}
            className={`object-contain xl:w-4/5 ${!imageLoaded && "hidden"}`}
            src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/l-a-cheek.jpg"
            alt="L-A"
          />
          {!imageLoaded && (
            // {true && (
            <SkeletonTheme color="#b5b8bd" highlightColor="#a5a6a7  ">
              <div className="w-full xl:w-4/5">
                <Skeleton height={handleWidth()} />
              </div>
            </SkeletonTheme>
          )}
        </div>
      </div>

      <div className="px-8 hidden justify-center md:mt-10 md:flex lg:hidden ">
        <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />
      </div>

      <div className="px-8 my-10">
        <WhiteDivider />
      </div>
    </div>
  );
};

export default Home;

const handleWidth = () => {
  let result = 0;
  const windowWidth = window.innerWidth;

  if (windowWidth > 1024) {
    result = 620;
  } else if (windowWidth > 768) {
    result = 480;
  } else {
    result = 480;
  }

  return result;
};

const LocationDetails = ({ header, location, details }) => {
  const mapDetails = details.map((string, index) => (
    <p key={index} className="text-white tracking-wide px-4 text-xl font-serif">
      {string}
    </p>
  ));
  return (
    <div className="flex-col">
      <div>
        <h1 className="text-xl tracking-wider font-serif uppercase px-4 pt-12">
          {header}
        </h1>
      </div>
      <div>
        <h1 className="text-white py-8 px-4 text-xl tracking-wider font-serif">
          {location}
        </h1>
      </div>
      <div>{mapDetails}</div>
    </div>
  );
};

const LAButton = ({ buttonText, navigatesTo }) => {
  return (
    <div className="mt-5">
      <div className="py-2">
        <button className="uppercase border transition duration-500 ease-in-out hover:bg-white tracking-wide  hover:text-green-700 hover:border-white  focus:outline-none text-lg font-thin font-serif text-white py-3 px-5 border-solid border-white">
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

      <div class="shadow-lg px-2 py-2 rounded-md">
        <div className="mb-4">
          <Text>Dear Friends and Family,</Text>
        </div>
        <Text>
          We are so excited to celebrate our wedding with you! We know the last
          few months (year!) have been a roller coaster ride for most of us but
          we are believing in God’s best despite the pandemic.
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
      </div>

      <div className="my-4">
        <WhiteDivider />
      </div>
    </div>
  );
};
