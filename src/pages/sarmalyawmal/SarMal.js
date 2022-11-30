import React from "react";

const SarMal = () => {
  return (
    <div className="bg-gray-100 h-full">
      <div className="w-full p-1 bg-blue-100">
        <h6 className="font-bold">Sar Kya Mal</h6>
      </div>
      <div className="w-full flex p-2">
        <div className="w-1/4 mt-1 p-2 bg-gray-100">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold">Finish Match</h6>
          </div>
          <table className="table-auto bg-white w-full p-3 border-collapse border border-slate-100">
            <thead className="bg-blue-100 text-green-600">
              <tr>
                <th className="border border-slate-300">Time</th>
                <th className="border border-slate-300" colSpan={4}>
                  Match
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-100 text-center">7:00PM</td>
                <td className="border border-slate-100 text-center">Man-U</td>
                <td className="border border-slate-100 text-center">1</td>
                <td className="border border-slate-100 text-center">0</td>
                <td className="border border-slate-100 text-center">Chelsea</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-3/4 mt-1 p-2 bg-gray-100">
          <div className="flex justify-between items-center">
            <h6 className="font-semibold">Sar Mal</h6>
            <button className="size-sm px-3 bg-green-300 rounded-t font-semibold text-white">
              finish all
            </button>
          </div>
          <table className="table-auto bg-white w-full p-3 border-collapse border border-slate-100">
            <thead className="bg-blue-100 text-green-600">
              <tr>
                <th className="border border-slate-300">Match</th>
                <th className="border border-slate-300">Total</th>
                <th className="border border-slate-300">TeamA</th>
                <th className="border border-slate-300">TeamB</th>
                <th className="border border-slate-300">Over</th>
                <th className="border border-slate-300">Under</th>
                <th className="border border-slate-300">Win</th>
                <th className="border border-slate-300">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {/* <td className="border border-slate-100 text-center">Aung Aung</td> */}
                <td className="border border-slate-100 text-center">
                  Man-U vs Chelsea
                </td>
                <td className="border border-slate-100 text-center">50000</td>
                <td className="border border-slate-100 text-center">10000</td>
                <td className="border border-slate-100 text-center">20000</td>
                <td className="border border-slate-100 text-center">10000</td>
                <td className="border border-slate-100 text-center">10000</td>
                <td className="border border-slate-100 text-center text-red-500">
                  -3000
                </td>
                <td className="border border-slate-100 text-center bg-red-500 text-white">
                  <button>yaw/sar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SarMal;
