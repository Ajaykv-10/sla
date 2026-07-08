import React from "react";
import { UserProvider } from "./components/UserProvider";
import Profile from "./components/Profile";


function App() {
  return (
    <UserProvider>
      <Profile />
    </UserProvider>
  );
}

export default App;