import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  console.log(location.pathname.toString() === "/game");
  return (
    <div className="p-3 bg-green-300 items-center flex justify-between">
      <nav>
        <div>
          <h1 className="font-bold text-gray-900">Apyin Kyae</h1>
        </div>
      </nav>
      <ul className="flex justify-around">
        <li
          className={`mr-5 p-1 rounded ${
            location.pathname === "/game" ? "bg-blue-100 text-green-300" : ""
          } text-gray-700 font-bold cursor-pointer hover:bg-blue-100 hover:text-green-300`}
        >
          <NavLink to={"/game"}>
            <span>Game</span>
          </NavLink>
        </li>
        <li
          className={`mr-5 p-1 rounded  ${
            location.pathname === "/lager" ? "bg-blue-100 text-green-300" : ""
          } text-gray-700 font-bold cursor-pointer hover:bg-blue-100 hover:text-green-300`}
        >
          <NavLink to={"/lager"}>
            <span>Lager</span>
          </NavLink>
        </li>
        <li
          className={`mr-5 p-1 rounded  ${
            location.pathname === "/report" ? "bg-blue-100 text-green-300" : ""
          } text-gray-700 font-bold cursor-pointer hover:bg-blue-100 hover:text-green-300`}
        >
          <NavLink to={"/report"}>
            <span>Report</span>
          </NavLink>
        </li>
        <li
          className={`mr-5 p-1 rounded  ${
            location.pathname === "/sarmal_yawmal" ? "bg-blue-100 text-green-300" : ""
          } text-gray-700 font-bold cursor-pointer hover:bg-blue-100 hover:text-green-300`}
        >
          <NavLink to={"/sarmal_yawmal"}>
            <span>SarMal/YawMal</span>
          </NavLink>
        </li>
        <li
          className={`mr-5 p-1 rounded ${
            location.pathname === "/setting" ? "bg-blue-100 text-green-300" : ""
          } text-gray-700 font-bold cursor-pointer hover:bg-blue-100 hover:text-green-300`}
        >
          <NavLink to={"/setting"}>
            <span>Setting</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
