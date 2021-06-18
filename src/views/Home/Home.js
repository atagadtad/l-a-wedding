import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LocationDetails from "../../components/LocationDetails";

// Custom Components
// import Text from "../../components/Text";
import WhiteDivider from "../../components/WhiteDivider";

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="container md:mt-12 overscroll-auto bg-green-700">
      <div>
        {/* DESK TOP HEADER */}
        <p
          style={{
            lineHeight: 1.25,
          }}
          className="text-white hidden md:flex font-serif px-8 py-2 text-6xl md:text-8xl uppercase tracking-wide leading-loose"
        >
          Lelaine <br /> & Aaron Are <br /> Tying The Knot
        </p>
        {/* BELOW is Mobile Header */}
        <p className="text-white flex font-serif md:hidden justify-start items-center px-8 py-2 text-5xl md:text-8xl uppercase tracking-wide leading-snug">
          Lelaine & <br /> Aaron <br /> Are Tying The Knot
        </p>
      </div>

      <div className="my-4">
        <WhiteDivider />
      </div>
      {/* <div className="pt-4 md:py-12">
        <CovidUpdate />
      </div> */}

      <div className="flex-row px-4 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-between lg:justify-start">
          <LocationDetails
            textAlign="LEFT"
            header="Wedding Date"
            location="Friday, August 20, 2021"
            details={[]}
          />

          <LocationDetails
            textAlign="LEFT"
            header="Ceremony & Reception"
            location="Crystal Ballroom"
            details={["The Walper Hotel", "20 Queen St South", "Kitchener, ON"]}
          />

          <LocationDetails
            textAlign="LEFT"
            header="Cocktails"
            location="Lokal Lounge"
            details={["The Walper Hotel", "20 Queen St South", "Kitchener, ON"]}
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
      {/* 
      <div className="px-8 hidden justify-center md:mt-10 md:flex lg:hidden ">
        <LAButton buttonText="I'll be there!" navigatesTo="/RSVP" />
      </div> */}

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

/*
const CovidUpdate = () => {
  return (
    <div className="px-8">
      <div className="my-4">
        <WhiteDivider />
      </div>

      <div className="mx-auto px-2 py-2 max-w-screen-md">
        <div className="mb-4">
          <Text>Dear Friends and Family,</Text>
        </div>

        <div className="my-4">
          <Text>Our wedding plans have changed!</Text>
        </div>

        <Text>
          Instead of having you in-person, we would love for you to celebrate
          our marriage--via livestream! You are invited to witness our wedding
          online, in the comfort of your own homes and in your best party from
          home outfits! Please save Friday, August 20th, 2021 on your calendars.
        </Text>

        <div className="my-4">
          <Text>
            As much as we wanted to celebrate with everyone in person, we have
            prayerfully decided to cut down the number of our in-person guests
            to just 50 people. We thought it best to have a more intimate
            in-person ceremony taking into account everyone’s varying comfort
            level with gatherings and to avoid a massive last minute scramble
            should restrictions change, especially for out-of-town guests.
          </Text>
        </div>

        <div className="my-4">
          <Text>
            We sincerely hope you are able to join us. To RSVP for our
            livestream please click{" "}
            <a
              rel="noreferrer"
              target="_blank"
              className="underline font-bold transition hover:text-gray-900"
              href="https://server.l-a-wedding.net/form/create"
            >
              HERE
            </a>
            .
          </Text>
        </div>

        <div className="my-4">
          <Text>
            We would like to thank all of you for your well wishes and prayers
            during this time. You have all played a part in our lives and our
            relationship and it would mean the world to us to share this
            important milestone with you.
          </Text>
        </div>

        <div className="mt-6 mb-4">
          <Text>We love you all! Be well!</Text>
        </div>
        <Text>Lelaine + Aaron</Text>
      </div>

      <div className="my-4">
        <WhiteDivider />
      </div>
    </div>
  );
};
*/
