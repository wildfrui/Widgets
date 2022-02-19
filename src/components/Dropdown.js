import React, { useState, useEffect, useRef } from "react";

const options = [
  { label: "Red color", value: "red" },
  { label: "Blue color", value: "blue" },
  { label: "Green color", value: "green" },
];

const Dropdown = () => {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }

      setOpen(false);
    });
  });

  const renderedOptions = options.map((option, index) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={(e) => {
          setSelected(index);
          console.log(index);
        }}
      >
        {option.label}
      </div>
    );
  });

  const opened = open ? "visible" : "";
  return (
    <div
      className="ui form"
      ref={ref}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="field">
        <label htmlFor="" className="label">
          Select a color
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">
            {selected !== null ? options[selected].label : "Select a color"}
          </div>
          <div className={`menu ${opened} transition`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
