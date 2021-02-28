import React from "react";

const LocationDetails = ({
  header,
  location,
  details,
  textAlign,
  showWalperLink,
}) => {
  const mapDetails = details.map((string, index) => (
    <p
      key={index}
      className={`${
        textAlign && textAlign === "LEFT" ? "text-left" : "text-right"
      }
    text-white  tracking-wide px-4 text-xl font-serif`}
    >
      {string}
    </p>
  ));
  return (
    <div className="flex-col w-full">
      <div
        className={`flex ${
          textAlign && textAlign === "LEFT" ? "justify-start" : "justify-end"
        }`}
      >
        <h1 className="text-xl tracking-wider font-serif uppercase px-4 pt-12">
          {header}
        </h1>
      </div>
      <div
        className={`flex ${
          textAlign && textAlign === "LEFT" ? "justify-start" : "justify-end"
        }`}
      >
        <h1
          className={`${
            !location && "hidden"
          } text-white  py-8 px-4 text-xl tracking-wider font-serif`}
        >
          {location}
        </h1>
        {showWalperLink && (
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-xl uppercase text-white transition hover:text-gray-900"
            href="https://www.walper.com/"
          >
            The Walper Hotel
          </a>
        )}
      </div>
      <div className={`${!location && "mt-6"} `}>{mapDetails}</div>
    </div>
  );
};

export default LocationDetails;
