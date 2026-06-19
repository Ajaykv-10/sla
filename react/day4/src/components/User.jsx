import  { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "John",
    age: 25,
    city: "New York",
  });

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>
      <h2>City: {user.city}</h2>
    </div>
  );
}

export default User;