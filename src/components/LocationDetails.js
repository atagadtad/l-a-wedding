import React from "react";

const LocationDetails = ({
  header,
  location,
  details,
  textAlign,
  flexAlign,
  link,
  linkText,
  lowercaseHeader,
}) => {
  const mapDetails = details.map((string, index) => (
    <p
      key={index}
      className={`${textAlign}
    text-white  tracking-wide px-4 text-xl font-serif`}
    >
      {string}
    </p>
  ));

  return (
    <div className="flex-col w-full">
      <div className={`flex ${flexAlign}`}>
        {header && (
          <h1
            className={`text-xl tracking-wider font-serif  ${
              (lowercaseHeader ? "" : "uppercase", textAlign)
            } px-4 pt-12`}
          >
            {header}
          </h1>
        )}
      </div>
      <div className={`flex ${flexAlign}`}>
        <h1
          className={`${
            !location && "hidden"
          } text-white  py-8 px-4 text-xl tracking-wider font-serif`}
        >
          {location}
        </h1>
        {link && linkText && (
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-xl uppercase text-white transition hover:text-gray-900"
            href={link}
          >
            {linkText}
          </a>
        )}
      </div>
      <div className={`${!location && "mt-6"} `}>{mapDetails}</div>
    </div>
  );
};

export default LocationDetails;
