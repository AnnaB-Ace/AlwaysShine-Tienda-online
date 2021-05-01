import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Categories } from "./components/Categories/Categories";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />

      <div className="borrar">
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
