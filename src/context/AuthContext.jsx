import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import apiRequest from "../lib/apiRequest";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const updateCurrentUser = (data) => {
    setCurrentUser(data);
  };

  // Save user to local storage when currentUser changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  const logout = async () => {
    await apiRequest.post("/auth/logout");
    setCurrentUser(null);
  };

  const context = {
    currentUser,
    setCurrentUser,
    updateCurrentUser,
    logout,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
