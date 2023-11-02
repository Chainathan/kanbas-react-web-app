import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";

const AssignmentButtons = () => {
  const { courseId } = useParams();
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
              + Group
            </button>
            <Link
              to={`/Kanbas/Courses/${courseId}/Assignments/${new Date()
                .getTime()
                .toString()}`}
              className="btn btn-sm btn-danger"
            >
              + Assignment
            </Link>
            <button type="button" class="btn btn-sm btn-light">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AssignmentButtons;
