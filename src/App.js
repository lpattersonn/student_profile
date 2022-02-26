// Imports
import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import Student from "./components/Students";

// App funciton
function App() {
  const [students, setStudents] = useState([]);

  // Get data from api on every rerender using useEffect
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      console.log(res);
      setStudents(res.data.students);
    });
  }, []);

  console.log(students);

  return (
    <div className="App">
      <Student key={students.length} students={students} />
    </div>
  );
}

export default App;
