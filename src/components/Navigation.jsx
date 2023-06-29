import { BsFillMoonStarsFill } from "react-icons/bs";

const Navigation = () => {
  return (
    <nav className="py-5 px-9 flex justify-between sticky top-0 bg-[#F0E5CF] z-10 shadow-md">
      <h1 className="text-2xl font-bold text-[#4B6587]">
        <img className="w-30 h-10" src="/logo.png" alt="" />
      </h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill className="cursor-pointer text-2xl text-[#4B6587]" />
        </li>
        <li>
          <a
            href="#"
            className="bg-gradient-to-t from-[#C8C6C6] to-[#4B6587] py-2 px-4 rounded-md ml-8 font-medium"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
