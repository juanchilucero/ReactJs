import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/NavBar'; // Importa el componente NavBar
import ItemListContainer from './components/ItemListContainer'; // Importa el componente ItemListContainer

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Renderiza el componente NavBar */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      <ItemListContainer greeting="¡Hola! Bienvenido a la tienda." /> {/* Renderiza el componente ItemListContainer */}
    </div>
  );
}

export default App;
