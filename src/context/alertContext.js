import { createContext, useContext, useState } from "react";

const AlertContext = createContext(undefined);
// funcția createContext. Acest context va fi utilizata
//pentru a împărtăși starea alertelor între componentele React
export const AlertProvider = ({ children }) => {
  //children reprezintă componentele încorporate în interiorul acestui provider
  const [state, setState] = useState({
    isOpen: false,
    // Type can be either "success" or "error"
    // Un boolean care indică dacă alerta este deschisă sau închisă
    type: "success",
    // Message to be displayed, can be any string
    //type: Un șir de caractere care poate fi "success" sau "error", indicând tipul alertei.
    message: "  super",
  });

  return (
    <AlertContext.Provider
      value={{
        ...state,
        onOpen: (type, message) => setState({ isOpen: true, type, message }),
        onClose: () => setState({ isOpen: false, type: "", message: "" }),
        //onOpen: O funcție care poate fi apelată pentru a deschide o alertă cu un anumit tip și mesaj
        //onClose: O funcție care închide alerta, resetând valorile isOpen, type și message
      }}
    >
      {children}
      //Componentele încorporate în interiorul provider-ului sunt randate
      utilizând children
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);
