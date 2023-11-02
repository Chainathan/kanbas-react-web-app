import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );

  let assignment = useSelector((state) => state.assignmentsReducer.assignment);

  if (assignments.some((assignment) => assignment._id === assignmentId)) {
    dispatch(
      setAssignment(
        assignments.find((assignment) => assignment._id === assignmentId)
      )
    );
    assignment = assignments.find(
      (assignment) => assignment._id === assignmentId
    );
  }

  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    if (assignments.some((assignment) => assignment._id === assignmentId)) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(
        addAssignment({ ...assignment, course: courseId, _id: assignmentId })
      );
    }
    dispatch(
      setAssignment({ title: "New Assignment", description: "New Description" })
    );
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleCancel = () => {
    dispatch(
      setAssignment({ title: "New Assignment", description: "New Description" })
    );
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="col">
      <div className="row">
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Assignment Name
          </label>
          <input
            type="text"
            className="form-control"
            id="input1"
            value={assignment.title}
            onChange={(e) =>
              dispatch(setAssignment({ ...assignment, title: e.target.value }))
            }
          />
        </div>
      </div>

      <div className="row">
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textarea1"
            rows="3"
            placeholder="This assignment describes how to install the development environment & HTML basics."
            value={assignment.description}
            onChange={(e) =>
              dispatch(
                setAssignment({ ...assignment, description: e.target.value })
              )
            }
          ></textarea>
        </div>
      </div>

      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <label htmlFor="points" className="col-sm-3 col-form-label">
          Points
        </label>
        <div className="col-sm-8">
          <input
            type="Number"
            className="form-control"
            id="points"
            value="100"
          />
        </div>
      </div>

      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <label htmlFor="assignment" className="col-sm-3 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-8">
          <select className="form-select">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <label htmlFor="percentage" className="col-sm-3 col-form-label">
          Display Grade As
        </label>
        <div className="col-sm-8">
          <select className="form-select">
            <option selected>Percentage</option>
          </select>
        </div>
      </div>

      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <div className="col-sm-10">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="r6" />
            <label className="form-check-label" htmlFor="r6">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{ justifyContent: "center", marginBottom: "20px" }}
      >
        <label htmlFor="submission" className="col-sm-3 col-form-label">
          Submission Type
        </label>
        <div
          className="col-sm-6 border"
          style={{ paddingTop: "10px", paddingBottom: "20px" }}
        >
          <select className="form-select">
            <option selected>Online</option>
          </select>
          <legend className="col-form-label">
            <h6>Online Entry Options</h6>
          </legend>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c1" />
            <label className="form-check-label" htmlFor="c1">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c2" />
            <label className="form-check-label" htmlFor="c2">
              Website URL
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c3" />
            <label className="form-check-label" htmlFor="c3">
              Media Recordings
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c4" />
            <label className="form-check-label" htmlFor="c4">
              Student Annotation
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c5" />
            <label className="form-check-label" htmlFor="c5">
              File Uploads
            </label>
          </div>
        </div>
      </div>

      <div
        className="row"
        style={{
          justifyContent: "center",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <label htmlFor="submission" className="col-sm-3 col-form-label">
          Assign
        </label>
        <div
          className="col-sm-6 border"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <div className="mb-3 row">
            <label htmlFor="assign" className="col-sm-4 col-form-label">
              <h6>Assign To</h6>
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value="Everyone"
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label htmlFor="assign" className="col-sm-4 col-form-label">
              <h6>Due</h6>
            </label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                id="date"
                value={assignment.dueDate}
                onChange={(e) =>
                  dispatch(
                    setAssignment({ ...assignment, dueDate: e.target.value })
                  )
                }
              />
            </div>
          </div>

          <div className="mb-3 row">
            <label className="col-sm-6 col-form-label">
              <h6>Available From</h6>
            </label>
            <label className="col-sm-1 col-form-label">
              <h6>Until</h6>
            </label>
            <div className="row">
              <div className="col-sm-6 col-form-label">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={assignment.availableFromDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableFromDate: e.target.value,
                      })
                    )
                  }
                />
              </div>
              <div className="col-sm-6 col-form-label">
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  value={assignment.availableUntilDate}
                  onChange={(e) =>
                    dispatch(
                      setAssignment({
                        ...assignment,
                        availableUntilDate: e.target.value,
                      })
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="row">
            <button type="button" className="btn btn-light border border-dark">
              <i
                className="fas fa-plus"
                style={{ color: "black", marginRight: "10px" }}
              ></i>
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-9">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="c8" />
            <label className="form-check-label" htmlFor="c8">
              Notify users that this content has changed
            </label>
          </div>
        </div>
        <div className="col-1" style={{ marginRight: "20px" }}>
          <button onClick={handleCancel} className="btn btn-danger me-2">
            Cancel
          </button>
        </div>
        <div className="col-1">
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
