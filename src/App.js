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
  const [tagValue, setTagValue] = useState("");

  // Get data from api on every rerender using useEffect
  useEffect(() => {
    axios.get("https://api.hatchways.io/assessment/students").then((res) => {
      // Append tag key value pair to student profile API
      const newStudentArray = res.data.students.map((element) => ({
        ...element,
        tag: [],
      }));
      setStudents([...newStudentArray]);
    });
  }, []);

  return (
    <div className="App_maindiv">
      <Input
        setfilteredStudents={setfilteredStudents}
        students={students}
        inputValue={inputValue}
        setInputValue={setInputValue}
        tagValue={tagValue}
        setTagValue={setTagValue}
      />
      <div className="App">
        <Student
          students={students}
          setStudents={setStudents}
          filteredStudents={filteredStudents}
          inputValue={inputValue}
          tagValue={tagValue}
        />
      </div>
    </div>
  );
}

export default App;
