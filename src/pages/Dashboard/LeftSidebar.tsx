import { Link } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <aside className="w-full h-full">
      <ul className="p-5 w-80 w-full bg-base-100 space-y-4">
        <Link
          to="/dashboard"
          className="hover:bg-slate-300 p-3 bg-slate-100 block"
        >
          My Houses
        </Link>

        <Link
          to="/dashboard/add-house"
          className="hover:bg-slate-300 p-3 bg-slate-100 block"
        >
          Add House
        </Link>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
