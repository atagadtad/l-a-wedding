import React from "react";

const Text = (props) => {
  const { children } = props;
  return (
    <p className="text-white text-lg font-serif tracking-wide">{children}</p>
  );
};

export default Text;
