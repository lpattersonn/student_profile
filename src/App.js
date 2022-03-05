// Imports
import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";
import Student from "./components/Students";
import Input from "./components/Input";

// App funciton
function App() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setfilteredStudents] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Get data from api on every rerender using useEffect
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      console.log(res);
      // Append tag key value pair to student profile API
      const newStudentArray = res.data.students.map((element) => ({
        ...element,
        tag: [],
      }));
      console.log("THIS IS THE ARRAY", newStudentArray);
      setStudents([...newStudentArray]);
    });
  }, []);

  console.log(students);

  return (
    <div className="App">
      <Input
        filteredStudents={filteredStudents}
        setfilteredStudents={setfilteredStudents}
        students={students}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Student
        students={students}
        setStudents={setStudents}
        filteredStudents={filteredStudents}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
