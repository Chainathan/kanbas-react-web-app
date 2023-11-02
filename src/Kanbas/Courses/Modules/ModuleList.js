import React from "react";
import { useParams } from "react-router-dom";
import ModuleOptions from "./ModuleOptions";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
      <ModuleOptions />
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="btn btn-warning"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>

          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
            className="form-control"
          />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
            className="form-control"
          />
        </li>
        <ul className="list-group" style={{ width: "700px" }}>
          <li className="list-group-item list-group-item-secondary custom-grey-bg">
            <div className="flex-container">
              <b>Modules</b>
            </div>
          </li>
        </ul>
        <ul className="list-group" style={{ width: "700px" }}>
          {modules
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li
                className="list-group-item list-group-item-secondary custom-grey-bg"
                key={module._id}
              >
                <button
                  onClick={() => dispatch(deleteModule(module._id))}
                  className="btn btn-danger float-end"
                >
                  Delete
                </button>
                <button
                  onClick={() => dispatch(setModule(module))}
                  className="btn btn-warning float-end"
                >
                  Edit
                </button>
                <h3>{module.name}</h3>
                <p>{module.description}</p>
                {module.lessons && (
                  <ul className="list-group mb-5">
                    {module.lessons.map((lesson, index) => (
                      <li key={index} className="list-group-item">
                        <h4>{lesson.name}</h4>
                        <p>{lesson.description}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </ul>
    </>
  );
}
export default ModuleList;
