import { createContext, useReducer } from "react";

export const AuthContxt = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return { ...state, user: action.payload };
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  // console.log(state);

  return (
    <AuthContxt.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContxt.Provider>
  );
};
