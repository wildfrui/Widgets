import React from "react";
import Accordion from "./Accordion";
import Wiki from "./Wiki";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const options = [
  { label: "Red color", value: "red" },
  { label: "Blue color", value: "blue" },
  { label: "Green color", value: "green" },
];

const App = () => {
  return (
    <div>
      <Header></Header>
      <Route path="/">
        <Accordion></Accordion>
      </Route>
      <Route path="/wiki">
        <Wiki></Wiki>
      </Route>
      <Route path="/dropdown">
        <Dropdown options={options} labelText={"Choose a color"}></Dropdown>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
    </div>
  );
};

export default App;
