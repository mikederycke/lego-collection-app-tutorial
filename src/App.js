
import './App.css';
import LegoSetsTable from './components/legoSetsTable';



function App() {

  
  return (
    <div className="container">
      <div className="Banner">
        <img src="https://rebrickable.com/static/img/title.png" alt="logo"/>
        <h2>This is a set collector app!</h2>
      </div>
      
      <LegoSetsTable/>

    </div>
  );
}

export default App;
