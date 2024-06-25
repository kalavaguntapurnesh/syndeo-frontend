import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import moment from "moment";

const Timings = ({ timing }) => {
  // const navigate = useNavigate();

  const [slots, setSlots] = useState([]);

  const id = timing.organizerId;

  console.log(timing.startTime);
  console.log(timing.endTime);

  const [showModal, setShowModal] = useState(false);

  function intervals(startString, endString) {
    var start = moment(startString, "hh:mm a");
    var end = moment(endString, "hh:mm a");
    console.log("Moment start ", start);
    console.log("Moment end", end);
    start.minutes(Math.ceil(start.minutes() / 30) * 30);

    var current = moment(start);

    while (current <= end) {
      if (slots.includes(current.format("hh:mm a"))) {
        return null;
      } else {
        slots.push(current.format("hh:mm a"));
        current.add(30, "minutes");
      }
    }
    console.log("Slots in the function is", slots);
    return slots;
  }

  intervals(timing.startTime, timing.endTime);

  return (
    <>
      <div
        className="p-2 cursor-pointer w-full rounded-xl mt-4 mb-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onClick={() => setShowModal(true)}
      >
        <div className="flex md:flex-row flex-col justify-between">
          <div className="md:w-1/3 flex  justify-center items-center">
            <img src="" alt="" />
          </div>
          <div className="md:w-1/3  flex flex-col justify-center items-center">
            {/* <div className="my-1">
              <h1 className="font-semibold md:text-base text-xs text-gray-600">
                Name:{" "}
                <span className="font-bold text-colorThree md:text-base text-xs">
                  {timing.bookedCountry}
                </span>
              </h1>
            </div> */}
            {/* <div className="my-1 flex justify-center items-center">
              <h1 className="font-semibold md:text-base text-xs text-gray-600">
                Email:{" "}
                <span className="font-bold text-colorThree md:text-base text-xs">
                  {" "}
                  {timing.bookedEmail}
                </span>
              </h1>
            </div> */}
            <div className="my-1 flex justify-center items-center">
              <h1 className="font-bold md:text-sm text-xs text-black  text-center">
                Start Time:{" "}
                <span className="font-medium text-colorThree md:text-sm text-xs">
                  {timing.startTime}
                </span>
              </h1>
            </div>
            <div className="my-1 flex justify-center items-center">
              <h1 className="font-bold md:text-sm text-xs text-black text-center">
                End Time:{" "}
                <span className="font-medium text-colorThree md:text-sm text-xs">
                  {timing.endTime}
                </span>
              </h1>
            </div>
          </div>
          <div className="md:w-1/3  flex justify-center items-center">
            <p className="lg:p-4 p-[11px] cursor-pointer font-medium">
              <a
                className="bg-colorFour
        rounded-3xl text-white px-8 py-3 text-center text-sm"
              >
                Book the slot
              </a>
            </p>
          </div>
        </div>

        <div className="grid gap-2 grid-cols-5">
          {slots && slots.length > 0
            ? slots.map((time, index) => {
                return (
                  <div
                    key={index}
                    className="bg-[#f7f7f7] text-center rounded-lg mx-4 my-4 px-6 py-4 cursor-pointer"
                  >
                    <p className="font-bold">{time}</p>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <Modal
        id={id}
        startTime={timing.startTime}
        endTime={timing.endTime}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></Modal>
    </>
  );
};

export default Timings;
