import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { User } from "./components/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <User />
    </div>
  );
}

export default App;
