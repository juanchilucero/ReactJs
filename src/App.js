import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar from './components/navbar/NavBar'; // Importa el componente NavBar
import ItemListContainer from './components/navbar/ItemListContainer'; // Importa el componente ItemListContainer

function App() {
  return (
    <div className="App">
      <NavBar /> {/* Renderiza el componente NavBar */}
      <ItemListContainer greeting="¡Hola! Bienvenido a la tienda." /> {/* Renderiza el componente ItemListContainer */}
    </div>
  );
}

export default App;
