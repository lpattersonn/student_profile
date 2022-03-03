// Imports
import React, { useState } from "react";
import "../Style/Input.css";

// Input function
export default function Input(props) {
  const {
    students,
    filteredStudents,
    setfilteredStudents,
    inputValue,
    setInputValue,
  } = props;

  // Filter students
  const changeStudent = () => {
    if (inputValue.length === 0) {
      setfilteredStudents([]);
    }
    if (inputValue.length !== 0) {
      let studentArray = [];
      for (let newStudent of students) {
        // loop through input value
        let studentName = newStudent.firstName + " " + newStudent.lastName;
        // match inputValue character with new student
        if (studentName.toLowerCase().includes(inputValue.toLowerCase())) {
          studentArray.push(newStudent);
        }
      }
      setfilteredStudents(studentArray);
      console.log("HERESECOND", studentArray);
    }
  };

  return (
    <div id="input_div">
      <form onChange={changeStudent}>
        <input
          className="input"
          type="text"
          namne="search"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          placeholder="Search by name"
        />
      </form>
    </div>
  );
}
