import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = async () => {
    setError(null);
    try {
      dispatch({ type: "LOGOUT" });
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  return { logout, error };
};
