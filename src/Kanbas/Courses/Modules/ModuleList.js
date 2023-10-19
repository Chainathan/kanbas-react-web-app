import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import ModuleOptions from "./ModuleOptions";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <>
      <ModuleOptions />
      <hr />
      <ul className="list-group">
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
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
    </>
  );
}
export default ModuleList;
