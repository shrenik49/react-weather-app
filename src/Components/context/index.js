import React, { createContext, useContext, useState } from "react";
export const LoginContext = createContext();
export function LoginProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}

// Step 3: Create custom hooks to access the login context
export function useLogin() {
  return useContext(LoginContext);
}
