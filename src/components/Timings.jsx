import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const Timings = ({ timing }) => {
  // const navigate = useNavigate();

  const id = timing.organizerId;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="border-2 border-red-500 p-2 cursor-pointer w-full rounded-xl mt-4 mb-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onClick={() => setShowModal(true)}
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

        {/* <div className="grid gap-2 grid-cols-5">
          {timing.slots && timing.slots.length > 0
            ? timing.slots.map((time, index) => {
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
        </div> */}
      </div>
      <Modal
        id={id}
        startTime={timing.startTime}
        endTime={timing.endTime}
        slots={timing.slots}
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      ></Modal>
    </>
  );
};

export default Timings;
