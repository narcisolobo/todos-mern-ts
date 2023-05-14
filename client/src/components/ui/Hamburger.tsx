import { BsList } from 'react-icons/bs';

function Hamburger() {
  return (
    <button className="lg:hidden md:hidden text-blue-200 text-xl py-2 px-2 rounded hover:bg-slate-700 transition ease-in-out duration-300">
      <BsList />
    </button>
  );
}

export default Hamburger;
