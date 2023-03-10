import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/admin")
      .then((response) => response.json())
      .then((data) => setAdmins(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <h1>HEROKU DEPOLOYMENT TESTING</h1>
      <h1>WITH DATABASE CONNECTION</h1>
      {admins.map((admin) => (
        <div key={admin.admin_id}>
          <p>
            {admin.first_name} {admin.last_name}
          </p>
          <p>{admin.password}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
