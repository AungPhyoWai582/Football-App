import React from "react";

const Setting = () => {
  return (
    <div className="p-4 h-full bg-gray-100">
      <h3 className="mb-3 font-bold text-gray-600">Setting</h3>
      <div className="p-1 w-auto bg-white rounded-sm">
        <div className="flex justify-between items-center"><h6 className="font-bold">Commissions</h6><button className="p-1 bg-green-300 font-bold text-sm rounded-sm">save</button></div>
        <div className="p-3">
          <div className="mt-1 flex justify-between">
            <label className="text-sm font-bold">Body</label>
            <input
              className="border border-slate-300 bg-blue-100 rounded-sm"
              type={"text"}
              value={"5"}
            />
          </div>
          <div className="mt-1 flex justify-between">
            <label className="text-sm font-bold">Mix</label>
            <input
              className="border border-slate-300 bg-blue-100 rounded-sm"
              type={"text"}
              value={"15"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
