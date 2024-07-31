import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
      .post("https://syndeo-backend.onrender.com/auth/login", {
        email,
        password,
      })
      .then((response) => {
        // window.location.reload();
        dispatch(hideLoading());
        if (response.data.status) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
        } else {
          Swal.fire({
            icon: "error",
            title: "Incorrect Credentials !!!",
            text: "The username and/or password doesn't match. Please enter valid username and correct password.",
          });
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

  return (
    <div>
      <Navbar />
      <div className="relative md:pt-16 pt-24 ">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div>
                  <section className="my-8">
                    <div className="flex flex-col items-center justify-center px-6 mx-auto">
                      <div className="w-full bg-white rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-4 sm:p-8">
                          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-colorThree md:text-2xl dark:text-white">
                            Log in to Syndèo
                          </h1>
                          <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                          >
                            <div>
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-bold text-colorThree dark:text-white"
                              >
                                Email
                              </label>
                              <input
                                type="email"
                                name="email"
                                id="email"
                                className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                // placeholder="name@domain.com"
                                required="true"
                                onChange={(e) => setEmail(e.target.value)}
                              ></input>
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
                                  // placeholder="••••••••"
                                  className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  required="true"
                                  onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <span
                                  onClick={handleToggle}
                                  className="cursor-pointer flex justify-center items-center"
                                >
                                  <Icon
                                    className="absolute mr-10 text-black"
                                    icon={icon}
                                    size={20}
                                  ></Icon>
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-start">
                                <div className="flex items-center h-5">
                                  <input
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                    required=""
                                  ></input>
                                </div>
                                <div className="ml-3 text-sm">
                                  <label
                                    htmlFor="remember"
                                    className="text-black dark:text-gray-300 "
                                  >
                                    Keep me signed in
                                  </label>
                                </div>
                              </div>
                              <a
                                href="/forgotPassword"
                                className="text-sm hover:underline"
                              >
                                Forgot password?
                              </a>
                            </div>
                            <button
                              type="submit"
                              className="w-full text-white bg-colorFour text-base hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-semibold rounded-lg px-5 py-2.5 text-center cursor-pointer"
                            >
                              Log in
                            </button>
                            <div className="relative flex py-1 items-center">
                              <div className="flex-grow border-t border-gray-400"></div>
                              <span className="flex-shrink mx-4 text-black text-sm">
                                or
                              </span>
                              <div className="flex-grow border-t border-gray-400"></div>
                            </div>

                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/google.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Log in with Google
                            </button>

                            <button className="w-full flex text-black font-medium items-center justify-center gap-x-3 py-2.5 border rounded-lg hover:bg-gray-50 duration-150 active:bg-gray-100">
                              <img
                                src="https://secure.meetupstatic.com/next/images/login/apple.svg?w=48"
                                alt=""
                                className="w-5 h-5"
                              />
                              Log in with Apple
                            </button>

                            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400 ">
                              Not Registered?{" "}
                              <a
                                href="/register"
                                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                              >
                                Create Account
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

export default Login;
