import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "./hooks/useAuth";
import useFetch from "./hooks/useFetch";
import { getUserInfo } from "./services/api/account";

const App = ({ openRoutes, protectedRoutes }) => {
  const [user, setUser] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(null);

  useEffect(() => {
    localStorage.setItem('accessToken',accessToken)
    localStorage.setItem('refreshToken',refreshToken)

    getUserInfo(accessToken).then((res) => {
      setUser(res)
    })

  }, [accessToken]);

  function logout() {
    localStorage.setItem("accessToken",'');
    localStorage.setItem("refreshToken",'');
    setToken("");
  }


  const Routes = user ? protectedRoutes : openRoutes;

  return (
    <React.StrictMode>
      <UserContext.Provider value={{ user, setUser, accessToken, 
        setAccessToken, refreshToken, setRefreshToken, logout }}>
        <Router>
          <Routes />
        </Router>
      </UserContext.Provider>
    </React.StrictMode>
  );
};

export const initApp = ({ openRoutes, protectedRoutes }) => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <App openRoutes={openRoutes} protectedRoutes={protectedRoutes} />
  );
};
