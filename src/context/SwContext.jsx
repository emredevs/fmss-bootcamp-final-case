import React, { createContext, useState } from "react";
const SwContext = createContext();
// verilerin componentler arasındaki statelerin belirlenip geöderilmesi
export const SwContextProvider = ({ children }) => {
  const [sw, setSw] = useState([]);
  const [info, setInfo] = useState("");
  const [more, setMore] = useState(4);

  const values = { sw, setSw, info, setInfo, more, setMore };
  return <SwContext.Provider value={values}>{children}</SwContext.Provider>;
};

export default SwContext;
