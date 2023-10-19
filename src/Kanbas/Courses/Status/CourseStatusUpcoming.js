import React from "react";

function CourseStatusUpcoming() {
  return (
    <div class="wd-course-status-upcoming">
      <div class="d-flex wd-course-status-upcoming-header">
        <h2>Coming Up</h2>
        <div class="float-end">
          <a href="#" class="wd-course-status-list-item">
            <i class="fa-solid fa-calendar-days me-1 fa-sm wd-color-light-grey"></i>
            View Calendar
          </a>
        </div>
      </div>
      <hr class="mt-0" />
      <div class="list-group">
        <a href="#" class="wd-course-status-list-item list-group-item mt-0">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-calendar-days me-1 fa-sm wd-color-light-grey"></i>
            <span>Lecture</span>
          </div>

          <small>Lecture CS4550.12631.202410 Sep 7 at 11:45am</small>
        </a>
        <a href="#" class="wd-course-status-list-item list-group-item mt-0">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-calendar-days me-1 fa-sm wd-color-light-grey"></i>
            <span>CS5610 06 SP23 Lecture</span>
          </div>

          <small>CS4550.12631.202410 Sep 11 at 11:45am</small>
        </a>
        <a href="#" class="wd-course-status-list-item list-group-item mt-0">
          <div class="d-flex align-items-center">
            <i class="fa-solid fa-calendar-days me-1 fa-sm wd-color-light-grey"></i>
            <span>CS5610 Web Development Summer 1 2023 -LECUTURE</span>
          </div>

          <small>CS5610.06 SP23 Lecture Sep 11 at 6pm</small>
        </a>
        <a href="#" class="wd-course-status-list-item list-group-item mt-0">
          <div class="d-flex align-items-center">
            <span>12 more in the next week...</span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CourseStatusUpcoming;
