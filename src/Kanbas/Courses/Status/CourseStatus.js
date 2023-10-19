import React from "react";

function CourseStatus() {
  return (
    <div class="btn-group mb-3">
      <button type="button" class="btn btn-light">
        <i class="fa-solid fa-ban me-2 wd-color-black"></i>Unpublish
      </button>
      <button type="button" class="btn btn-success">
        <i class="fa-regular fa-circle-check me-2 wd-color-light-grey"></i>
        Published
      </button>
    </div>
  );
}

export default CourseStatus;
