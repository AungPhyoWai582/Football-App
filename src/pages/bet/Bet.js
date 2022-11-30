import React from "react";
import DataList from "../../../src/components/DataList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Table from "../../components/Table/Table";

const Bet = () => {
  const customers = [
    {
      id: "109398482",
      name: "Aung Aung",
      value: "Aung Aung",
    },
    {
      id: "993882323",
      name: "Maung Maung",
      value: "Maung Maung",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [betInfo, setBetInfo] = useState({
    customer: "",
    betList: [],
    betTotal: "",
  });
  const [customerData, setCustomerData] = useState({
    resData: customers,
    display: false,
    show_Name: "",
  });

  const [showBodyData, setShowBodyData] = useState([
    {
      Time: "7:00 PM",
      TeamA: "Man-U",
      TeamB: "Chelsea",
      Goal_score: { TeamA: "0", TeamB: "0" },
      Body: "1-30",
      Over_Under: "2+70",
    },
    {
      Time: "8:00 PM",
      TeamA: "Arsenal",
      TeamB: "Real-M(H)",
      Goal_score: { TeamA: "0", TeamB: "0" },
      Body: "2-30",
      Over_Under: "3+70",
    },
    {
      Time: "7:00 PM",
      TeamA: "LiverPool",
      TeamB: "Man-C",
      Goal_score: { TeamA: "0", TeamB: "0" },
      Body: "-30",
      Over_Under: "2-70",
    },
  ]);

  const [betCtrl, setBetCtrl] = useState(false);
  const [betChoice, setBetChoice] = useState({});

  const handleOnChange = (event) => {
    let { name, value } = event.target;
    // if (name === 'township_id') {
    setCustomerData({
      ...customerData,
      display: true,
      show_Name: value,
    });
    let customer = customerData.resData.find((cus) => cus.name === value);
    if (customer) {
      setCustomerData({
        ...customerData,
        display: false,
      });
      setBetInfo({ ...betInfo, [name]: value });
    }
  };

  const handleOnClick = (name, value) => {
    setBetInfo({
      ...betInfo,
      [name]: value,
    });
  };

  const betChoiceHandler = (choice, key) => {
    console.log(choice, key);
    let obj;
    if (choice === "over" || choice === "under") {
      obj = {
        Team: `${key.TeamA}(${choice})`,
        Price: key.Over_Under,
        Amount: "",
      };
    }
    if (choice === "TeamA") {
      obj = {
        Time: key.Time,
        Team: `${key.TeamA}`,
        Price: key.Body,
        Amount: "",
      };
    }
    if (choice === "TeamB") {
      obj = {
        Time: key.Time,
        Team: `${key.TeamB}`,
        Price: key.Body,
        Amount: "",
      };
    }
    setBetCtrl(true);
    setBetChoice(obj);
  };

  const add = () => {
    setBetCtrl(false);
    const copyInfo = [...betInfo.betList];
    copyInfo.push(betChoice);
    const betTotal = copyInfo
      .map((cif) => Number(cif.Amount))
      .reduce((pre, next) => pre + next, 0)
      .toString();
    setBetInfo({
      ...betInfo,
      betList: copyInfo,
      betTotal: betTotal,
    });
    setBetChoice({});
  };

  const bet = () => {
    console.log(betInfo);
  };

  console.log(betInfo);

  return (
    <div>
      {/* <h1 className="text-4xl font-bold text-green-900">Body</h1> */}
      {/* <div className="p-3 h-full bg-green-500">Actions</div> */}
      <div className="flex items-center bg-blue-100">
        <div className="flex items-center h-auto w-1/4 p-1 relative">
          {/* <label className="text-md mr-3">{"Customers"}</label> */}
          <DataList
            className="w-40"
            name="customer"
            placeholder="Search customers"
            data={customerData}
            setData={setCustomerData}
            onChange={handleOnChange}
            handleOnClick={handleOnClick}
            value={customerData.show_Name}
            // clickSubmit={clickSubmit}
          />
          <button
            className="p-1 ml-2 text-sm font-bold bg-green-300 rounded-lg"
            onClick={() => setShowModal(true)}
          >
            add
          </button>
          {showModal ? (
            <>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-3 border-b border-slate-100 rounded-t ">
                      <h6 className="text-xl font-bold">Customer Info</h6>
                    </div>
                    <div className="relative p-3 flex-auto">
                      <form className="bg-gray-100 rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1">
                          Name
                        </label>
                        <input className=" appearance-none border rounded w-full py-2 px-1 text-black" />

                        <label className="block text-black text-sm font-bold mb-1">
                          Phone
                        </label>
                        <input className=" appearance-none border rounded w-full py-2 px-1 text-black" />
                        <label className="block text-black text-sm font-bold mb-1">
                          Viber
                        </label>
                        <input className=" appearance-none border rounded w-full py-2 px-1 text-black" />
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-1 border-t border-slate-100 rounded-b">
                      <button
                        className="p-1 mr-4 text-red-500 font-bold  text-md rounded"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="p-1 mr-4 bg-green-500 text-white font-bold  text-md rounded "
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
        <div className={`h-auto w-3/4 p-1 ${!betCtrl ? "hidden" : "block"}`}>
          {/* <div className="text-sm text-green-800">Customer Name - {betInfo.customer}</div> */}
          <div className="flex justify-between font-bold text-green-500">
            <div className="p-1">{betChoice.Team}</div>
            <div className="p-1">{betChoice.Price}</div>
            <div>
              <input
                className="mr-4 p-1 bg-green-100 focus:border-green-600 rounded"
                type={"text"}
                placeholder=" amount"
                name="Amount"
                value={betChoice.Amount}
                onChange={(e) =>
                  setBetChoice({ ...betChoice, Amount: e.target.value })
                }
              />
              <button
                className="p-1 bg-green-500 text-sm text-green-900 rounded"
                onClick={add}
              >
                add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-screen flex ">
        <div className="w-full p-3 bg-gray-100">
          <Table
            tableHeader={[
              "Finish",
              "Time",
              "TeamA",
              "Goal-Score",
              "TeamB",
              "Body",
              "Over/Under",
            ]}
            tableBody={showBodyData}
            betChoiceHandler={betChoiceHandler}
          />
          
        </div>
        <div className="w-96 p-2 bg-white  text-sm">
          <div className=" h-auto mt-1 p-2 bg-gray-100 rounded">
            <div className="p-3 font-bold text-md text-blue-900 bg-green-300 rounded-tl-lg rounded-br-lg overflow-hidden">
              {betInfo.customer}
            </div>
            <div className="tableFixHead bg-white mt-1">
              
              <table className="table-auto w-full border-collapse border border-slate-100">
                <thead className="bg-blue-100 text-green-600">
                  <tr>
                    <th className="border border-slate-300">Time</th>
                    <th className="border border-slate-300">Team</th>
                    <th className="border border-slate-300">Pirce</th>
                    <th className="border border-slate-300">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {betInfo.betList.map((bl) => (
                    <tr>
                      <td className="border border-slate-100 text-center text-sm">
                        {bl.Time}
                      </td>
                      <td className="border border-slate-100 text-center text-sm">
                        {bl.Team}
                      </td>
                      <td className="border border-slate-100 text-center text-sm">
                        {bl.Price}
                      </td>
                      <td className="border border-slate-100 text-center text-sm">
                        {bl.Amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-green-100 text-blue-900">
                  <tr>
                    <td className="border border-slate-100 text-center font-bold text-sm">
                      Total
                    </td>
                    <td
                      className="border border-slate-100 text-center font-bold text-sm"
                      colSpan={3}
                    >
                      {betInfo.betTotal}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* <div className="p-1 flex justify-around">
              <button className="btn p-1  bg-red-300 text-center text-white border border-red-600 rounded">
                Cancel
              </button>
              <button className="btn p-1  bg-green-300 text-center text-white border border-green-600 rounded" onClick={bet}>
                Save
              </button>
            </div> */}
          </div>
          {/* <div>Bet Tist and Total</div> */}
        </div>
      </div>
    </div>
  );
};

export default Bet;
