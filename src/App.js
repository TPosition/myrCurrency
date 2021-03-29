// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from "./component/navbar.js";
import CCurrencyList from "./component/CCurrencyList.js";


function App() {
  return (
    <div className="App">
      <AppBar />
      <CCurrencyList />
    </div>
  );
}

export default App;
