// Imports
import React from "react";
import "../Style/Students.css";

// Student function for showing data from API
export default function Student(props) {
  const { filteredStudents, students, inputValue } = props;

  console.log("HEREFIVE",filteredStudents )

  // Return student grades
  const studentGrades = function (student) {
    let totalgrades = 0;
    for (let grade of student.grades) {
      totalgrades += Number(grade);
    }
    return totalgrades / student.grades.length + "%";
  };

  // Map through student object and return data
  const studentList = students.map((student) => {
    return (
      <article className="student_article">
        <section className="pic">
          <img src={student.pic} alt={student.firstName} />
        </section>
        <section>
          <h1 className="student_name">
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
          </h1>
          <div className="student_info">
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {studentGrades(student)}</p>
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
          <h1 className="student_name">
            {filteredStudent.firstName.toUpperCase()}{" "}
            {filteredStudent.lastName.toUpperCase()}
          </h1>
          <div className="student_info">
            <p>Email: {filteredStudent.email}</p>
            <p>Company: {filteredStudent.company}</p>
            <p>Skill: {filteredStudent.skill}</p>
            <p>Average: {studentGrades(filteredStudent)}</p>
          </div>
        </section>
      </article>
      );
    }
  )
  
  return (
    <div>
      {filteredStudents.length !== 0 && filteredStudentObject}
      {inputValue.length === 0 && studentList}
    </div>
  );
}
