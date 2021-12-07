import './App.css';
import CountriesList from './components/countriesList';
import StateData from './components/stateData';
import Worldwidetotal from './components/worldwidetotal';
function App() {
  return (
    <div className="App">
      <Worldwidetotal/>
      <StateData/>
      <CountriesList/>
    </div>
  );
}

export default App;
