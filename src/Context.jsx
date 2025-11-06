import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const Context = createContext();

export function Provider({ children }) {
  const [elem, setElem] = useState("blabla");

  return (
    <Context.Provider
      value={{
        elem,
        setElem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
};
export const MyContext = () => useContext(Context);
