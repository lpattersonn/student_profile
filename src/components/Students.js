// Imports
import React from "react";
import "../Style/Students.css";
import { FaPlus } from "react-icons/fa";

// Student function for showing data from API
export default function Student(props) {
  const { filteredStudents, students, inputValue } = props;

  console.log("HEREFIVE", filteredStudents);

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
       <div className="student_grades">
        <p>Test {i + 1}: {student.grades[i]}%</p>
       </div>
     )
    } return index
  };
   

  // Map through student object and return data
  const studentList = students.map((student) => {
    return (
      <article className="student_article">
        <section className="pic">
          <img src={student.pic} alt={student.firstName} />
        </section>
        <section>
          <div className="article_header">
            <h1 className="student_name">
              {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
            </h1>
            <FaPlus className="icon" />
          </div>
          <div className="student_info">
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {studentAverage(student)}</p>
            {studentGrades(student)}
          </div>
        </section>
      </article>
    );
  });

  // For filtered student
  const filteredStudentObject = filteredStudents.map((filteredStudent) => {
    return (
      <article className="student_article">
        <section className="pic">
          <img src={filteredStudent.pic} alt={filteredStudent.firstName} />
        </section>
        <section>
          <div className="article_header">
            <h1 className="student_name">
              {filteredStudent.firstName.toUpperCase()}{" "}
              {filteredStudent.lastName.toUpperCase()}
            </h1>
            <FaPlus className="icon" />
          </div>
          <div className="student_info">
            <p>Email: {filteredStudent.email}</p>
            <p>Company: {filteredStudent.company}</p>
            <p>Skill: {filteredStudent.skill}</p>
            <p>Average: {studentAverage(filteredStudent)}</p>
            {studentGrades(filteredStudent)}
          </div>
        </section>
      </article>
    );
  });

  return (
    <div>
      {filteredStudents.length !== 0 && filteredStudentObject}
      {inputValue.length === 0 && studentList}
    </div>
  );
}
