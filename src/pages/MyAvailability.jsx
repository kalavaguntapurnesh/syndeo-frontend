import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EmailShareButton, EmailIcon } from "react-share";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { isWeekend } from "date-fns";
import DatePicker from "react-datepicker";

const MyAvailability = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    // console.log("Current Date:", currentDate);
    const selectedDate = new Date(time);
    // console.log("Selected Date:", selectedDate);
    return currentDate.getTime() < selectedDate.getTime();
  };

  const isWeekendDay = (date) => {
    return isWeekend(date);
  };

  const filterWeekends = (date) => {
    return !isWeekendDay(date);
  };

  const shareUrl = `https://syndeo-frontend.vercel.app/share/${user?._id}`;

  const [schedules, setSchedules] = useState([]);
  const [mySchedules, setMySchedules] = useState([]);

  const handleSchedule = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.post(
        "http://localhost:8080/auth/book-appointment",
        {
          organizerId: params.id,
          startTime: startTime.toString(),
          organizerEmail: user?.email,
          endTime: endTime.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (response.data.status) {
        navigate("/dashboard");
        Swal.fire({
          title: "Appointment Booking Success",
          icon: "success",
        });
        // console.log(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const getExistingSchedules = async () => {
    try {
      const response = await axios.post(
        "https://syndeo-backend.onrender.com/auth/existingSchedules",
        { userId: params.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.status) {
        setSchedules(response.data.data);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const getMySchedules = async () => {
    try {
      //   dispatch(showLoading());
      const response = await axios.post(
        "https://syndeo-backend.onrender.com/auth/userSchedules",
        { doctorId: user?._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      //   dispatch(hideLoading());
      if (response.data.status) {
        setMySchedules(response.data.data);
        // console.log(
        //   "Called the booking for me by other users... which is userSchedules",
        //   mySchedules
        // );
      }
    } catch (error) {
      console.log(error);
      //   dispatch(hideLoading());
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  useEffect(() => {
    getExistingSchedules();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMySchedules();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    handleSchedule();
    //eslint-disable-next-line
  }, []);

  const columnOne = [
    {
      title: "Name of the User",
      dataIndex: "doctorFirstName",
    },
    {
      title: "Primary Email",
      dataIndex: "doctorEmail",
    },
    {
      title: "Country of User",
      dataIndex: "doctorCountry",
    },
    {
      title: "Starting Time",
      dataIndex: "startTime",
    },
    {
      title: "Ending Time",
      dataIndex: "endTime",
    },
    {
      title: "Schedule Link",
      dataIndex: "Link",
    },
  ];

  return (
    <Layout>
      <div>
        <h1 className="m-3 text-center font-bold text-colorFour leading-normal tracking-normal text-xl">
          My availability
        </h1>

        <div>
          <Table className="my-4" columns={columnOne} dataSource={schedules} />
        </div>

        <div className="flex justify-center items-center">
          <EmailShareButton
            url={shareUrl}
            quote={"Title or jo bhi aapko likhna ho"}
            hashtag={"#portfolio..."}
            className="flex justify-center items-center"
          >
            <EmailIcon size={40} round={true} />
          </EmailShareButton>
        </div>

        <div className="">
          <h1 className="text-center text-colorFour font-semibold text-3xl mt-8">
            Create a Schedule
          </h1>

          <div className="flex justify-center items-center">
            <h1 className="font-semibold">Select Starting Time:</h1>
            <div>
              <DatePicker
                className="m-2 w-full rounded p-3"
                required="true"
                minDate={new Date()}
                isClearable
                placeholderText="Select start time"
                filterTime={filterPassedTime}
                filterDate={filterWeekends}
                showTimeSelect
                withPortal
                dateFormat="dd/MM/yyyy h:mm aa"
                minTime={new Date(0, 0, 0, 9, 30)}
                maxTime={new Date(0, 0, 0, 20, 0)}
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                // highlightDates={new Date()}
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <h1 className="font-semibold">Select Ending Time:</h1>
            <div>
              <DatePicker
                className="m-2 w-full rounded p-3"
                minDate={new Date()}
                placeholderText="Select ending time"
                showTimeSelect
                isClearable
                withPortal
                filterTime={filterPassedTime}
                filterDate={filterWeekends}
                dateFormat="dd/MM/yyyy h:mm aa"
                minTime={new Date(0, 0, 0, 9, 30)}
                maxTime={new Date(0, 0, 0, 20, 0)}
                selected={endTime}
                onChange={(date) => setEndTime(date)}
              />
            </div>
          </div>

          <div className="flex items-center justify-center mt-2 pb-8">
            <button
              className="p-2 bg-colorThree text-white text-center font-medium rounded-lg w-full m-2 md:w-[25%]"
              onClick={handleSchedule}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyAvailability;
