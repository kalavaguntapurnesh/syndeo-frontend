import Layout from "../../components/Layout";
import axios from "axios";
import { useState, useEffect } from "react";
import DataList from "../../components/DataList";

const Facilitators = () => {
  const [facilitators, setFacilitators] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getFacilitators = async () => {
    try {
      const response = await axios.get(
        "https://syndeo-backend.onrender.com/auth/getAllFacilitators",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.status) {
        setFacilitators(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFacilitators();
  }, []);

  return (
    <Layout>
      <div className="my-4 grid grid-cols-1 md:grid-cols-4">
        <div className="col-span-2 ">
          <h1 className="m-3 text-center font-bold text-colorFour tracking-normal text-2xl leading-relaxed ">
            Facilitators Available
          </h1>
        </div>
        <div className="col-span-2 ">
          <div className="max-w-md mx-auto ">
            <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
                placeholder="Search something about person.."
              />
            </div>
          </div>
        </div>
      </div>

      {facilitators
        .filter((val) => {
          if (searchTerm === "") {
            {
              return val;
            }
          } else if (
            val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val) => {
          return <DataList key={val} facilitator={val}></DataList>;
        })}
    </Layout>
  );
};

export default Facilitators;
