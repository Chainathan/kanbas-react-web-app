import React from "react";

function CourseStatusActions() {
  return (
    <div className="wd-course-status-actions">
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-file-import me-2 wd-color-light-grey"></i>
        Import Existing Content
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-file-import me-2 wd-color-light-grey"></i>
        Import From Common
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-crosshairs me-2 wd-color-light-grey"></i>
        Choose Home Page
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-chart-column me-2 wd-color-light-grey"></i>
        View Course Stream
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-bullhorn me-2 wd-color-light-grey"></i>
        New Announcement
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-solid fa-chart-column me-2 wd-color-light-grey"></i>
        New Analytics
      </a>
      <a class="btn btn-light" href="#">
        <i class="fa-regular fa-bell me-2 wd-color-light-grey"></i>
        View Course Notifications
      </a>
    </div>
  );
}

export default CourseStatusActions;
