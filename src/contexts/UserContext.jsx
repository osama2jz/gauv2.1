import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import { useQuery } from "react-query";
import { backendUrl } from "../constants/constants";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  let currentLanguage = localStorage.getItem("lang") || "spanish";
  const [id, setId] = useState(
    currentLanguage === "spanish"
      ? "6429912c360576272cf4acfe"
      : "64299127360576272cf4acfc"
  );
  const [lang, setLang] = useState([]);

  const value = {lang, translate };

  function translate(value) {
    const lowerCaseValue = value?.toLowerCase();
    for (const key in lang) {
      if (key.toLowerCase() === lowerCaseValue) {
        return lang[key];
      }
    }
    return value;
  }

  //API call for fetching dictionary
  const _ = useQuery(
    ["fetchDictionary", id],
    () => {
      return axios.get(`${backendUrl + `/api/translation/list/${id}`}`);
    },
    {
      onSuccess: (response) => {
        setLang(response.data?.data);
      },
    }
  );
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
