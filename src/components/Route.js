import React, { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [url, setURL] = useState(window.location.pathname);

  const handleChange = () => {
    setURL(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener("popstate", handleChange);
  }, []);

  const element = url === path ? children : null;

  return <div>{element}</div>;
};

export default Route;
