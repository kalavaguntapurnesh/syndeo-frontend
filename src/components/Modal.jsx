import { useState } from "react";
import axios from "axios";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

const Modal = ({ isVisible, onClose, id, startTime, endTime }) => {
  const dispatch = useDispatch();

  // console.log("In the modal:", id);
  // console.log("Starting Time", startTime);
  // console.log("Ending Time", endTime);

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [secondaryEmail, setSecondaryEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(showLoading());
    axios
      .post("https://syndeo-backend.onrender.com/auth/userBook", {
        organizerId: id,
        startTime: startTime,
        endTime: endTime,
        userEmail,
        userFirstName,
        userLastName,
        secondaryEmail,
        subject,
        description,
        isBooked: true,
      })
      .then((response) => {
        dispatch(hideLoading());
        if (response.data.status) {
          console.log(response.data);
          Swal.fire({
            icon: "success",
            title: "Slot Booked Successfully !!!",
            text: "The details are notified. Please check the email",
          });
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
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleClose}
      id="wrapper"
    >
      <div className="w-[600px] flex flex-col">
        <button
          className="text-white text-xl place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>
        <div className="bg-white p-20 rounded ">
          <div>
            <h1 className="text-2xl font-semibold text-colorFour mt-2 mb-2">
              Fill the details to book the slot.
            </h1>
          </div>
          <div>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your First Name"
                    required="true"
                    onChange={(e) => setUserFirstName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Last Name"
                    required="true"
                    onChange={(e) => setUserLastName(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@domain.com"
                    required="true"
                    onChange={(e) => setUserEmail(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    Secondary Email
                  </label>
                  <input
                    type="email"
                    name="secEmail"
                    id="secEmail"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@domain.com"
                    required="true"
                    onChange={(e) => setSecondaryEmail(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Subject"
                    required="true"
                    onChange={(e) => setSubject(e.target.value)}
                  ></input>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-colorThree dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className=" border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Your Description"
                    required="true"
                    onChange={(e) => setDescription(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="mt-4 w-full text-white bg-colorFour hover:bg-colorFour transition ease-in-out duration-1000 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer"
                >
                  Book the Slot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
