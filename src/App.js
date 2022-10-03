import { useState } from 'react'
import Instructions from "./components/ui/Instructions";
import Header from "./components/ui/Header";
import Morty from "./components/game/Morty";
import Rick from './components/game/Rick';

function App() {

  const [mode, setMode] = useState(false)

  const mortyHandler = () => {
    setMode('morty')
  }

  const rickHandler = () => {
    setMode('rick')
  }

  const homeHandler = () => {
    setMode(false)
  }



  return (
    <div className="App">
      <Header onHomeSelect={homeHandler} onRickSelect={rickHandler} onMortySelect={mortyHandler} />
      {!mode && <Instructions onRickSelect={rickHandler} onMortySelect={mortyHandler} />}
      {mode === 'morty' && <Morty />}
      {mode === 'rick' && <Rick />}
    </div>
  );
}

export default App;
