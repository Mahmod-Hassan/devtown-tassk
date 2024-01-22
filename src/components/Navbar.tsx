import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between px-10 h-16 items-center border-b-2">
      <h1>
        <Link
          to="/"
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-3xl font-black"
        >
          House Hunter
        </Link>
      </h1>

      <ul className="flex gap-5 items-center text-center grow justify-end text-lg">
        <li>
          <Link to="/dashboard" className="hover:text-[#790f0f] transition-all">
            Dashboard
          </Link>
        </li>
        <li>
          <button className="bg-red-500 text-white px-5 py-2 rounded">
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
