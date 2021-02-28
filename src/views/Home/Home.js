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
        <p className="text-white hidden font-serif md:flex justify-start items-center px-8 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron Are <br /> Tying The Knot
        </p>
        <p className="text-white flex font-serif md:hidden justify-start items-center px-8 py-2 text-6xl uppercase leading-snug">
          Lelaine <br /> & Aaron <br /> Are Tying <br /> The Knot
        </p>
      </div>
      <div className="pt-4 ">
        <CovidUpdate />
      </div>

      <div className="flex-row px-4 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-between lg:justify-center">
          <LocationDetails
            header="Ceremony & Reception"
            location="Crystal Ballroom"
            details={[
              "The Walper Hotel",
              "20 Queen St South",
              "Kitchener, ON",
              "4:00 PM",
            ]}
          />

          <LocationDetails
            header="Cocktails"
            location="Lokal Lounge"
            details={[
              "The Walper Hotel",
              "20 Queen St South",
              "Kitchener, ON",
              "5:00 PM - 11 PM",
            ]}
          />
          {/* <div className="flex justify-start px-4 mt-12 md:hidden lg:flex">
            <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />
          </div> */}
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
    <div className="px-8 ">
      <div className="my-4">
        <WhiteDivider />
      </div>

      <div className="shadow-lg px-2 py-2 rounded-md">
        <div className="mb-4">
          <Text>Dear Friends and Family,</Text>
        </div>
        <Text>
          We are so excited to celebrate our wedding with you! We know the last
          year has been a roller coaster ride but we are believing that God has
          the best in store.
        </Text>
        <div className="my-4">
          <Text>
            We are keeping a close eye on government restrictions here in Canada
            and also abroad. We will keep you updated on this website regarding
            any changes to our wedding plans. In the meantime, please leave us
            your mailing address{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="underline font-bold transition hover:text-gray-900"
              href="https://server.l-a-wedding.net/form/create"
            >
              HERE
            </a>{" "}
            so we can proceed with sending you our invites.
          </Text>
        </div>

        <div className="my-4">
          <Text>
            We will add more details to the site in the next few weeks so you
            can plan your travel and stay. It will include a wedding block code
            should you choose to stay at the Walper. There are a lot of places
            to explore around the area, we're excited to share them with you!
          </Text>
        </div>

        <Text>
          Please continue to join us in prayer that we may be able to celebrate
          with you all in person in August! Be well!
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
