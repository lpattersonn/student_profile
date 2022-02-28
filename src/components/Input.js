// Imports
import React, { useState } from "react";
import "../Style/Input.css";

// Input function
export default function Input(props) {
  const { students, filteredStudents, setfilteredStudents, inputValue, setInputValue  } = props;

  // Filter students
  const changeStudent = () => {
     
    if (inputValue.length !== 0) {
      for (let newStudent of students) {
        // loop through input value
        let studentName = newStudent.firstName + " " + newStudent.lastName;
        // match inputValue character with new student
        if (
          studentName.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          setfilteredStudents([newStudent]);
          console.log("HERESECOND", filteredStudents);
        }
      }
    }
  };

  return (
    <div id="imput_div">
      <form onChange={changeStudent} >
        <input
          className="imput"
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
