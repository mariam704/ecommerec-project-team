import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Base_URL } from "../service/BaseUrl";
import { useNavigate } from "react-router";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (user) => {
    setError(null);
    try {
      await fetch(`${Base_URL}/register`, {
        method: "POST",
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          phone: user.phone,
          billing_address: user.billingAddress,
          shipping_address: user.shippingAddress,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log("continue to home page");
            console.log(data);
            let user = {
              email: data.data.email,
              password: data.data.password,
              userId: data.data.user_id,
              token: data.data.token,
            };
            // console.log(email, password);

            // console.log(user);
            // console.log(user);
            dispatch({ type: "SIGNUP", payload: user });
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
            setError(null);
          } else {
            setError("sign up again later");
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

  return { signup, error };
};
