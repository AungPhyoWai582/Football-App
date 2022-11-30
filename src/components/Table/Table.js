import React from "react";

const Table = ({ tableHeader, tableBody, betChoiceHandler,tableFooter }) => {
  return (
    <table className="table-auto bg-white w-full p-3 border-collapse border border-slate-100">
      <thead className="bg-blue-100 text-green-600">
        <tr>
          {" "}
          {tableHeader.map((th) => (
            <th
              className="border border-slate-300"
              colSpan={th === "Goal-Score" ? 2 : null}
            >
              {th}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((sbd) => (
          <tr>
             <td className="border border-slate-100 text-center text-sm">
              <button className="p-1 bg-green-100 rounded-sm text-blue-500">finish</button>
            </td>
            <td className="border border-slate-100 text-center text-sm">
              {sbd.Time}
            </td>
            <td className="border border-slate-100 font-bold text-center text-red-500 text-sm">
              {betChoiceHandler ? (
                <button
                  className="w-full btn hover:bg-green-100"
                  onClick={() => betChoiceHandler("TeamA", sbd)}
                >
                  {sbd.TeamA}
                </button>
              ) : (
                sbd.TeamA
              )}
            </td>
            <td className="border border-slate-100 text-center text-sm">
              {sbd.Goal_score.TeamA}
            </td>
            <td className="border border-slate-100 text-center text-sm">
              {sbd.Goal_score.TeamB}
            </td>
            <td className="border border-slate-100 text-center font-bold text-center text-blue-500 text-sm">
            {betChoiceHandler ? (
                <button
                  className="w-full btn hover:bg-green-100"
                  onClick={() => betChoiceHandler("TeamA", sbd)}
                >
                  {sbd.TeamB}
                </button>
              ) : (
                sbd.TeamB
              )}
            </td>
            <td className="border border-slate-100 text-center text-sm">
              {sbd.Body}
            </td>
            <td className="border border-slate-100 text-center text-sm">
              <div className="flex justify-around">
                {betChoiceHandler && <button
                  className="w-16 btn bg-blue-100 hover:bg-green-100 font-bold text-green-500 hover:text-red-500 rounded"
                  onClick={() => betChoiceHandler("over", sbd)}
                >
                  over
                </button>}
                {sbd.Over_Under}
                {betChoiceHandler && <button
                  className="w-16 btn bg-blue-100 hover:bg-green-100 font-bold text-green-500 hover:text-blue-500 rounded"
                  onClick={() => betChoiceHandler("under", sbd)}
                >
                  under
                </button>}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
      {tableFooter && tableFooter}
    </table>
  );
};

export default Table;
