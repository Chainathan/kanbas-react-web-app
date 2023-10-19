import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExport,
  faFileImport,
  faGear,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

const GradesButtons = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-outline-secondary float-end me-2"
        >
          <FontAwesomeIcon icon={faFileExport} /> Export
        </button>
        <button type="button" className="btn btn-danger float-end me-2">
          <FontAwesomeIcon icon={faFileImport} /> Import
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary float-end me-2"
        >
          <FontAwesomeIcon icon={faGear} />
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            Student Names
          </div>
          <div className="col-6" style={{ fontWeight: "bold" }}>
            Assignment Names
          </div>
        </div>

        <div className="row">
          <div className="col-6" style={{ fontWeight: "bold" }}>
            <input
              type="text"
              placeholder="Search Students"
              className="form-control"
            />
          </div>
          <div className="col-6" style={{ fontWeight: "bold" }}>
            <input
              type="text"
              placeholder="Search Assignments"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3" style={{ fontWeight: "bold" }}>
            <button className="btn btn-outline-secondary">
              <FontAwesomeIcon icon={faFilter} /> Apply filters
            </button>
          </div>
          <div className="col-9" style={{ fontWeight: "bold" }}></div>
        </div>
      </div>
    </>
  );
};

export default GradesButtons;
