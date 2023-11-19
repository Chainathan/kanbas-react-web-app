import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ModuleOptions from "./ModuleOptions";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .findModulesForCourse(courseId)
      .then((modules) => dispatch(setModules(modules)));
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  return (
    <>
      <ModuleOptions />
      <hr />
      <ul className="list-group">
        <li className="list-group-item">
          <button className="btn btn-success" onClick={handleAddModule}>
            Add
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleUpdateModule(module)}
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
                  onClick={() => handleDeleteModule(module._id)}
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
