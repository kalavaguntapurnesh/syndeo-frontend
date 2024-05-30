import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Timings from "../components/Timings";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const ShareSchedule = () => {
  const params = useParams();

  const [schedules, setSchedules] = useState([]);
  const dispatch = useDispatch();

  console.log(schedules);

  const shareSchedules = async () => {
    try {
      const response = await axios.post(
        "https://syndeo-backend.onrender.com/auth/shareSchedules",
        { userId: params.id }
      );
      dispatch(showLoading());
      if (response.data.status) {
        setSchedules(response.data.data);
        dispatch(hideLoading());
      }
    } catch (error) {
      console.log(error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    shareSchedules();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="relative pt-24 pb-8">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="flex justify-center items-center mt-2 mb-2">
                <h1 className="text-2xl font-bold text-colorFour">
                  Available Schedules
                </h1>
              </div>

              {schedules.map((val) => {
                return <Timings key={val} timing={val}></Timings>;
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShareSchedule;
