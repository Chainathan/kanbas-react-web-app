const ModuleOptions = () => {
  return (
    <>
      <div class="d-inline-flex gap-1">
        <button type="button" class="btn btn-sm btn-light btn-small">
          Collapse All
        </button>
        <button type="button" class="btn btn-sm btn-light">
          View Progress
        </button>
        <div class="dropdown">
          <button
            class="btn btn-light btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i class="fa-regular fa-circle-check wd-color-green"></i>
            Publish All
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">Option 1</li>
            <li class="dropdown-item">Option 2</li>
          </ul>
        </div>
        <button type="button" class="btn btn-sm btn-danger">
          <i class="fa fa-plus"></i>
          Module
        </button>
        <button type="button" class="btn btn-sm btn-light">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
    </>
  );
};
export default ModuleOptions;
