import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignmentButtons from "./AssignmentButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCheckCircle,
  faEllipsisV,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="wd-assignment-content">
      <h2>Assignments for course {courseId}</h2>
      <AssignmentButtons />
      <hr />
      <ul className="list-group" style={{ width: "700px" }}>
        <li className="list-group-item list-group-item-secondary custom-grey-bg">
          <div className="flex-container">
            <b>Assignments</b>
          </div>
        </li>
      </ul>
      <ul className="list-group" style={{ width: "700px" }}>
        {courseAssignments.map((assignment) => (
          <li className="list-group-item" key={assignment._id}>
            <div className="flex-container">
              <div style={{ flex: 1 }}>
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  style={{ color: "black", fontSize: "14px" }}
                >
                  <b>{assignment.title}</b>
                </Link>
                <br />
                <span style={{ fontSize: "10px", color: "red" }}>
                  {assignment._id} : {assignment.course}&nbsp;&nbsp;
                </span>
                <span style={{ fontSize: "10px" }}>
                  |&nbsp;&nbsp; <b>Due</b>&nbsp;&nbsp;{assignment.due}
                </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  style={{ color: "green" }}
                />
                &nbsp;&nbsp;&nbsp;
                <FontAwesomeIcon
                  icon={faEllipsisV}
                  style={{ color: "black" }}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Assignments;
