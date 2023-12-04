import { Route, Routes, Navigate } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Courses from "./Courses";
import Account from "./Account";
import Dashboard from "./Dashboard";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Signin from "../Project/users/signin";

function Kanbas() {
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<Account />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            {/* <Route path="/signin" element={<Signin />} /> */}
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
