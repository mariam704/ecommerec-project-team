import { AuthContxt } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContxt);
  if (!context) {
    throw Error("error error error");
  }

  return context;
};
