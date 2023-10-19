import ModuleList from "../Modules/ModuleList";
import Status from "../Status";

function Home() {
  return (
    <div className="row">
      <div className="col-9">
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div className="col">
        <h2>Status</h2>
        <Status />
      </div>
    </div>
  );
}
export default Home;
