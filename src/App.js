import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:categoriaid" component={CategoriesList} />
        <Route exact path="/item/:id" component={ItemDetailContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
