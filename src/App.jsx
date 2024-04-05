import { useState } from "react";
import "./App.css";
import { Player1 } from "./components/Player1";
import { Player2 } from "./components/Player2";
import { useSelector } from 'react-redux'


function App() {
  const user = useSelector((state) => state.player.value);

  return (
    <div  className="app">
      <Player1 user={user} />
      <Player2 user={!user} />
    </div>
  );
}

export default App;
