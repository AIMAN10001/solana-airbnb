import { useState } from "react";
import { FiMenu, FiX, FiFilter } from "react-icons/fi";
import {
  FaHome,
  FaUmbrellaBeach,
  FaSwimmer,
  FaHouseDamage,
  FaTree,
  FaPencilRuler,
  FaSnowflake,
  FaEye,
  FaWater,
  FaMountain,
} from "react-icons/fa";
import { GiPalmTree, GiSurfBoard } from "react-icons/gi";

function FilterMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menus = [
    { title: "OMG!", icon: <FaHome className=" text-lg text-[#4dc0c2]" /> },
    {
      title: "Beach",
      icon: <FaUmbrellaBeach className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Amazing pools",
      icon: <FaSwimmer className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Tiny homes",
      icon: <FaHouseDamage className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Islands",
      icon: <GiPalmTree className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "National parks",
      icon: <FaTree className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Design",
      icon: <FaPencilRuler className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Arctic",
      icon: <FaSnowflake className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Amazing views",
      icon: <FaEye className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Lakefront",
      icon: <FaWater className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Surfing",
      icon: <GiSurfBoard className=" text-lg text-[#4dc0c2]" />,
    },
    {
      title: "Cabins",
      icon: <FaMountain className=" text-lg text-[#4dc0c2]" />,
    },
  ];

  return (
    <div className="px-4 pb-10 flex justify-between items-center relative">
      <button
        className="md:hidden bg-[#116466] rounded-lg p-2 text-xs font-medium flex space-x-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FiX className="h-6 w-6" />
        ) : (
          <FiMenu className="h-6 w-6" />
        )}
      </button>

      <div
        className={`fixed inset-0 z-50 md:z-40 bg-[#072A2A] transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:static md:translate-x-0 md:flex md:items-center md:space-y-0 md:space-x-10`}
      >
        <button
          className="absolute top-4 right-4 md:hidden text-[#4dc0c2]"
          onClick={() => setMenuOpen(false)}
        >
          <FiX className="h-6 w-6" />
        </button>

        <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex md:space-x-10 mt-10  md:mt-0">
          {menus.map((menu, index) => (
            <div
              key={index}
              className="flex flex-col justify-center p-4 border-2 border-transparent md:p-2 rounded-md transition duration-300 hover:shadow-2xl hover:bg-[#0D4949] items-center space-y-2"
            >
              <div className="relative text-gray-200 h-10 w-10 md:h-8 md:w-8">
                <div className="absolute inset-0 p-1 flex justify-center items-center border-2 border-[#3d999b] rounded-full">
                  {menu.icon}
                </div>
              </div>
              <p className="text-sm md:text-xs font-semibold text-gray-200">
                {menu.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <button className="border-2 transition duration-300 mr-0 md:mr-6 hover:bg-[#116466] text-[#4dc0c2] hover:text-gray-200 border-[#116466] rounded-lg p-2 flex md:p-4 text-xs md:text-sm font-medium space-x-2">
        <FiFilter className="h-4 w-4" />
        <span>Filters</span>
      </button>
    </div>
  );
}

export default FilterMenu;
