import React from "react";

function CourseStatusTodo() {
  return (
    <div class="wd-course-status-todo">
      <h2>To Do</h2>
      <hr class="mt-0" />
      <div class="list-group">
        <a href="#" class="wd-course-status-list-item list-group-item">
          <div class="d-flex justify-content-between align-items-start">
            <span class="badge bg-danger rounded-pill">1</span>
            <span>Grade A1 - ENV + HTML</span>
            <button class="btn btn-sm pt-0">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <small>
            100 Points <i class="fa-solid fa-circle fa-xs"></i> Sep 18 at
            11:59pm
          </small>
        </a>
      </div>
    </div>
  );
}

export default CourseStatusTodo;
