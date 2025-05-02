import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Employee() {
  const [Employees, setEmployees] = useState([]);
  const [Departments, setDepartments] = useState([]);
  const [dept, setDept] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    FetchEmployees();
    FetchDepartments();
  }, []);

  const FetchEmployees = () => {
    axios.get("http://localhost:8080/AllEmp").then((res) => {
      setEmployees(res.data);
    });
  };

  const FetchDepartments = () => {
    axios.get("http://localhost:8080/AllDept").then((res) => {
      setDepartments(res.data);
    });
  };

  const Employee = {
    department_id: dept,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    job_title: "",
    salary: "",
  };

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/InsertEmp", Employee);

    navigate(0);
  };

  const DeleteEmployee = (DEmployee) => {
    axios.delete(`http://localhost:8080/DeleteEmp/${DEmployee.id}`);
    navigate(0);
  };
  return (
    <>
      <style>
        
      {`
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f4f8;
            margin: 0;
            padding: 0;
          }

          h1 {
            text-align: center;
            color: #333;
            margin-top: 30px;
          }

          table {
            width: 95%;
            margin: 30px auto;
            border-collapse: collapse;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            border-radius: 8px;
            overflow: hidden;
          }

          th, td {
            padding: 15px;
            border: 1px solid #eee;
            text-align: center;
          }

          th {
            background-color: #0077b6;
            color: white;
            font-weight: 600;
          }

          td {
            background-color: #f9f9f9;
          }

          button {
            padding: 8px 14px;
            margin: 5px;
            background-color: #0077b6;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          button:hover {
            background-color: #023e8a;
          }

          form {
            background: white;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          form select,
          form input[type="text"],
          form input[type="number"] {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 16px;
            transition: 0.3s;
          }

          form input[type="text"]:focus,
          form input[type="number"]:focus,
          form select:focus {
            border-color: #0077b6;
            outline: none;
          }

          form input[type="submit"] {
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

          form input[type="submit"]:hover {
            background-color: #023e8a;
          }
        `}
      </style>

      <h1 style={{ textAlign: "center", color: "darkblue" }}>
        Employee Data
      </h1>
      <table border={1}>
        <tbody>
          <tr>
            <th>Department ID</th>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Job Title</th>
            <th>Hire Date</th>
            <th>Salary</th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>

          {Employees.map((value) => {
            return (
              <tr>
                <td>{value.department_id}</td>
                <td>{value.id}</td>
                <td>{value.firstname}</td>
                <td>{value.lastname}</td>
                <td>{value.email}</td>
                <td>{value.phone}</td>
                <td>{value.job_title}</td>
                <td>{value.hire_date}</td>
                <td>{value.salary}</td>
                <td>
                  <button
                    onClick={() => {
                      DeleteEmployee(value);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/UpdateEmployee/${value.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1 style={{ textAlign: "center", color: "darkblue" }} id="AddEmp">Add Employee</h1>
      <form onSubmit={HandleSubmit}>
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
        <input type="Submit" value={"Add"} onClick={HandleSubmit} />
      </form>
    </>
  );
}
