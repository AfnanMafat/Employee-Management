import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateEmployee() {
  const [Departments, setDepartments] = useState([]);
  const [dept, setDept] = useState();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    FetchDepartments();
  }, []);

  const FetchDepartments = () => {
    axios.get("http://localhost:8080/AllDept").then((res) => {
      console.log(res.data);

      setDepartments(res.data);
    });
  };

  const Employee = {
    id: id,
    department_id: dept,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    job_title: "",
    salary: "",
    hire_date: "",
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:8080/UpdateEmp/${id}`, Employee);
    navigate("/Employee");
  };

  return (
    <>
      <style>{`
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: #f0f4f8;
          margin: 0;
          padding: 0;
        }

        h1 {
          text-align: center;
          color: darkblue;
          margin-top: 30px;
        }

        form {
          background: white;
          max-width: 600px;
          margin: 40px auto;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        input[type="text"],
        input[type="number"],
        select {
          padding: 12px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 16px;
          width: 100%;
          transition: 0.3s;
        }

        input[type="text"]:focus,
        input[type="number"]:focus,
        select:focus {
          border-color: #0077b6;
          outline: none;
        }

        input[type="submit"] {
          background-color: #0077b6;
          color: white;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
          width: 100%;
          transition: background-color 0.3s ease;
        }

        input[type="submit"]:hover {
          background-color: #023e8a;
        }

        select:disabled {
          background-color: #f0f0f0;
          color: #999;
        }

        input[disabled] {
          background-color: #f0f0f0;
          color: #999;
        }
      `}</style>

      <form onSubmit={HandleSubmit}>
        <input type="text" name="id" value={Employee.id} disabled></input>
        <select
          name="department_id"
          onChange={(e) => {
            setDept(e.target.value);
          }}
        >
          <option value={"--Select Department--"} disabled>
            --Select Department--
          </option>
          {Departments.map((value) => {
            return <option value={value.id}>{value.name}</option>;
          })}
        </select>
        <input
          type="text"
          name="firstname"
          placeholder="Enter First Name"
          onChange={(e) => {
            Employee.firstname = e.target.value;
          }}
        ></input>
        <input
          type="text"
          name="lastname"
          placeholder="Enter Last Name"
          onChange={(e) => {
            Employee.lastname = e.target.value;
          }}
        ></input>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          onChange={(e) => {
            Employee.email = e.target.value;
          }}
        ></input>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          minLength={10}
          maxLength={10}
          onChange={(e) => {
            Employee.phone = e.target.value;
          }}
        ></input>
        <input
          type="text"
          name="job_title"
          placeholder="Enter Job Title"
          onChange={(e) => {
            Employee.job_title = e.target.value;
          }}
        ></input>
        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          min={0}
          onChange={(e) => {
            Employee.salary = e.target.value;
          }}
        ></input>
        <input type="Submit" value={"Update"} onClick={HandleSubmit} />
      </form>
    </>
  );
}
