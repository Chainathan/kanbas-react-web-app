const AssignmentButtons = () => {
  return (
    <div class="row">
      <div class="col-8">
        <input
          class="form-control w-25"
          type="text"
          placeholder="Search For Assignment"
        />
      </div>
      <div class="col-4">
        <div class="float-end">
          <div class="d-inline-flex gap-1">
            <button type="button" class="btn btn-sm btn-light">
              <i class="fa fa-plus"></i> Group
            </button>
            <button type="button" class="btn btn-sm btn-danger">
              <i class="fa fa-plus"></i> Assignment
            </button>
            <button type="button" class="btn btn-sm btn-light">
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssignmentButtons;
