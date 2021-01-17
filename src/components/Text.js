import React from "react";

const Text = (props) => {
  const { children } = props;
  return <p className="text-gray-300 text-xl font-serif">{children}</p>;
};

export default Text;
