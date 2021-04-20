import "./App.css";
import { NavBar } from "./components/navbar/NavBar";
import { List } from "./components/list";
import { Categories } from "./components/ItemListContainer/ItemListContainer";
function App() {
  // componente funcional. General
  const products = [
    {
      title: "Remera1",
      precio: "100",
      description: "Remeras basicas unicolor1",
    },
    {
      title: "Remera2",
      precio: "200",
      description: "Remeras basicas unicolor2",
    },
    {
      title: "Remera3",
      precio: "300",
      description: "Remeras basicas unicolor3",
    },
    {
      title: "Remera4",
      precio: "400",
      description: "Remeras basicas unicolor4",
    },
    {
      title: "Remera5",
      precio: "500",
      description: "Remeras basicas unicolor5",
    },
  ];

  return (
    <div className="App">
      <NavBar />
      <Categories />
      <List products={products} />
    </div>
  );
}

export default App;
