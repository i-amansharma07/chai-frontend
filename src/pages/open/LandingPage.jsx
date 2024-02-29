import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-8">
        <Link to={"/register"}>
          <button className="rounded-md border-2 border-black  p-1">
            Register
          </button>
        </Link>
        <Link to={"/login"}>
          <button className="rounded-md border-2 border-black  p-1">
            Login
          </button>
        </Link>
      </div>
      <div className="flex h-screen w-screen items-center justify-center text-2xl font-bold">
        Landing Page
      </div>
    </div>
  );
};

export default LandingPage;
