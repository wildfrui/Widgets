import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  { label: "Hindi", value: "hi" },
  { label: "Arabic", value: "ar" },
  { label: "Afrikaans", value: "af" },
];

const Translate = () => {
  const [term, setTerm] = useState("");
  const [lang, setLang] = useState("");

  const handleSelect = (selected) => {
    setLang(languages[selected].value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <Dropdown
        options={languages}
        labelText={"Select a language"}
        onSelect={handleSelect}
      ></Dropdown>
      <Convert term={term} lang={lang}></Convert>
    </div>
  );
};

export default Translate;
