import React, { useContext } from "react";
import { UserContext } from "./UserProvider";


function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Role : {user.role}</p>
    </div>
  );
}

export default Profile;