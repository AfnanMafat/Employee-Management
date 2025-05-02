import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body {
          font-family: Arial, sans-serif;
        }

        h1 {
          text-align: center;
          margin-top: 50px;
          color: darkblue;
        }

        p {
          text-align: center;
          font-size: 18px;
          color: #333;
        }

        .btn-group {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        button {
          padding: 15px 25px;
          background-color: #0077b6;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #023e8a;
        }
      `}</style>


      <div className="home-container">
        <h1>Welcome to the Employee Management System</h1>
        <p>Manage your employees and departments with ease and efficiency.</p>

        <div className="btn-group">
          <button className="home-btn" onClick={() => navigate("/Department")}>View Departments</button>
          <button className="home-btn" onClick={() => navigate("/Employee")}>View Employees</button>
          <button className="home-btn" onClick={() => navigate("/Department#AddDept")}>Add Department</button>
          <button className="home-btn" onClick={() => navigate("/Employee#AddEmp")}>Add Employee</button>
        </div>
      </div>
    </>
  );
}
