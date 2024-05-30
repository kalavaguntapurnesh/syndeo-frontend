import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { EmailShareButton, EmailIcon } from "react-share";

const MyAvailability = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const navigate = useNavigate();

  console.log("Params Id:", params.id);

  const shareUrl = `https://syndeo-frontend.vercel.app/share/${user?._id}`;

  const [schedules, setSchedules] = useState([]);
  const [mySchedules, setMySchedules] = useState([]);

  const getExistingSchedules = async () => {
    try {
      const response = await axios.post(
        "https://syndeo-backend.onrender.com/auth/auth/existingSchedules",
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
      </div>
    </Layout>
  );
};

export default MyAvailability;
