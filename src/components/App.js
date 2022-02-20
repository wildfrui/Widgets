import React from "react";
import Accordion from "./Accordion";
import Wiki from "./Wiki";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const options = [
  { label: "Red color", value: "red" },
  { label: "Blue color", value: "blue" },
  { label: "Green color", value: "green" },
];

const App = () => {
  return (
    <div>
      <Translate></Translate>
    </div>
  );
};

export default App;
