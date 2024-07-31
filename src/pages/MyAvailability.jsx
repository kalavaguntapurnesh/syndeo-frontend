import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EmailShareButton, EmailIcon } from "react-share";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { isWeekend } from "date-fns";
import DatePicker from "react-datepicker";
import Schedules from "../components/Schedules";
import ShareModal from "../components/ShareModal";
import moment from "moment";
import Calendar from "react-calendar";
import axios from "axios";
import "react-calendar/dist/Calendar.css";

const MyAvailability = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [clicked, setClicked] = useState(Array(48).fill(false));
  const [date, setDate] = useState(new Date());
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [myDate, setMyDate] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const one = [];
  const timeSlots = [];
  const [result, setResult] = useState([]);
  const [commonValues, setCommonValues] = useState([]);
  const [uniqueValues, setUniqueValues] = useState([]);
  const [buttonContent, setButtonContent] = useState("Fetch Time Slots");

  const handleDayClick = (value) => {
    setDate(value);
    getTimeSlots(date);
    setShowComponent(true);
    setButtonContent("Save Time Slots");
  };

  const handleMyDate = (value) => {
    setMyDate(value);
    // getTimeSlots(value);
  };

  const handleTimeSlotClick = (timeSlot, index) => {
    setSelectedTimeSlots([...selectedTimeSlots, timeSlot]);
    setClicked((prevClicked) => {
      const newClicked = [...prevClicked];
      newClicked[index] = !newClicked[index];
      return newClicked;
    });
  };

  const getTimeSlots = async (value) => {
    try {
      const newDate = value.toString();
      const response = await axios.post(
        "http://localhost:8080/auth/getTimeSlots",
        {
          newDate: newDate,
          organizerId: params.id,
        }
      );
      if (response.data) {
        setResult(response.data);
        result.map((item) => {
          item.userPosts.map((timeSlot, index) => {
            one.push(timeSlot.slotTime);
          });
        });
        const common = one.filter((value) => timeSlots.includes(value));
        const unique = timeSlots.filter((value) => !one.includes(value));
        setCommonValues(common);
        setUniqueValues(unique);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveTimeSlots = async () => {
    try {
      const newDate = date.toString();
      const response = await axios.post(
        "http://localhost:8080/auth/time-slots",
        {
          organizerId: user?._id,
          newDate,
          timeSlots: selectedTimeSlots,
        }
      );

      if (response.data.status) {
        Swal.fire({
          title: "Slots Saved Successfully",
          icon: "success",
        });
        setShowComponent(false);
        setTimeout(function () {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      setShowComponent(false);
    }
  };

  const renderTimeSlots = () => {
    for (let i = 0; i < 24; i++) {
      for (let j = 0; j < 2; j++) {
        const hour = i < 10 ? `0${i}` : i;
        const minutes = j === 0 ? "00" : "30";
        if (hour >= 12) {
          timeSlots.push(`${hour}:${minutes} PM`);
        } else {
          timeSlots.push(`${hour}:${minutes} AM`);
        }
      }
    }

    return (
      <div className="flex justify-center items-center flex-col">
        <div className="pt-4 pb-4">
          <h2 className="text-2xl font-semibold text-colorFour">
            Your time slots for {date.toDateString()}
          </h2>
        </div>
        <ul className="grid md:grid-cols-8 grid-cols-4 gap-2 max-w-[1400px]">
          {timeSlots.map((slot, index) =>
            commonValues.includes(slot) ? (
              <li
                key={index}
                className="px-4 py-2 rounded bg-gray-400 text-white font-semibold"
              >
                {slot}
              </li>
            ) : (
              <li
                key={index}
                onClick={() => {
                  handleTimeSlotClick(slot, index);
                }}
                className={`px-4 py-2 rounded ${
                  clicked[index]
                    ? "bg-blue-500 text-white cursor-pointer font-semibold"
                    : "bg-cdnColor cursor-pointer font-semibold text-white"
                }`}
              >
                {slot}
              </li>
            )
          )}
        </ul>
      </div>
    );
  };

  return (
    <Layout>
      <div>
        <div className="mb-6">
          <h1 className="text-center text-colorFour font-semibold text-3xl uppercase">
            Schedule <span className="text-cdnColorTwo">your</span> timings
          </h1>
        </div>
        <div className="flex justify-center items-center mt-2 mb-2 text-colorFour font-medium">
          <p>Select date & time to schedule appointments</p>
        </div>

        <div className="flex justify-center items-center flex-col mt-4">
          <div>
            <Calendar onClickDay={handleDayClick} minDate={new Date()} />
          </div>
          {showComponent && <div className="pt-8">{renderTimeSlots()}</div>}
          <div className="flex justify-center items-center pt-6 pb-8">
            <button
              onClick={saveTimeSlots}
              className=" text-white font-medium rounded px-6 py-2 bg-blue-600"
            >
              {buttonContent}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAvailability;
