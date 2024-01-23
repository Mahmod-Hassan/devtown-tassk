import { Outlet } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3 h-screen border-r-2">
        <LeftSidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
