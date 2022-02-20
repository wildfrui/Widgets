import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ term, lang }) => {
  const [result, setResult] = useState("");
  const [debouncedTerm, setDebounced] = useState(term);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounced(term);
    }, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [term]);

  useEffect(() => {
    const translate = async () => {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedTerm,
            target: lang,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setResult(response.data.data.translations[0].translatedText);
    };
    translate();
  }, [debouncedTerm, lang]);

  return (
    <div>
      <h1>{result}</h1>
    </div>
  );
};

export default Convert;
