import { useNavigate } from "react-router-dom";

const Timings = ({ timing }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="p-2 cursor-pointer w-full rounded-xl mt-4 mb-2 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        onClick={() => navigate("/userLogin")}
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
      </div>
    </>
  );
};

export default Timings;
