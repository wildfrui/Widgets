import React, { useState, useEffect } from "react";
import axios from "axios";

const Wiki = () => {
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);

  const debounce = (func) => {
    return setTimeout(func, 500);
  };

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setResults(data.query.search);
    };

    let timer = null;
    if (term && !results.length) {
      search();
    } else {
      timer = debounce(search);
    }
    console.log(results);
    return () => {
      clearTimeout(timer);
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid}>
        <h3>{result.title}</h3>
        <a
          href={`https://en.wikipedia.org?curid=${result.pageid}`}
          target="_blank"
        >
          Go
        </a>
        <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
      </div>
    );
  });

  return (
    <div>
      <form action="">
        <input
          type="text"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </form>
      <div>{renderedResults}</div>
    </div>
  );
};

export default Wiki;
