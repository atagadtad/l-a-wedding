import React, { useState } from "react";

// Custom Components
import LocationDetails from "../../components/LocationDetails";
import WhiteDivider from "../../components/WhiteDivider";

const TravelStay = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const onImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="container h-auto bg-green-700">
      <div className="pt-16">
        <h1 className="text-white flex justify-center items-center px-4 py-2 text-6xl font-serif">
          {"Travel & Stay"}
        </h1>

        <div className="grid grid-cols-1 gap-12 my-12">
          <div className="mx-auto">
            <img
              className="object-contain rounded-md shadow-md"
              alt="WALPER"
              src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/walper.jpg"
              loading="lazy"
              onLoad={onImageLoad}
              style={{
                width: "40rem",
                transition: "opacity 0.3s",
                opacity: imageLoaded ? 1 : 0,
              }}
            />
          </div>

          <div className="flex flex-col mx-6 items-center">
            <div className="w-full flex justify-end"></div>

            <h3 className="text-white text-center mt-16 flex justify-center items-center px-4 py-2 text-5xl font-serif">
              Ceremony & Reception
            </h3>

            <LocationDetails
              link={"https://www.walper.com/"}
              linkText={"The Walper Hotel"}
              textAlign="text-center"
              flexAlign="justify-center"
              // header="Ceremony & Reception"
              details={["20 Queen St South", "Kitchener, ON"]}
            />

            <div className="flex-col w-full m-4">
              <div className="flex justify-center">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="px-4 block underline justify-end  font-serif text-lg text-white transition hover:text-gray-900"
                  href="https://www.walper.com/faq"
                >
                  Walper FAQ
                </a>
              </div>
            </div>

            <LocationDetails
              link={"https://goo.gl/maps/YnTfrXVbdbsdS2y89"}
              linkText={"Parking - Charles and Benton Garage"}
              showWalperLink={false}
              textAlign="text-center"
              flexAlign="justify-center"
              lowercaseHeader={true}
              details={["4 Charles St East", "Kitchener, ON"]}
            />

            <div className="flex-col w-full m-4">
              <div className="flex justify-center">
                <p className="font-serif text-center text-white">
                  Park on the north west end <br /> Please note: downtown
                  Kitchener parking lots <br /> are{" "}
                  <em> free after 5pm, and free Saturdays and Sundays </em>
                </p>
              </div>
            </div>

            <div className="flex-col w-full">
              <div className="flex justify-center">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="px-4 block underline justify-end  font-serif text-lg text-white transition hover:text-gray-900"
                  href="https://goo.gl/maps/eSwmMfVSiwJY8eaA"
                >
                  Route to Walper from Parking
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-6 my-16">
        <WhiteDivider />

        <h3 className="text-white text-center mt-16 flex justify-center items-center px-4 py-2 text-5xl font-serif">
          Where to Stay
        </h3>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://reservations.travelclick.com/10242?groupID=3167323"
          >
            The Walper Hotel
          </a>
        </div>

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-center text-white">
            Click on the link above to reserve a room with our booking code.{" "}
            <br /> To book by phone please call:{" "}
            <a href="tel:519-745-4321">519-745-4321</a>
            <br />
            Wedding block code is: <strong>LELAARON21</strong>.
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://www.airbnb.ca/s/Kitchener--ON/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_dates%5B%5D=april&flexible_trip_dates%5B%5D=may&flexible_trip_lengths%5B%5D=weekend_trip&date_picker_type=calendar&query=Kitchener%2C%20ON&place_id=ChIJBVHuA4z0K4gRS1Rf3-b4JZU&checkin=2021-08-20&checkout=2021-08-21&source=structured_search_input_header&search_type=autocomplete_click"
          >
            Airbnb
          </a>
        </div>
      </div>

      <div className="mx-6 my-16">
        <WhiteDivider />

        <h3 className="text-white text-center mt-16 flex justify-center items-center px-4 py-2 text-5xl font-serif">
          Where to Roam
        </h3>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline text-center font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://goo.gl/maps/isdooqyht6JRkTgE9"
          >
            Around the Walper
          </a>
        </div>

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-center text-white">
            We saved a list of places on Google maps for you to checkout whilst
            you stay in Kitchener.
          </p>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://stjacobsmarket.com/"
          >
            St. Jacobs Market
          </a>
        </div>

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-center text-white">
            A great place to visit on a Saturday morning and it's only 15
            minutes from the Walper! Make sure to grab some apple fritters as
            you walk around!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelStay;
