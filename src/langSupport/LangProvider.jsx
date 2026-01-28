import { createContext, useContext, useState } from "react";

const LangContext = createContext({
  lang: "en",
  setLang: () => {},
});

export function LangProvider({ children }) {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "en"
  );

  const updateLang = (l) => {
    localStorage.setItem("lang", l);
    setLang(l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: updateLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
