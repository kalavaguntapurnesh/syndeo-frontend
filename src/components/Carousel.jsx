import left from "../assets/left.svg";
import right from "../assets/right.svg";
import Lottie from "lottie-react";
import CarouselOne from "../assets/lotties/CarouselOne.json";
import AboutTwo from "../assets/lotties/AboutTwo.json";
import CarouselThree from "../assets/lotties/AboutThree.json";
import CarouselFour from "../assets/lotties/CarouselFour.json";
import CarouselTwo from "../assets/lotties/CarouselTwo.json";
import TwoLottie from "../assets/lotties/TwoLottie.json";

const Carousel = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4">
                <div className="pt-4">
                  <h1 className="mx-auto max-w-[800px] md:text-5xl text-3xl font-semibold tracking-wide">
                    Scheduling for entrepreneurs, freelancers, and leaders
                  </h1>
                </div>

                <div>
                  <p className="text-xl text-gray-600">
                    Syndeo's made for teams of all sizes.{" "}
                    <a href="/pricing" className="text-blue-500">
                      {" "}
                      Compare plans
                    </a>
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4T0cBbXXIQ3CRWIaQlGxBD/0879f3b9df1ef3a4cd13bdcf910344e5/Frame_4104_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>
                        <div class="flex justify-center items-center">
                          <h1 class="text-3xl text-colorTwo font-bold">
                            Individuals
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Keep your calendar in order and book meetings with
                            clients and teammates faster.
                          </p>
                        </div>

                        <div>
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-colorFour py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4YzizdfYjYbQzK1UqnWXeN/20ae4c6430d4d3fce733b638c280750b/Frame_4103_2x.png?w=1080&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold">
                            Teams
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Add teammates to invites and booking pages and use
                            shared calendars.
                          </p>
                        </div>

                        <div>
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-colorFour py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>

                  <a href="" class="flex md:justify-start justify-center">
                    <div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                      <div class="space-y-4">
                        <div class="flex justify-center items-center">
                          <img
                            src="https://images.ctfassets.net/p24lh3qexxeo/4IqbCNJne6WmRSe7XdEM7w/6d1fc73b3d5fc612bdb484a64598a7c7/Frame_4102_2x.png?w=1078&h=1094&q=80&fm=webp"
                            alt=""
                            class="w-20 h-20"
                          />
                        </div>

                        <div class="flex justify-center items-center">
                          <h1 class=" text-3xl text-colorTwo font-bold">
                            Enterprise
                          </h1>
                        </div>

                        <div class="flex justify-center items-center text-gray-600 text-center">
                          <p>
                            Manage your entire organization’s scheduling needs
                            securely.
                          </p>
                        </div>

                        <div>
                          <button class="border-[1px] border-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-colorFour py-2 px-4 rounded-full">
                            View Features
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-20">
                <div className="pt-4">
                  <h1 className="text-4xl font-semibold tracking-wide">
                    Fits seamlessly into the way{" "}
                    <span className="text-colorFour">you work</span>
                  </h1>
                </div>

                <div className="pt-4">
                  <p className="text-xl text-gray-600">
                    Syndeo offers many integrations to save you time, reduce
                    duplication and boost your productivity.
                  </p>
                </div>

                <div className="grid lg:grid-cols-5 grid-cols-3 md:gap-8 gap-6 md:pt-12 pt-8">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/google-cal.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/zoom.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/outlook.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/gmail.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/zapier.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/google-meet.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/chrome-48.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/stripe.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/ms-teams.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/linkedin-icon.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/fastmail.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/facebook-icon.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/google-analytics.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/office365.svg"
                      alt=""
                    />
                  </div>

                  <div className="flex justify-center items-center">
                    <img
                      src="https://25078520.fs1.hubspotusercontent-eu1.net/hubfs/25078520/Brand%20Icons/instagram-icon.svg"
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex justify-center items-center pt-8">
                  <button class="border-[1px] border-colorFour bg-colorFour hover:bg-colorFour hover:text-white transition duration-1000 text-white py-2 px-6 rounded-full">
                    See all the Integrations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
