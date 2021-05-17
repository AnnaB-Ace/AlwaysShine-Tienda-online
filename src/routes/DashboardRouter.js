import React from "react";
import { Route, Switch } from "react-router";
import { CategoriesList } from "../components/CategoriesList/CategoriesList";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { NavBar } from "../components/navbar/NavBar";

export const DashboardRouter = () => {
  return (
    <div>
      <>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route
              exact
              path="/category/:categoriaid"
              component={CategoriesList}
            />
            <Route exact path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </div>
      </>
    </div>
  );
};
