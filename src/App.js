import { useState } from 'react'
import Instructions from "./components/ui/Instructions";
import Header from "./components/ui/Header";
import Game from './components/game/Game';

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
      {mode && <Game getMode={mode} setMode={setMode}/>}
    </div>
  );
}

export default App;