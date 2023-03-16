import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: 1,
  onLogout: () => {},
});

export default AuthContext;
