import { useEffect, useState } from "react";
import "./App.css";
import { Player1 } from "./components/Player1";
import { Player2 } from "./components/Player2";
import { useSelector } from 'react-redux'
import { Result } from "./components/Result";
import { SinglePlayer } from "./components/SinglePlayer";
import { PlayerType } from "./components/PlayerType";
import { Winner } from "./components/Winner";

function App() {
  const [show, setShow] = useState(false);
  const [showPlayerType, setShowPlayerType] = useState(true);
  const [showWinner, setShowWinner] = useState(false);


  const user = useSelector((state) => state.player.value);
  const cow = useSelector((state) => state.player.cow);
  const bull = useSelector((state) => state.player.bull);
  const isSinglePlayer = useSelector((state) =>state.player.isSinglePlayer)

  useEffect(()=> {
    if(bull === 4)
    {
      setShowWinner(true);
    }
    else 
    {
      if(bull!==null)
      setShow(true)
    }
  },[bull])

  return (
    <div  className="app">
      {
        isSinglePlayer ? <SinglePlayer /> : 
        (
          <>
            <Player1 user={user} />
            <Player2 user={!user} />
          </>
        )
      }


      {
        show && <Result cow={cow} bull={bull} setShow={setShow} />
      }
      {
        showPlayerType && <PlayerType setShowPlayerType={setShowPlayerType} />
      }

      {
        showWinner && <Winner setShowWinner={setShowWinner} />
      }
    </div>
  );
}

export default App;
