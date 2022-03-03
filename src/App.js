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
      setStudents(res.data.students);
    });
  }, []);

  console.log(students);

  // // Change Grades
  // const changeGrades = function (student, id) {

  //   // Find plant
  //   const updatedPlant = { ...student.find((profile) => profile.id === id) };
  //   const updatedIndex = student.findIndex((profile) => profile.id === id);

  //   // Get Plant last watered

  //   // Find water interval from last watered
  //   if (style === 30000) {
  //     updatedPlant.lastWatered = day.toISOString().split("Z")[0];
  //     plants[updatedIndex] = updatedPlant;
  //     setPlants([...plants]);
  //   } else {
  //     window.confirm(
  //       `${updatedPlant.name} is well watered, please wait 30 seconds.`
  //     );
  //   }
  // };

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
        filteredStudents={filteredStudents}
        inputValue={inputValue}
      />
    </div>
  );
}

export default App;
