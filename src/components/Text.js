import React from "react";

const Text = (props) => {
  const { children } = props;
  return <p className="text-white text-lg font-sans">{children}</p>;
};

export default Text;
