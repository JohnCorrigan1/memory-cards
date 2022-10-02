import GetImages from "./components/GetImages";
import Instructions from "./components/ui/Instructions";
import Header from "./components/ui/Header";
import Morty from "./components/game/Morty";

function App() {

  return (
    <div className="App">
     <Header />
     <Instructions />
     <Morty />
    </div>
  );
}

export default App;
