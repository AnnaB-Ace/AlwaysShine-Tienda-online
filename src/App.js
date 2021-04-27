import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { Categories } from "./components/Categories/Categories";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Categories />
      <ItemListContainer />
    </div>
  );
}

export default App;
