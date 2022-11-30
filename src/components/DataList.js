import React from "react";
export default function DataList({
  className,
  placeholder,
  clickSubmit,
  value,
  name,
  onClick,
  data,
  setData,
  onChange,
  handleOnClick,
  onFocus,
}) {
  let showLists = Array.from(data.resData).filter((ts) =>
    ts.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  console.log(showLists)
  return (
    <>
      <input
        className={`block focus:outline-none p-1 px-4 bg-purple-100 text-black rounded-lg focus:shadow-inner focus:bg-white border ${
          clickSubmit && !value
            ? "border-red-300 bg-red-100"
            : "border-green-300 bg-green-100"
        } focus:border-green-600 ${className ? className : null}`}
        type="text"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        name={name}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
      />
      {data.display && value && (
        <div className={`absolute z-30 top-10 right-12 ${className ? className : null}`}>
          {showLists.slice(0, 5).map((v, i) => {
            return (
              <div
                key={i}
                className={`block text-center text-blue-900 text-sm font-bold bg-white text-black border-b border-slate-100 ${
                  i === 0 ? "rounded-t" : null
                } cursor-pointer`}
                a={v.id}
                id={v.id}
                value={v.name}
                onClick={() => {
                  setData({
                    ...data,
                    display: false,
                    show_Name: v.name,
                  });
                  handleOnClick(name, v.name);
                }}
              >
                {v.name}
              </div>
            );
          })}
        </div>
      )}{" "}
    </>
  );
}
