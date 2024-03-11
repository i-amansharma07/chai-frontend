import React, { useState } from "react";
import { logoutUser } from "../../services/api/account";
import useAuth from "../../hooks/useAuth";
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";

const Logout = () => {
  const navigate = useNavigate()
  const [isLoggingout, setIsLoggingout] = useState(false);
  const { logout } = useAuth();

  async function handleLogout() {
    setIsLoggingout(true)
    const res = await logoutUser();
    if (res?.success) {
         logout()   
         toast.success(res?.message)  
         navigate('/') 
    }
    setIsLoggingout(false)
  }

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Button
        disabled={isLoggingout}
        onClick={handleLogout}
        isSubmitting={isLoggingout}
      >
        Logout
      </Button>
      {/* <button
        disabled={isLoggingout}
        className={`border border-black w-[300px] h-[100px]  rounded-lg ${
          isLoggingout ? "bg-red-500" : "bg-green-500"
        }`}
        onClick={handleLogout}
      >
        {isLoggingout ? "Loggin out ....." : "Logout"}
      </button> */}
    </div>
  );
};

export default Logout;
