import { useState } from 'react'
import Instructions from "./components/ui/Instructions";
import Header from "./components/ui/Header";
import Morty from "./components/game/Morty";
import Rick from './components/game/Rick';
import Everyone from './components/game/Everyone';

function App() {

  const [mode, setMode] = useState(false)

  const mortyHandler = () => {
    setMode('morty')
  }

  const rickHandler = () => {
    setMode('rick')
  }

  const everyoneHanlder = () => {
    setMode('everyone')
  }

  const homeHandler = () => {
    setMode(false)
  }



  return (
    <div className="App">
      <Header onHomeSelect={homeHandler} onRickSelect={rickHandler} onMortySelect={mortyHandler} onEveryoneSelect={everyoneHanlder}/>
      {!mode && <Instructions onRickSelect={rickHandler} onMortySelect={mortyHandler} onEveryoneSelect={everyoneHanlder} />}
      {mode === 'morty' && <Morty />}
      {mode === 'rick' && <Rick />}
      {mode === 'everyone' && <Everyone />}
    </div>
  );
}

export default App;
