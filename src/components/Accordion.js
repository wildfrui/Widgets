import React, { useState, useEffect, useRef } from "react";

const options = [
  { label: "First Option", text: "Hey, i'm a first option" },
  { label: "second Option", text: "Hey, i'm a second option" },
  { label: "Third Option", text: "Hey, i'm a third option" },
];

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setSelected(null);
    });
  });

  const renderedOptions = options.map((option, index) => {
    const active = index === selected ? "active" : "";
    return (
      <div
        key={option.label}
        onClick={() => {
          setSelected(index);
        }}
      >
        <div className={`title ${active}`}>
          <i className="dropdown icon"></i>
          {option.label}
        </div>
        <div className={`content ${active}`}>
          <p>{option.text}</p>
        </div>
      </div>
    );
  });

  return (
    <div ref={ref} className="ui styled accordion">
      {renderedOptions}
    </div>
  );
};

export default Accordion;
