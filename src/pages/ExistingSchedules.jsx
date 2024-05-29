import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { Table } from "antd";
import Footer from "../components/Footer";

const ExistingSchedules = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();

  const [schedules, setSchedules] = useState([]);
  const [mySchedules, setMySchedules] = useState([]);

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

  const columnOne = [
    // {
    //   title: "User Id",
    //   dataIndex: "doctorId",
    // },
    {
      title: "Name of the User",
      dataIndex: "doctorFirstName",
    },
    {
      title: "User Email",
      dataIndex: "doctorEmail",
    },
    // {
    //   title: "User Email",
    //   dataIndex: "email",
    // },
    {
      title: "Country of User",
      dataIndex: "doctorCountry",
    },
    {
      title: "Resident City",
      dataIndex: "doctorCity",
    },
    {
      title: "Starting Time",
      dataIndex: "startTime",
    },
    {
      title: "Ending Time",
      dataIndex: "endTime",
    },
  ];

  const columnTwo = [
    // {
    //   title: "User Id",
    //   dataIndex: "userId",
    // },
    {
      title: "First Name",
      dataIndex: "bookedName",
    },
    {
      title: "User Name",
      dataIndex: "bookedEmail",
    },
    {
      title: "User Country",
      dataIndex: "bookedCountry",
    },
    {
      title: "Starting Time",
      dataIndex: "startTime",
    },
    {
      title: "Ending Time",
      dataIndex: "endTime",
    },
  ];

  return (
    <div>
      <Layout>
        <h1 className="font-bold text-colorFour tracking-normal text-2xl leading-relaxed mt-2">
          Bookings by {user?.firstName} {user?.lastName}
        </h1>
        <Table className="my-4" columns={columnOne} dataSource={schedules} />
        <h1 className="font-bold text-colorFour tracking-normal text-2xl leading-relaxed ">
          Bookings for {user?.firstName} {user?.lastName}
        </h1>
        <Table className="my-3" columns={columnTwo} dataSource={mySchedules} />
      </Layout>
      <Footer />
    </div>
  );
};

export default ExistingSchedules;
