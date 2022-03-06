// Inports
import React from "react";

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
      <div className="students_grades---List">
        <p>Test {i + 1}:</p>
        <p>{student.grades[i]}%</p>
      </div>
    );
  }
  return index;
};

export { studentAverage, studentGrades };
