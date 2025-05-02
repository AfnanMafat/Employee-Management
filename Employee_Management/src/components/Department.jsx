import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Department = () => {
  const [departments, setDepartments] = useState([]);

  const navigate = useNavigate();

  const dept = {
    name: "",
    description: "",
  };

  useEffect(() => {
    FetchDepartments();
  }, []);

  const FetchDepartments = () => {
    axios.get("http://localhost:8080/AllDept").then((res) => {
      setDepartments(res.data);
    });
  };

  const DeleteDept = (Obj) => {
    axios.delete(`http://localhost:8080/DeleteDept/${Obj.id}`);
    navigate(0);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/UpdateDept/${1}`, dept);
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
            color: darkblue;
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
        Department Data
      </h1>
      <table border={1}>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th colSpan={2} style={{ textAlign: "center" }}>
              Action
            </th>
          </tr>

          {departments.map((value) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.description}</td>
                <td>
                  <button
                    onClick={() => {
                      DeleteDept(value);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/Update/${value.id}`}>
                    <button>Update</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h1 style={{ textAlign: "center", color: "darkblue" }} id="AddDept">
        Add Department
      </h1>
      <form onSubmit={HandleSubmit}>
        <input
          placeholder="Enter Name"
          type="text"
          name="name"
          onChange={(e) => {
            dept.name = e.target.value;
          }}
        ></input>
        <input
          placeholder="Enter Description"
          type="text"
          name="description"
          onChange={(e) => {
            dept.description = e.target.value;
          }}
        ></input>
        <input type="Submit" value={"Add"} onClick={HandleSubmit} />
      </form>
    </>
  );
};

export default Department;
