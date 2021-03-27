import React from "react";

// Custom Components
import LocationDetails from "../../components/LocationDetails";
import WhiteDivider from "../../components/WhiteDivider";

const TravelStay = () => {
  return (
    <div className="container h-auto bg-green-700">
      <div className="pt-16">
        <h1 className="text-white flex justify-center items-center px-4 py-2 text-6xl font-serif">
          {"Travel & Stay"}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <div className="mx-6 lg:hidden">
            <img
              className="object-contain rounded-md shadow-md"
              alt="WALPER"
              src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/walper.jpg"
            />
          </div>

          <div className="flex flex-col mx-6 items-center">
            <div className="w-full flex justify-end"></div>

            <LocationDetails
              link={"https://www.walper.com/"}
              linkText={"The Walper Hotel"}
              textAlign="RIGHT"
              header="Ceremony & Reception"
              details={["20 Queen St South", "Kitchener, ON"]}
            />

            <LocationDetails
              link={"https://goo.gl/maps/eSwmMfVSiwJY8eaA8"}
              linkText={"Parking"}
              showWalperLink={false}
              textAlign="RIGHT"
              lowercaseHeader={true}
              details={["4 Charles St East", "Kitchener, ON"]}
            />
          </div>

          <div className="mx-6 hidden lg:block">
            <img
              className="object-contain rounded-md shadow-md"
              alt="WALPER"
              src="https://l-a-wedding.s3.ca-central-1.amazonaws.com/walper.jpg"
            />
          </div>
        </div>
      </div>

      <div className="my-16">
        <WhiteDivider />

        <h3 className="text-white mt-16 flex justify-center items-center px-4 py-2 text-5xl font-serif">
          Where to Stay
        </h3>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://www.walper.com/"
          >
            The Walper Hotel
          </a>
        </div>

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-white">
            Booking code for the Walper available, please let us know if you'd
            like it in advance. Otherwise we will post it in May.
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

      <div className="my-16">
        <WhiteDivider />

        <h3 className="text-white mt-16 flex justify-center items-center px-4 py-2 text-5xl font-serif">
          Where to Roam
        </h3>

        <div className="mt-4 flex justify-center">
          <a
            rel="noreferrer"
            target="_blank"
            className="px-4 pt-6 block underline  font-serif text-2xl uppercase text-white transition hover:text-gray-900"
            href="https://goo.gl/maps/isdooqyht6JRkTgE9"
          >
            Around the Walper
          </a>
        </div>

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-white">
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
          <p className="font-serif text-white">
            A great place to visit on a Saturday morning and it's only 15
            minutes from the Walper! Make sure to grab some apple fritters
            whilst you're there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelStay;
