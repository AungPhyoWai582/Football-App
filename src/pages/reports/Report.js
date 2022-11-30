import React, { useState } from "react";
import { useActionData } from "react-router-dom";

const Report = () => {
  const [detail, setDetail] = useState(false);
  return (
    <div className="h-full bg-gray-100">
      <div className="flex items-center justify-around bg-blue-100">
        <h6 className="p-1 font-semibold">Report</h6>
        <div>Date</div>
      </div>
      <div className="w-full p-3 bg-gray-100">
        {!detail ? (
          <table className="table-auto bg-white w-full p-3 border-collapse border border-slate-100">
            <thead className="bg-blue-100 text-green-600">
              <tr>
                <th className=" border border-slate-300">Customer</th>
                <th className=" border border-slate-300">Total</th>
                <th className=" border border-slate-300">Win/Lose</th>
                <th className=" border border-slate-300">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-100 text-center text-sm font-semibold">
                  Aung Aung
                </td>
                <td className="border border-slate-100 text-center text-sm font-semibold text-blue-500">
                  15000
                </td>
                <td className="border border-slate-100 text-center text-sm font-semibold text-red-500">
                  -1500
                </td>
                <td className="border border-slate-100 text-center text-sm font-semibold">
                  <button
                    className="p-1 bg-green-100 rounded"
                    onClick={() => setDetail(true)}
                  >
                    details
                  </button>
                </td>
              </tr>
              {/* <tr>
              <td className="border border-slate-100 text-center text-sm font-semibold">
                Maung Maung
              </td>
              <td className="border border-slate-100 text-center text-sm font-semibold text-blue-500">
                300000
              </td>
              <td className="border border-slate-100 text-center text-sm font-semibold text-red-500">
                -20000
              </td>
              <td className="border border-slate-100 text-center text-sm font-semibold">
                <button className="p-1 bg-green-100 rounded">details</button>
              </td>
            </tr> */}
            </tbody>
          </table>
        ) : (
          <div>
            <div className="p-1 bg-gray-100 border-b border-slate-200 rounded-t">
              <button
                onClick={() => setDetail(false)}
                className="p-1 text-white text-sm font-bold bg-red-500 rounded"
              >
                back
              </button>
            </div>
            <div className="flex p-2 bg-gray-100">
              <div className="w-full bg-white border-r border-slate-200">
                {/* <h6 className="px-4 font-bold bg-red-500 text-white">Lose</h6> */}
                <table className="table-auto w-full p-3 border-collapse border border-slate-100">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-slate-300">Time</th>
                      <th className="border border-slate-300">Bet</th>
                      <th className="border border-slate-300">Goal-S</th>
                      <th className="border border-slate-300">Amount</th>
                      <th className="border border-slate-300">Win</th>
                      <th className="border border-slate-300">Lose</th>
                      <th className="border border-slate-300">refurm</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-100">
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        7:00PM
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        Man-U(1-30)
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        1-0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        5000
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-red-500">
                        0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-red-500">
                        -1500
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        3500
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        7:00PM
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        Arsenal(1-60)
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        0-0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        5000
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-red-500">
                        0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-red-500">
                        -5000
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        0
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        7:00PM
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        LiverPool(2-60)
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold">
                        3-0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        5000
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        5000
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-red-500">
                        0
                      </td>
                      <td className="text-center border border-slate-300 text-sm font-semibold text-blue-500">
                        10000
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td
                        className="text-center font-bold border border-slate-300"
                        colSpan={3}
                      >
                        Total
                      </td>
                      <td className="text-center font-semibold text-blue-500 border border-slate-300">
                        15000
                      </td>
                      <td className="text-center font-semibold text-blue-500 border border-slate-300">
                        5000
                      </td>
                      <td className="text-center font-semibold text-red-500 border border-slate-300">
                        -6500
                      </td>
                      <td className="text-center font-semibold text-blue-500 border border-slate-300">
                        13500
                      </td>
                    </tr>
                    <tr>
                      <td
                        className="text-center font-bold border border-slate-300"
                        colSpan={3}
                      >
                        Net Total
                      </td>
                      <td className="text-center font-semibold text-blue-500 border border-slate-300">
                        15000
                      </td>
                      <td
                        className="text-center font-semibold text-blue-500 border border-slate-300"
                        colSpan={2}
                      >
                        <span className="text-red-500">-1500</span>
                      </td>
                      <td className="text-center font-semibold text-blue-500 border border-slate-300">
                        13500
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
