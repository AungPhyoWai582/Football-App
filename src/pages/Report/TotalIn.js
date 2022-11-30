import React from "react";

const TotalIn = () => {
  return (
    <div className="h-full bg-gray-100 p-1 shadow-sm">
        {/* <div className="p-1 bg-green-500"><h6 className="text-blue-500 font-bold">Bet IN</h6></div> */}
        <table className="table-auto bg-white w-full p-3 mt-1 border-collapse border border-green-500">
          <thead className="bg-blue-100 text-green-600">
            <tr>
              <th className="border border-slate-300">Time</th>
              <th className="border border-slate-300">Game</th>
              <th className="border border-slate-300">Home</th>
              <th className="border border-slate-300">Away</th>
              <th className="border border-slate-300">Over</th>
              <th className="border border-slate-300">Under</th>
              <th className="border border-slate-300">MaxOut</th>
              {/* <th className="border border-green-600">MaxOut-Goal</th> */}

              {/* <th className="border border-green-600" colSpan={2}>
                  Goal-Score
                </th>
                <th className="border border-green-600">TeamB</th>
                <th className="border border-green-600">Body</th>
                <th className="border border-green-600">Over/Under</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-100 text-center">{"7:00 PM"}</td>
              <td className="border border-slate-100 text-center">{"Man-U vs Chelsea"}</td>
              <td className="border border-slate-100 text-center">{"5000"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"(Man-U)5000"}</td>
              {/* <td className="border border-slate-100">{'0'}</td> */}
            </tr>
            <tr>
              <td className="border border-slate-100 text-center">{"8:00 PM"}</td>
              <td className="border border-slate-100 text-center">{"Arsenal vs Real-M"}</td>
              <td className="border border-slate-100 text-center">{"5000"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">
                <div className="flex flex-col">
                  <span>{"(Arsenal)5000"}</span>
                  {/* <span>{"(U)100000"}</span> */}
                </div>
              </td>
              </tr>
              <tr>
              <td className="border border-slate-100 text-center">{"8:00 PM"}</td>
              <td className="border border-slate-100 text-center">{"LiverPool vs Man-C"}</td>
              <td className="border border-slate-100 text-center">{"5000"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">{"0"}</td>
              <td className="border border-slate-100 text-center">
                <div className="flex flex-col">
                  <span>{"(LiverPool)5000"}</span>
                  {/* <span>{"(U)100000"}</span> */}
                </div>
              </td>
              </tr>
          </tbody>
          {/* <tfoot className="bg-blue-100 text-blue-900">
            <tr>
              <td className="border border-green-700">Total</td>
              <td className="border border-green-700" colSpan={3}>
                {800000}
              </td>
            </tr>
          </tfoot> */}
        </table>
      </div>
  );
};

export default TotalIn;
