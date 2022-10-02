import { useState } from 'react'
import Instructions from "./components/ui/Instructions";
import Header from "./components/ui/Header";
import Morty from "./components/game/Morty";

function App() {

   const [mode, setMode] = useState(false)

   const modeHandler = () => {
    setMode(true)
   }

  return (
    <div className="App">
     <Header />
     {!mode && <Instructions onModeSelect={modeHandler} /> }
     {mode && <Morty /> }
    </div>
  );
}

export default App;
