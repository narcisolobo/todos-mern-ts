import { Link } from 'react-router-dom';
import { FaCheckDouble } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="bg-slate-800 px-4 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/todos"
          className="text-slate-200 text-xl flex justify-between items-center gap-5">
          <FaCheckDouble />
          TODOS
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
