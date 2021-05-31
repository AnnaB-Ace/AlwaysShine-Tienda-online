import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CategoriesList } from "./components/CategoriesList/CategoriesList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/cart/Cart";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ minHeight: "500px" }}>
        <Switch>
          <Route exact path="/" component={ItemListContainer} />
          <Route
            exact
            path="/category/:categoriaid"
            component={CategoriesList}
          />
          <Route exact path="/item/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
          {/* <Route exact path="/login" component={LoginPerson} />
          <Route path="/" component={DashboardRouter} />
          <Route exact path="/cart" component={Cart} /> */}
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
