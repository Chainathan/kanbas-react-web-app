import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="wd-grid-container">
      <div className="wd-grid-col-main-content content-padding">
        <h1>Dashboard</h1>
        <hr />
        <h2>Published Courses ({courses.length})</h2>
        <hr />
        <div className="form-group">
          <h5>Course</h5>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button onClick={addNewCourse} className="btn btn-success">
            Add
          </button>
          <button onClick={updateCourse} className="btn btn-warning">
            Update
          </button>
        </div>
        <div className="flex-container">
          {courses.map((course, index) => (
            <div className="flex-item">
              <div
                className="card"
                style={{ width: "260px", marginTop: "35px" }}
              >
                <img
                  src="/images/bluesolid.png"
                  className="card-img-top"
                  alt="course-thumbnail"
                />
                <div className="card-body">
                  <h5
                    className="card-title"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Link
                      to={`/Kanbas/Courses/${course._id}`}
                      style={{ textDecoration: "none", color: "#3498db" }}
                    >
                      <b>{course.name}</b>
                    </Link>
                  </h5>
                  <p className="card-text">Section 1 for {course.name}</p>
                  <p className="card-text">Course number {course.number}</p>
                  <p className="card-text">
                    {course.startDate} - {course.endDate}
                  </p>
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                    className="btn btn-secondary"
                  >
                    Edit
                  </button>

                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
