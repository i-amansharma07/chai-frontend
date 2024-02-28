import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center gap-8 p-20">
        <div className="flex flex-col">
          <label>Email / Userame</label>
          <input
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            className="border-black-500 w-[200px] rounded-md border-2 p-2 text-sm"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <button
          className="sm rounded-md border-2 border-blue-800 px-2 py-1 text-sm"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginPage;
