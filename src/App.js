import './App.css';
import Footer from './components/footer';
import CountriesList from './components/countriesList';
import StateData from './components/stateData';
import Worldwidetotal from './components/worldwidetotal';
function App() {
  return (
    <div className="App">
      <Worldwidetotal/>
      <StateData/>
      <CountriesList/>
      {/* <Chart/> */}
      <Footer/>
    </div>
  );
}

export default App;
