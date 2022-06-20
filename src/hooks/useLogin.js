import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Base_URL } from "../service/BaseUrl";
import { useNavigate } from "react-router";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setError(null);
    try {
      await fetch(`${Base_URL}/login`, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User login successfully.") {
            console.log("logged in");
            console.log(data.data.user_id);
            // console.log(email, password);
            let user = {
              email,
              password,
              userId: data.data.user_id,
              token: data.data.token,
            };
            // console.log(user);
            console.log(data);
            dispatch({ type: "LOGIN", payload: user });
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            setError(null);
          } else {
            setError("you must sign up first");
            console.log("failed");
          }
        });
      // console.log(res);
      // dispatch({ type: "LOGIN",  });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return { login, error };
};
