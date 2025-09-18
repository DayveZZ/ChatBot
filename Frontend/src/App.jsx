import React from "react";
import Navigation from "./components/Navigation";
import Chat from "./components/Chat";
import Login from "./components/Login";
import Signup from "./components/Signup.jsx";

const App = () => {
  return (
    <>
      <div>
        <Login />
        <Signup />
      </div>
      <div className="p-4 h-dvh flex">
        <Navigation />
        <Chat />
      </div>
    </>
  );
};

export default App;
