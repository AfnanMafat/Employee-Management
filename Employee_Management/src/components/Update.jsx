import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const Obj = {
    id: id,
    name: "",
    description: "",
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8080/UpdateDept/${id}`, Obj);
    navigate("/Department");
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

          form {
            background: white;
            max-width: 600px;
            margin: 40px auto;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          }

          form input[type="text"] {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 16px;
            transition: 0.3s;
          }

          form input[type="text"]:focus {
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


      <form onSubmit={HandleSubmit}>
        <input type="text" disabled value={id}></input>
        <input
          placeholder="Enter Name"
          type="text"
          name="name"
          onChange={(e) => {
            Obj.name = e.target.value;
          }}
        ></input>
        <input
          placeholder="Enter Description"
          type="text"
          name="description"
          onChange={(e) => {
            Obj.description = e.target.value;
          }}
        ></input>
        <input type="Submit" value={"Update"} onClick={HandleSubmit} />
      </form>
    </>
  );
}
