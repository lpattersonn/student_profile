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
    tagValue,
    setTagValue,
  } = props;

  console.log("THIS IS TAGE VALUE", tagValue);
  // Filter students
  const changeStudent = () => {
    if (inputValue.length === 0) {
      setfilteredStudents([]);
    }
    if (inputValue.length !== 0 && tagValue.length === 0) {
      let studentArray = [];
      // loop through students array
      for (let newStudent of students) {
        let studentName = newStudent.firstName + " " + newStudent.lastName;
        // match inputValue character with new student
        if (studentName.toLowerCase().includes(inputValue.toLowerCase())) {
          studentArray.push(newStudent);
        }
      }
      setfilteredStudents(studentArray);
      console.log("HERESECOND", studentArray);
    } else if (tagValue.length !== 0 && inputValue.length === 0) {
      let studentTagArray = [];
      // loop through students array
      for (let studentsWithTag of students) {
        for (let tag of studentsWithTag.tag) {
          // match tagValue character with students
          if (tag.toLowerCase().includes(tagValue.toLowerCase())) {
            studentTagArray.push(studentsWithTag);
          }
        }
      }
      setfilteredStudents(studentTagArray);
      console.log("HERESECOND", studentTagArray);
      console.log("HERETHIRD", filteredStudents);
    }
    if (inputValue.length !== 0 && tagValue.length !== 0) {
      let studentArray = [];
      // loop through students array
      for (let newStudent of students) {
        let studentName = newStudent.firstName + " " + newStudent.lastName;
        // match inputValue character with new student
          for (let tag of newStudent.tag) {
            // match tagValue character with students
            if (studentName.toLowerCase().includes(inputValue.toLowerCase()) && tag.toLowerCase().includes(tagValue.toLowerCase())) {
              studentArray.push(newStudent);
            }
          }
      }
      setfilteredStudents(studentArray);
      console.log("HEREFOURTH", studentArray);
    }
  };

  return (
    <div id="input_div">
      <form onChange={changeStudent}>
        {/* Input for search */}
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
        {/* Search for tag */}
        <input
          className="input"
          type="text"
          name="search"
          value={tagValue}
          onChange={(e) => {
            setTagValue(e.target.value);
          }}
          placeholder="Search by tag"
        />
      </form>
    </div>
  );
}
