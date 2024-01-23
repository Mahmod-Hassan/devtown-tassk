import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between gap-5 items-center py-3 px-10 border-b-2 flex-wrap">
      <h1>
        <Link
          to="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-black"
        >
          House Hunter
        </Link>
      </h1>

      <ul className="flex gap-5 items-center text-center text-lg">
        <li>
          <Link to="/dashboard" className="hover:text-[#790f0f] transition-all">
            Dashboard
          </Link>
        </li>
        <li>
          <button className="bg-pink-500 text-white px-5 py-2 rounded">
            Logout
          </button>
        </li>
        <li>
          <Link to="/login" className="hover:text-[#790f0f] transition-all">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
