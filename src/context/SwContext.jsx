import React, { createContext, useState } from "react";
const SwContext = createContext();
// Determining and passing the states of data between components.
export const SwContextProvider = ({ children }) => {
  const [sw, setSw] = useState([]);
  const [info, setInfo] = useState("");
  const [more, setMore] = useState(4);

  const values = { sw, setSw, info, setInfo, more, setMore };
  return <SwContext.Provider value={values}>{children}</SwContext.Provider>;
};

export default SwContext;
