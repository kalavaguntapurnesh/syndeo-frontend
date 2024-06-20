// import React from "react";

const Schedules = ({ schedule }) => {
  return (
    <>
      <div
        className="p-2 w-full rounded-xl mt-4 mb-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        // onClick={() => setShowModal(true)}
      >
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-1/3 flex  justify-center items-center">
            <img src="" alt="" />
          </div>
          <div className="md:w-1/3  flex flex-col justify-center items-center">
            <div className="my-1 flex justify-center items-center">
              <h1 className="font-bold md:text-sm text-xs text-black  text-center">
                Start Time:{" "}
                <span className="font-medium text-colorThree md:text-sm text-xs">
                  {schedule.startTime}
                </span>
              </h1>
            </div>
            <div className="my-1 flex justify-center items-center">
              <h1 className="font-bold md:text-sm text-xs text-black text-center">
                End Time:{" "}
                <span className="font-medium text-colorThree md:text-sm text-xs">
                  {schedule.endTime}
                </span>
              </h1>
            </div>
          </div>
          <div className="md:w-1/3  flex justify-center items-center">
            {(() => {
              if (schedule.isBooked) {
                return (
                  <p className="lg:p-4 p-[11px] cursor-pointer font-medium">
                    <div
                      className="bg-colorFour
                                rounded-3xl text-white px-8 py-3 text-center text-sm"
                    >
                      Already Booked
                    </div>
                  </p>
                );
              } else {
                return (
                  <p className="lg:p-4 p-[11px] cursor-pointer font-medium">
                    <div
                      className="bg-gray-600
                      rounded-3xl text-white px-12 py-3 text-center text-sm"
                    >
                      No Booking Yet
                    </div>
                  </p>
                );
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedules;
