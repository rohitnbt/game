import { useEffect, useState } from "react";
import "./App.css";
import { Player1 } from "./components/Player1";
import { Player2 } from "./components/Player2";
import { useSelector } from 'react-redux'
import { Result } from "./components/Result";

function App() {
  const [show, setShow] = useState(false);

  const user = useSelector((state) => state.player.value);
  const cow = useSelector((state) => state.player.cow);
  const bull = useSelector((state) => state.player.bull);

  useEffect(()=> {
    if(cow!==null)
    setShow(true)
  },[cow])

  return (
    <div  className="app">
      <Player1 user={user} />
      <Player2 user={!user} />
      {
        show && <Result cow={cow} bull={bull} show={show} setShow={setShow} />
      }
    </div>
  );
}

export default App;
