import React, { createContext, useState } from "react";
const SwContext = createContext();

export const SwContextProvider = ({ children }) => {
  const [sw, setSw] = useState([]);
  const [info, setInfo] = useState("Star Destroyer");
  const values = { sw, setSw, info, setInfo };
  return <SwContext.Provider value={values}>{children}</SwContext.Provider>;
};

export default SwContext;
