// Imports
import React, { useState } from "react";
import "../Style/Students.css";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { render } from "@testing-library/react";
import $ from "jquery";
import ReactDOM from "react-dom";

// Student function for showing data from API
export default function Student(props) {
  const [input, setInput] = useState("");

  const { filteredStudents, students, setStudents, inputValue, tagValue } = props;

  // Return student average
  const studentAverage = function (student) {
    let totalgrades = 0;
    for (let grade of student.grades) {
      totalgrades += Number(grade);
    }
    return totalgrades / student.grades.length + "%";
  };

  // Return student agrades
  const studentGrades = (student) => {
    let index = [];
    for (let i = 0; i < student.grades.length; i++) {
      index.push(
        <p>
          Test {i + 1}: {student.grades[i]}%
        </p>
      );
    }
    return index;
  };

  // Replace student profile object

  // Map through student object and return data
  const studentList = students.map((student, index) => {
    // Id for selectors
    const id = student.firstName;

    const plusid = id + "plus";

    const minusid = id + "minus";

    const idToCheck = student.id;

    // Handle submit function for tag form
    const handleChange = (inputText) => {
      setInput(inputText);
    };

    // Update student array
    const handleSubmit = (student, index) => {
      if (input.length > 0) {
        student.tag.push(input);
        students[index] = student;
        setStudents([...students]);
        console.log(student.tag);
      }
    };

    // Clear text
    const inputId = student.firstName + index;

    const clearText = () => {
      document.getElementById(`#${inputId}`).value = "";
    };

    return (
      <article key={student.id.toString()} className="student_article">
        <section className="pic">
          <img src={student.pic} alt={student.firstName} />
        </section>
        <section>
          <div className="article_header">
            <h1 className="student_name">
              {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
            </h1>
            <div
              className="icon"
              // Implement JQuery toggle to hide and show student grade list
              onClick={() => {
                $(function () {
                  $(`#${id}`).toggle();
                  $(`#${plusid}`).toggle();
                  $(`#${minusid}`).toggle();
                });
              }}
            >
              <FaPlus id={plusid} />
              <FaMinus id={minusid} style={{ display: "none" }} />
            </div>
          </div>
          <div className="student_info">
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {studentAverage(student)}</p>
            <div id={student.firstName} className={"student_grades"}>
              {studentGrades(student)}
            </div>
            <div className="tag_Class">
              {/* Show Tags */}
              {student.tag.map((element) => {
                return <p>{element}</p>;
              })}
            </div>
            <div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  e.target.reset();
                  handleSubmit(student, index);
                }}
              >
                <input
                  id={inputId}
                  type="text"
                  name="tag"
                  className="text_input"
                  placeholder="Add a tag"
                  onChange={(e) => handleChange(e.target.value)}
                />
              </form>
            </div>
          </div>
        </section>
      </article>
    );
  });

  // For filtered student
  const filteredStudentObject = filteredStudents.map(
    (filteredStudent, index) => {
      // Id for selectors
      const id = filteredStudent.firstName;

      const plusid = id + "plus";

      const minusid = id + "minus";

      const idToCheck = filteredStudent.id;

      // Handle submit function for tag form
      const handleChange = (inputText) => {
        setInput(inputText);
      };

      // Update student array
      const handleSubmit = (student, index) => {
        if (input.length > 0) {
          student.tag.push(input);
          students[index] = student;
          setStudents([...students]);
          console.log(student.tag);
        }
      };

      // Clear text
      const inputId = filteredStudent.firstName + index;

      const clearText = () => {
        document.getElementById(`#${inputId}`).value = "";
      };

      return (
        <article
          key={filteredStudent.id.toString()}
          className="student_article"
        >
          <section className="pic">
            <img src={filteredStudent.pic} alt={filteredStudent.firstName} />
          </section>
          <section>
            <div className="article_header">
              <h1 className="student_name">
                {filteredStudent.firstName.toUpperCase()}{" "}
                {filteredStudent.lastName.toUpperCase()}
              </h1>
              <div
                className="icon"
                // Implement JQuery toggle to hide and show student grade list
                onClick={() => {
                  $(function () {
                    $(`#${id}`).toggle();
                    $(`#${plusid}`).toggle();
                    $(`#${minusid}`).toggle();
                  });
                }}
              >
                <FaPlus id={plusid} />
                <FaMinus id={minusid} style={{ display: "none" }} />
              </div>
            </div>
            <div className="student_info">
              <p>Email: {filteredStudent.email}</p>
              <p>Company: {filteredStudent.company}</p>
              <p>Skill: {filteredStudent.skill}</p>
              <p>Average: {studentAverage(filteredStudent)}</p>
              <div id={filteredStudent.firstName} className={"student_grades"}>
                {studentGrades(filteredStudent)}
              </div>
              <div className="tag_Class">
                {/* Show Tags */}
                {filteredStudent.tag.map((element) => {
                  return <p>{element}</p>;
                })}
              </div>
              <div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    e.target.reset();
                    handleSubmit(filteredStudent, index);
                  }}
                >
                  <input
                    id={inputId}
                    type="text"
                    name="tag"
                    className="text_input"
                    placeholder="Add a tag"
                    onChange={(e) => handleChange(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </section>
        </article>
      );
    }
  );

  return (
    <div>
      {/* Render JSX based on the length of filteredStudents and inputValue */}
      {inputValue.length !== 0 && tagValue.length === 0 && filteredStudentObject}
      {inputValue.length === 0 && tagValue.length !== 0  && filteredStudentObject}
      {inputValue.length !== 0 && tagValue.length !== 0  && filteredStudentObject}
      {inputValue.length === 0 && tagValue.length === 0  && studentList}
    </div>
  );
}
