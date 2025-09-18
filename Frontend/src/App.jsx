import React from "react";
import Navigation from "./components/Navigation";
import Chat from "./components/Chat";

const App = () => {
  return (
    <div className="p-4 h-dvh flex">
      <Navigation />
      <Chat />
    </div>
  );
};

export default App;
