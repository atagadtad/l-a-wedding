import React from "react";
import LocationDetails from "../../components/LocationDetails";

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

            <div class="my-8 px-4 flex w-full justify-end">
              <p className="font-serif text-white">More details to follow</p>
            </div>
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
    </div>
  );
};

export default TravelStay;
