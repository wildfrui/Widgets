import React from "react";

const Link = ({ href, className, children }) => {
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <div>
      <a onClick={(e) => handleClick(e)} href={href} className={className}>
        {children}
      </a>
    </div>
  );
};

export default Link;
