import { Clock8, Earth, CalendarCheck, Laptop } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-full bg-white pt-28 pb-8 h-auto ">
      <div className="relative pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]"></div>
          <div className="max-w-[1400px] m-auto grid md:grid-cols-2 ">
            <div className="flex flex-col gap-4 w-full">
              <div className=" flex items-center lg:justify-start justify-center mt-4 mx-3">
                <h1 className="xl:text-6xl text-[48px] font-bold lg:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center text-colorFive">
                  Give your clients a better
                  <span className="text-colorFour"> booking experience</span>
                </h1>
              </div>

              <div className="flex items-center lg:justify-start justify-center mx-3">
                <h1 className="lg:text-[24px] text-[24px] font-semibold lg:px-2 lg:text-start text-center text-colorFive">
                  Want to know how this happens ?
                </h1>
              </div>

              <div className="flex items-center lg:justify-start justify-center mx-3">
                <p className="lg:text-lg text-[16px] text-gray-600 lg:px-2 lg:text-start text-center">
                  But you might feel a bit lost on how to get started. So,
                  Syndèo does the hard work for you! Everything you need to know
                  is on one platform. You will receive guidance throughout the
                  whole application process-all completely free.
                </p>
              </div>

              <div className="flex items-center lg:justify-start justify-center md:mx-5">
                <a
                  href="/login"
                  className="bg-colorFour hover:bg-[#14a800] font-semibold outline-none
              rounded-3xl hover:shadow-form transition duration-1000 ease-in-out text-white px-12 py-3 text-center"
                >
                  Get Started Now
                </a>
                <a
                  href="/login"
                  className="bg-colorFour hover:bg-[#14a800] font-semibold outline-none
              rounded-3xl hover:shadow-form transition duration-1000 ease-in-out text-white px-12 py-3 text-center ml-2"
                >
                  Contact With us
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-center items-start ">
              <img
                src="https://images.ctfassets.net/p24lh3qexxeo/6g2rfjOGTAG9ez0hP9pZaV/71f7b4cddd805a98dd7a549a82ab75e8/Group_3827_2x.png?w=902&h=1264&q=80&fm=webp"
                alt=""
                className="lg:w-10/12 w-11/12 lg:h-120 h-92 lg:mt-[-100px]"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-2 lg:mt-[-60px]">
            <div className=" flex flex-col justify-center items-center">
              <div className="my-2">
                <Earth className="w-[35px] h-[35px] text-blue-600" />
              </div>
              <div className="my-2 w-full">
                <h1 className="text-gray-600 font-semibold w-full text-center">
                  Worldwide Access Availablity
                </h1>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="my-2">
                <Clock8 className=" w-[35px] h-[35px] text-gray-500" />
              </div>
              <div className="my-2 w-full">
                <h1 className="text-gray-600  font-semibold w-full text-center">
                  Scalable Timing Facility
                </h1>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="my-2">
                <CalendarCheck className=" w-[35px] h-[35px] text-green-600" />
              </div>
              <div className="my-2 w-full">
                <h1 className="text-gray-600  font-semibold w-full text-center">
                  Simple Navigation Procedure
                </h1>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="my-2">
                <Laptop className=" w-[35px] h-[35px] text-orange-700" />
              </div>
              <div className="my-2 w-full">
                <h1 className="text-gray-600 font-semibold w-full text-center">
                  Complete Online Approach
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
