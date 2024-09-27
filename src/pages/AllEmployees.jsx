import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const AllEmployees = () => {
  const { user } = useSelector((state) => state.user);
  const [employees, setEmployees] = useState([]);
  const params = useParams();

  const fetchEmployees = async () => {
    try {
      console.log("The user id is : ", params.id);

      const response = await axios.post(
        "http://localhost:8080/api/v1/getOrganizationEmployees",
        { adminId: params.id }
      );
      if (response.status === 200) {
        setEmployees(response.data);
        console.log(employees);
        Swal.fire({
          title: "Employees Fetched Successfully",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error in fetching employyes", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong in fetching employees!",
      });
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <Layout>
        <div className="flex justify-center items-center">
          <div className="max-w-[1000px]">
            <div className="flex justify-center items-center flex-col">
              <div className="text-center font-semibold text-3xl text-colorFour mb-2">
                <h2>All Employees</h2>
              </div>
            </div>

            {/* <div className="bg-colorFour p-4 mt-4 mb-3 text-center">
              <button
                onClick={fetchEmployees}
                className="text-center text-white"
              >
                Fetch Employees
              </button>
            </div> */}

            {employees.length > 0 ? (
              <ul>
                {employees.map((employee) => (
                  <li key={employee?.userId}></li>
                ))}
              </ul>
            ) : (
              <p>No employees found</p>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AllEmployees;
