import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <div class="max-w-[1400px] m-auto pt-28 pb-12">
        <section id="pricing">
          <header class="text-center">
            <h3 class="text-4xl font-bold mb-5 text-cdnColor">
              Our <span className="text-cdnColorTwo">Pricing</span> Plans
            </h3>
            <p class="text-xl text-gray-600 mb-2 mx-2">
              Upgrade your plan for enhanced features and a richer experience.
            </p>
          </header>
          <div class="flex flex-col mt-10 mx-5 space-y-5 md:space-y-0 md:flex-row md:space-x-5 md:mx-0 justify-between">
            <div class="flex-1 cursor-pointer rounded-lg border-[1px]">
              <div class="bg-white p-10 rounded-lg">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-2xl font-bold text-gray-900">Basic</h4>
                    <p class="text-xs text-gray-500">
                      Basic feature at no cost
                    </p>
                  </div>
                  <div>
                    <div class="bg-gray-100 p-2 rounded-lg text-center">
                      <h4 class="text-2xl font-bold text-gray-900">$0.00</h4>
                      <p class="text-xs text-gray-500">Per month</p>
                    </div>
                  </div>
                </div>
                <hr class="text-gray-100 mt-5" />

                <div class="mt-10">
                  <ul role="list" class="space-y-4">
                    <li class="flex items-center">
                      <div class="bg-cdnColor rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        2 appointments per month
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-cdnColor rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        Email Notifications & Reminders
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-cdnColor rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        Custom help desk
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-300">
                        Worldwide Accessibility
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-300">
                        Automatic Timezone Conversion
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          // class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-500">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="mt-12">
                  <button class="bg-orange-400 text-lg text-white w-full py-3 rounded-lg">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 cursor-pointer rounded-lg border-[1px]">
              <div class="bg-cdnColor p-10 rounded-lg">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-2xl font-bold text-white">Professional</h4>
                    <p class="text-xs text-gray-300">Individual level</p>
                  </div>
                  <div>
                    <div class="bg-cdnColor p-2 rounded-lg text-center">
                      <h4 class="text-2xl font-bold text-white">$9.90</h4>
                      <p class="text-xs text-gray-300">Per month</p>
                    </div>
                  </div>
                </div>
                <hr class="text-gray-800 mt-5" />

                <div class="mt-10 flex-grow">
                  <ul role="list" class="space-y-4">
                    <li class="flex items-center">
                      <div class="bg-white rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-cdnColor"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-white">
                        Unlimited appointments per month
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-white rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-cdnColor"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-white">
                        Email Notifications & Reminders
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-white rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-cdnColor"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-white">
                        Custom help desk
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-white rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-cdnColor"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-500">
                        Worldwide Accessibility
                      </span>
                    </li>

                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-cdnColor"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-300">
                        Automatic Timezone Conversion
                      </span>
                    </li>

                    <li class="flex items-center">
                      <div class="bg-white rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          // class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-500">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="mt-12">
                  <button class="bg-orange-400 text-lg text-white w-full py-3 rounded-lg">
                    Get started
                  </button>
                </div>
              </div>
            </div>

            <div class="flex-1 cursor-pointer rounded-lg border-[1px]">
              <div class="bg-white p-10 rounded-lg">
                <div class="flex justify-between items-center">
                  <div>
                    <h4 class="text-2xl font-bold text-gray-900">
                      Organization
                    </h4>
                    <p class="text-xs text-gray-500">Enterprise level</p>
                  </div>
                  <div>
                    <div class="bg-gray-100 p-2 rounded-lg text-center">
                      <h4 class="text-2xl font-bold text-gray-900">$14.90</h4>
                      <p class="text-xs text-gray-500">Per month</p>
                    </div>
                  </div>
                </div>
                <hr class="text-gray-100 mt-5" />

                <div class="mt-10 flex-grow">
                  <ul role="list" class="space-y-4">
                    <li class="flex items-center">
                      <div class="bg-cdnColor rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        Unlimited appointments per month
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-cdnColor rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        Customizable Emails & Reminders
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-indigo-900 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-cdnColor">
                        Custom help desk
                      </span>
                    </li>
                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-300">
                        Worldwide Accessibility
                      </span>
                    </li>

                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-300">
                        Automatic Timezone Conversion
                      </span>
                    </li>

                    <li class="flex items-center">
                      <div class="bg-gray-200 rounded-full p-1">
                        <svg
                          class="flex-shrink-0 h-4 w-4 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>

                      <span class="ml-3 text-base text-gray-500">
                        Employee Verified Online Booking
                      </span>
                    </li>
                  </ul>
                </div>

                <div class="mt-12">
                  <button class="bg-orange-400 text-lg text-white w-full py-3 rounded-lg">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pricing;
