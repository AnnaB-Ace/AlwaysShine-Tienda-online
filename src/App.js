import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import CategoriesList from "./components/CategoriesList/CategoriesList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={ItemListContainer} />
        <Route exact path="/category/:categoria" component={CategoriesList} />
        <Route exact path="/item/:id" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
