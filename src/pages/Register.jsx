import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [organizationName, setOrganizationName] = useState("");
  const [organizationCountry, setOrganizationCountry] = useState(null);
  const [organizationState, setOrganizationState] = useState(null);
  const [organizationCity, setOrganizationCity] = useState(null);
  const [icon, setIcon] = useState(eyeOff);
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [phoneNumber, setPhoneNumber] = useState("");
  // const [valid, setValid] = useState(true);

  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
    // setValid(validPhoneNumber(input));
  };

  // const validPhoneNumber = () => {
  //   const phoneNumberPattern = /^\d{10}$/;
  //   return phoneNumberPattern.test(phoneNumber);
  // };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    axios
      .post("http://localhost:8080/api/v1/registerUser", {
        firstName,
        lastName,
        email,
        organizationName,
        organizationCountry,
        organizationState,
        organizationCity,
        password,
        role,
        phoneNumber,
      })
      .then((response) => {
        dispatch(hideLoading());
        if (response.status === 201) {
          const verifyMail = response.data.email;
          const partialEmail = verifyMail.replace(
            /(\w{3})[\w.-]+@([\w.]+\w)/,
            "$1***@$2"
          );
          Swal.fire({
            title: "Registration Success",
            text:
              "Check your email " +
              partialEmail +
              " and verify it to proceed further.",
            icon: "success",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        dispatch(hideLoading());
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    // console.log(selectedCountry);
    // console.log(selectedCountry?.isoCode);
    // console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
  }, [organizationCountry]);

  return (
    <div>
      <Navbar />

      <div className="relative md:pt-20 pt-32 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div>
                  <section className="my-8 ">
                    <div className="flex flex-col items-center justify-center px-6 mx-auto">
                      <div className="w-full bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-colorThree md:text-2xl dark:text-white">
                            Sign up to your account
                          </h1>
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                          >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                              <div>
                                <label
                                  htmlFor="firstName"
                                  className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                >
                                  First Name
                                </label>
                                <input
                                  type="text"
                                  name="firstName"
                                  id="firstName"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Your first name"
                                  required
                                  onChange={(e) => setFirstName(e.target.value)}
                                ></input>
                              </div>

                              <div>
                                <label
                                  htmlFor="lastName"
                                  className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                >
                                  Last Name
                                </label>
                                <input
                                  type="text"
                                  name="lastName"
                                  id="lastName"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Your last name"
                                  required="true"
                                  onChange={(e) => setLastName(e.target.value)}
                                ></input>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                              <div>
                                <label
                                  htmlFor="email"
                                  className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                >
                                  Email
                                </label>
                                <input
                                  type="email"
                                  name="Email"
                                  id="email"
                                  placeholder="name@domain.com"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required="true"
                                  onChange={(e) => setEmail(e.target.value)}
                                ></input>
                              </div>
                              <div>
                                <label
                                  htmlFor="role"
                                  className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                >
                                  Mode of Working
                                </label>
                                <select
                                  id="role"
                                  name="role"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  onChange={(e) => setRole(e.target.value)}
                                >
                                  <option selected>Choose your Mode</option>
                                  <option value="individual" id="individual">
                                    Individual
                                  </option>
                                  <option
                                    value="organization"
                                    id="organization"
                                  >
                                    Organization
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div>
                              {role === "organization" && (
                                <>
                                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                                    <div>
                                      <label
                                        htmlFor="organizationName"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        Organization Name
                                      </label>
                                      <input
                                        type="text"
                                        name="organizationName"
                                        id="organizationName"
                                        placeholder=""
                                        className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required="true"
                                        onChange={(e) =>
                                          setOrganizationName(e.target.value)
                                        }
                                      ></input>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="organizationCountry"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        Country of Operation
                                      </label>
                                      <Select
                                        options={Country.getAllCountries()}
                                        getOptionLabel={(options) => {
                                          return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                          return options["name"];
                                        }}
                                        value={organizationCountry}
                                        onChange={(item) => {
                                          setOrganizationCountry(item);
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        State of Operation
                                      </label>
                                      <Select
                                        options={State?.getStatesOfCountry(
                                          organizationCountry?.isoCode
                                        )}
                                        getOptionLabel={(options) => {
                                          return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                          return options["name"];
                                        }}
                                        value={organizationState}
                                        onChange={(item) => {
                                          setOrganizationState(item);
                                        }}
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="country"
                                        className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                                      >
                                        City Location
                                      </label>
                                      <Select
                                        options={City.getCitiesOfState(
                                          organizationState?.countryCode,
                                          organizationState?.isoCode
                                        )}
                                        getOptionLabel={(options) => {
                                          return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                          return options["name"];
                                        }}
                                        value={organizationCity}
                                        onChange={(item) => {
                                          setOrganizationCity(item);
                                        }}
                                      />
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="phone-input"
                                className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
                              >
                                Phone number
                              </label>
                              <div className="relative">
                                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                                  <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 19 18"
                                  >
                                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                                  </svg>
                                </div>
                                <input
                                  type="text"
                                  name="phoneNumber"
                                  id="phoneNumber"
                                  aria-describedby="helper-text-explanation"
                                  className=" border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                  pattern="[789][0-9]{9}"
                                  placeholder="123-456-7890"
                                  title="Must start with either 7, 8, 9 and should be of 10 numbers"
                                  required
                                  value={phoneNumber}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                              >
                                Password
                              </label>
                              <div className="flex flex-row">
                                <input
                                  type={type}
                                  name="password"
                                  value={password}
                                  id="password"
                                  placeholder="••••••••"
                                  // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                  // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                                  title="Password must be within 8 to 12 characters containing alteast 1 uppercase, 1 lowercase, 1 number and a special character"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <span
                                  onClick={handleToggle}
                                  className="cursor-pointer flex justify-center items-center"
                                >
                                  <Icon
                                    className="absolute mr-10 text-gray-500"
                                    icon={icon}
                                    size={20}
                                  ></Icon>
                                </span>
                              </div>
                            </div>
                            <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input
                                  id="terms"
                                  aria-describedby="terms"
                                  type="checkbox"
                                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 cursor-pointer"
                                  required
                                ></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <label
                                  htmlFor="terms"
                                  className="font-light text-gray-500 dark:text-gray-300"
                                >
                                  I accept the{" "}
                                  <a
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    href="/privacy"
                                  >
                                    Terms and Conditions
                                  </a>
                                </label>
                              </div>
                            </div>
                            <button
                              type="submit"
                              className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded-lg px-5 py-2.5 text-center cursor-pointer"
                            >
                              Sign up
                            </button>

                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Continue with Google
                            </button>

                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Continue with Apple
                            </button>

                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                                Or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                              Already have an account?{" "}
                              <a
                                href="/login"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer"
                              >
                                Login here
                              </a>
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
