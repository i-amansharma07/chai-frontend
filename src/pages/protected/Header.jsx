import { NavLink } from "react-router-dom";

const Header = () => {

const isActive = ({isActive})=> {
  return isActive && 'text-yellow-300'
}
  return (
    <div className="flex justify-center mt-5">
      <div className="w-[600px] h-[70px] rounded-3xl bg-indigo-900 flex items-center p-5 text-white font-semibold text-base justify-between">
        <NavLink exact to={"/"} className={isActive}>
          <h1>Home</h1>
        </NavLink>
        <NavLink to={"/profile"} className={isActive}>
          <h1>Profile</h1>
        </NavLink>
        <NavLink to={"/password"} className={isActive}>
          <h1>Change Password</h1>
        </NavLink>
        <NavLink to={"/upload-video"} className={isActive}>
          <h1>Upload Video</h1>
        </NavLink>
        <NavLink to={"/logout"} className={isActive}>
          <h1>Logout</h1>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
