import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, labelText, onSelect }) => {
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
          onSelect(index);
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
          {labelText}
        </label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">
            {selected !== null ? options[selected].label : labelText}
          </div>
          <div className={`menu ${opened} transition`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
