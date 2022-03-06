// Imports
import React from "react";
import { studentAverage, studentGrades } from "../../helper_function/helper_functions.js";

// Tests from studentAverage function
describe("studentAverage", () => {
  it("Returns the expected grade average", () => {
    const student = {
      grades: [87, 90, 89, 100, 92]
    }
    expect(studentAverage(student)).toBe("91.6%")
  });
});

// Test for studentGrades function
describe("studentGrades", () => {
  it("Returns the expected number of inputs", () => {
    const student = {
      grades: [87]
    }
    expect(studentGrades(student).length).toBe(1)
  })
});