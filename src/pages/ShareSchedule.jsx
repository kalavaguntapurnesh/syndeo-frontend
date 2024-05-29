import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table } from "antd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShareSchedule = () => {
  const params = useParams();

  const [schedules, setSchedules] = useState([]);

  console.log(schedules);

  const shareSchedules = async () => {
    try {
      const response = await axios.post(
        "https://syndeo-backend.onrender.com/auth/shareSchedules",
        { userId: params.id }
      );
      if (response.data.status) {
        setSchedules(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    shareSchedules();
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
    <>
      <Navbar />
      <div className="pt-28 pb-8">
        <Table className="my-4" columns={columnOne} dataSource={schedules} />
      </div>
      <Footer />
    </>
  );
};

export default ShareSchedule;
