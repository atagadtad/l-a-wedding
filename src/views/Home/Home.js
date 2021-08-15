import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import LocationDetails from "../../components/LocationDetails";
import "./Home.css";

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

      {/* <div className="flex justify-center"> */}
      <div className="video-container">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/3qagWj7Ck88"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {/* </div> */}

      <div className="my-4">
        <WhiteDivider />
      </div>

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

          <LocationDetails
            textAlign="LEFT"
            header="Attire"
            location="Summer cocktail"
            details={[]}
          />
        </div>

        <div className="px-4 mt-6">
          <img
            onLoad={() => setImageLoaded(true)}
            className={`object-contain xl:w-4/5 ${!imageLoaded && "hidden"}`}
            src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/l-a-cheek.jpg"
            alt="L-A"
          />
          {!imageLoaded && (
            <SkeletonTheme color="#b5b8bd" highlightColor="#a5a6a7  ">
              <div className="w-full xl:w-4/5">
                <Skeleton height={handleWidth()} />
              </div>
            </SkeletonTheme>
          )}
        </div>
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
