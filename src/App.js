//import logo from './logo.svg';
import rainbow from './rainbow-spiral.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={rainbow} style={{borderRadius:'50%'}} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Something />
    </div>
  );
}

const Something = () =><h1>HEEELLOOOOOOOOOOO!!!!!!</h1>


export default App;
