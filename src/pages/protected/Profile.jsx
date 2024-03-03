import React from "react";
import useAuth from "../../hooks/useAuth";
import ParentLayout from "../../components/ParentLayout";

const Profile = () => {
  const { user } = useAuth();
console.log(user);
  return (
    <ParentLayout>
      <div className="flex flex-col">
        <img
          className="w-full h-[300px] object-cover"
          src={user.coverImage}
          alt="cover"
        />
        <img
          className="w-[250px] h-[250px] rounded-full self-center mt-[-125px] object-cover"
          src={user.avatar}
          alt="profile"
        />
        <h1 className="self-center mt-2 text-2xl font-semibold">{user.fullName}</h1>
        <h1 className="self-center mt-2 text-base font-semibold">{user.userName}</h1>
      </div>
    </ParentLayout>
  );
};

export default Profile;
