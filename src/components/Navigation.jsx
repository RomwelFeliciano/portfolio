import { BsFillMoonStarsFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="py-5 px-9 flex justify-between sticky top-0 bg-sky-900 z-10 shadow-md">
      <h1 className="text-2xl font-bold font-sans text-sky-200">Ryoma</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl text-sky-200" />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-t from-sky-300 to-sky-500 py-2 px-4 rounded-md ml-8 font-medium"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
