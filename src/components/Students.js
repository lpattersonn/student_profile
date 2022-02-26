// Imports
import React from "react";
import "../Style/Students.css"

// Student function for showing data from API
export default function Student(props) {
  const { students } = props;

  // Map through student object and return data
  const studentList = students.map((student) => {
    // Return student grades
    const studentGrades = function () {
      let totalgrades = 0;
      for (let grade of student.grades) {
        totalgrades += Number(grade);
      }
      return totalgrades / student.grades.length + "%";
    };

    return (
      <article className="student_article">
        <section>
          <img src={student.pic} alt={student.firstName} />
        </section>
        <section>
          <h1>
            {student.firstName} {student.lastName}
          </h1>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {studentGrades()}</p>
        </section>
      </article>
    );
  });
  return <div>{studentList}</div>;
}
