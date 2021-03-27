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
              showWalperLink={true}
              textAlign="RIGHT"
              header="Ceremony & Reception"
              details={["20 Queen St South", "Kitchener, ON"]}
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

        <div class="my-8 px-4 flex w-full justify-center">
          <p className="font-serif text-white">
            Booking code for the Walper available, please let us know if you'd
            like it in advance. Otherwise we will post it in May.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelStay;
