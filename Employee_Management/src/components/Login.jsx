import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const Admin = {
    username: "",
    password: "",
  };

  const Validate = () => {
    if (Admin.username === "Admin" && Admin.password === "Admin") {
      navigate("/HomePage");
    } else {
      navigate(0);
      alert("Invalid Username or Password");
    }
  };
  return (
    <>
      <style>{`
        body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
          background-color: #e0e0e0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        form {
          background: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          width: 320px;
        }

        input[type="text"],
        input[type="password"] {
          width: 100%;
          height: 45px;
          padding: 0 10px;
          margin: 15px 0;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        input[type="submit"] {
          width: 107%;
          height: 45px;
          background-color:  #0077b6;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          margin-top: 10px;
        }

        input[type="submit"]:hover {
          background-color: #023e8a;
        }

        h1 {
          text-align: center;
          color: darkblue;
        }
      `}</style>

        <h1 style={{textAlign:"center",color:"darkblue"}}></h1>
      <form onSubmit={Validate}>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          onChange={(e) => (Admin.username = e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => (Admin.password = e.target.value)}
        ></input>
        <input type="Submit" value={"Login"}></input>
      </form>
    </>
  );
}
