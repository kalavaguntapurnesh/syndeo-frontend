import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timings from "../components/Timings";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import "../components/Calendar.css";
import Swal from "sweetalert2";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const ShareSchedule = () => {
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [result, setResult] = useState([]);
  const [myDate, setMyDate] = useState();
  const one = [];
  const allTimeSlots = [];
  const navigate = useNavigate();
  const [organizerId, setOrganizerId] = useState();
  const [slotId, setSlotId] = useState();
  const [slotTime, setSlotTime] = useState();

  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [description, setDescription] = useState("");

  const tabs = ["tab1", "tab2"];

  const handleContinue = () => {
    const currentIndex = tabs.indexOf(activeTab);
    const nextIndex = Math.min(currentIndex + 1, tabs.length - 1);
    setActiveTab(tabs[nextIndex]);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    getTimeSlots(selectedDate);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleMyDate = (value) => {
    setMyDate(value);
    getTimeSlots(myDate);
  };

  const getTimeSlots = async (value) => {
    const newDate = value.toString();
    await axios
      .post("http://localhost:8080/auth/getTimeSlots", {
        newDate,
        organizerId: params.id,
      })
      .then((response) => {
        setResult(response.data);
        result.map((item) => {
          item.userPosts.map((timeSlot, index) => {
            one.push(timeSlot.slotTime);
          });
        });
        one.sort();
      })
      .catch((error) => {
        console.log("Error in fetching saved slots", error);
      });
  };

  const bookSlot = async (e) => {
    e.preventDefault();
    if (slotId === "") {
      alert("Slot Id is empty");
    }
    axios
      .post("http://localhost:8080/auth/bookTimeSlots", {
        slotId: slotId,
        bookedFirstName: userFirstName,
        bookedLastName: userLastName,
        bookedEmail: userEmail,
        bookedSecndEmail: secondaryEmail,
        description: description,
      })
      .then((response) => {
        if (response.data.status) {
          Swal.fire({
            title: "Slot Booking Success",
            text: "Check your email",
            icon: "success",
          });
          setTimeout(function () {
            window.location.reload();
            navigate(-1);
          }, 1500);
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="relative pt-24 pb-8">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1200px]">
              <div className="flex justify-center items-center mt-4 mb-2 mx-auto max-w-[800px]">
                <h1 className="md:text-3xl text-2xl font-bold text-colorFour text-center">
                  Want to try Syndèo ? Reserve an appointment and check it out!
                </h1>
              </div>
              {/* <div className="flex justify-center items-center mt-2 mb-4 text-gray-600 font-semibold">
                <p>Select date & time to book your appointments</p>
              </div> */}

              <div className="md:flex shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg">
                {/* Tabs Container */}
                <div className="md:w-1/4 bg-gray-100 rounded-lg">
                  <ul class="flex-column space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 w-full">
                    {tabs.map((tab) => (
                      <li
                        key={tab}
                        className={`cursor-pointer text-center justify-center items-center inline-flex font-semibold rounded-lg active w-full ${
                          activeTab === tab
                            ? "bg-cdnColor text-white px-4 md:py-6 py-4"
                            : "bg-gray-200 text-gray-800 px-4 md:py-6 py-4"
                        }`}
                        onClick={() => setActiveTab(tab)}
                      >
                        {tab === "tab1"
                          ? "Specify Date & Time"
                          : "Confirm Your Slot & Details"}
                      </li>
                    ))}
                  </ul>
                  <div className=" md:h-3/4 md:relative md:block hidden">
                    <div class="md:absolute bottom-0 w-full">
                      <div className="pb-4 mb-4 pt-4 border-b-[1.5px] border-t-[1.5px] border-gray-200">
                        <div className="flex justify-center flex-col items-center space-y-2">
                          <h1 className="font-semibold text-gray-500">
                            Get in Touch
                          </h1>
                          <a
                            href="mailto:noreplysyndeo@clouddatanetworks.com"
                            class="text-black font-semibold"
                          >
                            syndeo@clouddatanetworks.com
                          </a>
                        </div>
                      </div>

                      <div className="w-full flex flex-row cursor-pointer pb-2">
                        <div className="w-3/4 text-center text-black font-semibold">
                          Collapse Menu
                        </div>
                        <div className="w-1/4 flex justify-center items-center">
                          <img
                            src="https://www.svgrepo.com/show/27797/right-arrow.svg"
                            className="w-3 h-3"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Content Container */}
                <div className="md:w-3/4 p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
                  {activeTab === "tab1" && (
                    <div>
                      <div className="flex justify-center items-center mt-4 mb-2">
                        <h1 className=" text-2xl font-bold text-colorFour">
                          Select Date & Time
                        </h1>
                      </div>

                      <div className="flex flex-col">
                        <div className="pt-8 pb-8 flex justify-center items-center">
                          <Calendar
                            onClickDay={getTimeSlots}
                            minDate={new Date()}
                          />
                        </div>

                        <div className="max-w-[1200px] mx-auto">
                          <div className="grid grid-cols-2 gap-4 ">
                            <div className="flex justify-center items-center flex-row">
                              <div>
                                <div className="md:px-8 md:py-4 px-6 py-2 rounded bg-cdnColor"></div>
                              </div>
                              <div className="md:ml-4 ml-1">
                                <h1 className="md:text-lg text-sm font-semibold">
                                  Available
                                </h1>
                              </div>
                            </div>

                            <div className="flex justify-center items-center flex-row">
                              <div>
                                <div className="md:px-8 md:py-4 px-6 py-2 rounded bg-cdnColorTwo"></div>
                              </div>
                              <div className="md:ml-4 ml-1">
                                <h1 className="md:text-lg text-sm font-semibold">
                                  Filled
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="pt-8 pb-8 flex justify-center items-center">
                          {result.map((item) => {
                            return (
                              <ul className="grid grid-cols-4 gap-2">
                                {item.userPosts.map((timeSlot, index) => {
                                  return (
                                    <div>
                                      {timeSlot.booked === true ? (
                                        <li
                                          key={index}
                                          className="bg-cdnColorTwo text-white font-normal px-4 py-2 rounded cursor-not-allowed"
                                        >
                                          {timeSlot.slotTime}
                                        </li>
                                      ) : (
                                        <li
                                          // onClick={() => {
                                          //   navigate(
                                          //     `/userBook/${params.id}/${timeSlot.slotTime}/${timeSlot.slotId}`
                                          //   );
                                          // }}
                                          onClick={() => {
                                            handleContinue();
                                            setOrganizerId(params.id);
                                            setSlotId(timeSlot.slotId);
                                            setSlotTime(timeSlot.slotTime);
                                          }}
                                          key={index}
                                          className="bg-cdnColor text-white cursor-pointer font-normal px-4 py-2 rounded"
                                        >
                                          {timeSlot.slotTime}
                                        </li>
                                      )}
                                    </div>
                                  );
                                })}
                              </ul>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === "tab2" && (
                    <div className="flex justify-center flex-col">
                      <div className="flex flex-col items-center justify-center px-6 mx-auto">
                        <div className="w-full bg-white  rounded-lg dark:border md:mt-0 max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                          <div className="p-6 space-y-4 md:space-y-4 sm:p-8 ">
                            <h1 className="text-xl text-center font-semibold md:text-2xl dark:text-white text-colorFour">
                              Fill the details & book the slot
                            </h1>
                            <form className="space-y-2 " onSubmit={bookSlot}>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type="text"
                                    name="firstName"
                                    id="firstName"
                                    className="font-semibold border border-gray-300 text-gray-900 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // placeholder="Your First Name"
                                    required="true"
                                    onChange={(e) =>
                                      setUserFirstName(e.target.value)
                                    }
                                  ></input>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    className="font-semibold border border-gray-300 text-gray-900 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // placeholder="Your Last Name"
                                    required="true"
                                    onChange={(e) =>
                                      setUserLastName(e.target.value)
                                    }
                                  ></input>
                                </div>

                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="font-semibold border border-gray-300 text-gray-900 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // placeholder="name@domain.com"
                                    required="true"
                                    onChange={(e) =>
                                      setUserEmail(e.target.value)
                                    }
                                  ></input>
                                </div>

                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Secondary Email
                                  </label>
                                  <input
                                    type="email"
                                    name="secEmail"
                                    id="secEmail"
                                    className="font-semibold border border-gray-300 text-gray-900 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // placeholder="name@domain.com"
                                    required="true"
                                    onChange={(e) =>
                                      setSecondaryEmail(e.target.value)
                                    }
                                  ></input>
                                </div>
                              </div>
                              <div className="grid grid-cols-1">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    className="font-semibold border border-gray-300 text-gray-900 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // placeholder="Your Description"
                                    required="true"
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                  ></input>
                                </div>
                              </div>

                              <div className="grid grid-cols-1">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Country of Residence
                                  </label>
                                  <Select
                                    className="font-semibold text-sm"
                                    options={Country.getAllCountries()}
                                    getOptionLabel={(options) => {
                                      return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                      return options["name"];
                                    }}
                                    value={selectedCountry}
                                    onChange={(item) => {
                                      setSelectedCountry(item);
                                    }}
                                    placeholder="Select Your Country"
                                  />
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Selected Date
                                  </label>
                                  <input
                                    type="text"
                                    readOnly
                                    name="date"
                                    id="date"
                                    className="font-semibold border bg-gray-100 border-gray-300 text-gray-400 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Description"
                                    value={selectedDate.toDateString()}
                                  ></input>
                                </div>
                                <div>
                                  <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-semibold text-colorThree dark:text-white"
                                  >
                                    Selected Slot
                                  </label>
                                  <input
                                    type="text"
                                    readOnly
                                    name="date"
                                    id="date"
                                    className="font-semibold border text-gray-400 border-gray-300 bg-gray-100 md:text-sm text-xs rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Your Description"
                                    value={slotTime}
                                    required
                                  ></input>
                                </div>
                              </div>

                              <div className="pt-1">
                                <button
                                  type="submit"
                                  className="mt-4 w-full text-white bg-colorFour hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none rounded-lg text-base font-semibold px-5 py-2.5 text-center cursor-pointer"
                                >
                                  Book the Slot
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ShareSchedule;
