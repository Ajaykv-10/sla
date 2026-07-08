import React, { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const user = {
    name: "Sudhan",
    email: "sudhan@gmail.com",
    role: "Trainer",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};