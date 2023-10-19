import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradesButtons from "./GradesButtons";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  console.log(enrollments);
  return (
    <div>
      <h1>Grades</h1>
      <GradesButtons />
      <div className="table-responsive">
        <table
          className="table table-striped wd-grade-table"
          style={{ border: "1" }}
        >
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td style={{ color: "red", textAlign: "left" }}>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return grade ? (
                      <td>{grade.grade}</td>
                    ) : (
                      <td>
                        <input
                          type="number"
                          class="form-control"
                          id="input1"
                          placeholder="0"
                          style={{ textAlign: "center" }}
                          max="100"
                        />
                        <FontAwesomeIcon icon={faPenToSquare} size="regular" />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
