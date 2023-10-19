import React from "react";
import CourseStatus from "./CourseStatus";
import CourseStatusActions from "./CourseStatusActions.js";
import CourseStatusTodo from "./CourseStatusTodo";
import CourseStatusUpcoming from "./CourseStatusUpcoming";
import "./index.css";

function Status() {
  return (
    <div class=" wd-course-status">
      <h2>Course Status</h2>
      <CourseStatus />
      <CourseStatusActions />
      <CourseStatusTodo />
      <CourseStatusUpcoming />
    </div>
  );
}

export default Status;
