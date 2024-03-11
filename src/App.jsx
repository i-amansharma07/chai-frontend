import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "./hooks/useAuth";
import { getUserInfo } from "./services/api/account";
import Header from "./pages/protected/Header";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

const App = ({ openRoutes, protectedRoutes }) => {
  const [user, setUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken")
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("accessToken")
  );

  useEffect(() => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    getUserInfo().then((res) => {             
      setIsLoading(false);
      setUser(res?.data.user)
    });
  }, [accessToken]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  function logout() {
    localStorage.setItem("accessToken", null);
    localStorage.setItem("refreshToken", null);
    setAccessToken("");
  }

  const Routes = user ? protectedRoutes : openRoutes;

  return (
    <React.StrictMode>
      <UserContext.Provider
        value={{
          user,
          setUser,
          accessToken,
          setAccessToken,
          refreshToken,
          setRefreshToken,
          logout,
        }}
      >
        <Toaster />
        <Router>
          {user && <Header />}
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
