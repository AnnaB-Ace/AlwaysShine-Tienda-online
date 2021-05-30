import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemsList from "../ItemsList/ItemsList";
import { getFirestore } from "../../firebase/index";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [isEmptyList, setisEmptyList] = useState(false);
  const [showList, setshowList] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        const querySnapshot = await itemCollection.get();
        if (querySnapshot.size === 0) {
          console.log("probando si pasa x aca");
        } else {
          let data = [];
          querySnapshot.docs.forEach((doc) =>
            data.push({
              id: doc.id,
              ...doc.data(),
            })
          );
          setItems(data);
        }
      } catch (error) {
        console.error("Firestore error: ", error);
      }
    };
    getData();
  }, []);
  
  const handleClick = () => {
    setshowList(true);
  };
  return (
    <>
      {/* <div className="contenedorImage1">
        <div className="containerImage image7">
          <div className="texto">
            <h1 className="container_des">New Collection 2021</h1>

            <div onClick={handleClick} className="btn_des">
              Ver más
            </div>
          </div>
        </div>
        <div className="containerImage image8"></div>
      </div> */}
      <div>
        <div className="ItemsListContainer">
          <ItemsList className="list" items={items} />
        </div>
      </div>
    </>
  );
};

// export const products = [
//   {
//     id: 1,
//     categoria: "Abrigo",
//     imagen: "Abrigo1R",
//     imagenExpandida: "Abrigo1",
//     title: "Campera de nylon impermeable",
//     precio: 5600,
//     description:
//       "Campera de nylon impermeable con un sutil brillo en la tela. Rellena con guata y forrada al tono. Detalles marcarios, multiples bolsillos y capucha desmontable. Super canchera y abrigada. Ideal para toda ocasión de uso.",
//   },
//   {
//     id: 2,
//     categoria: "Vestido",
//     imagen: "Vestido1R",
//     imagenExpandida: "Vestido1",
//     title: "Vestido de calce con volado",
//     precio: 3100,
//     description:
//       "Vestido de calce amplio manga 3/4 con puños. Detalle de 3 volados fruncidos en delantero y espalda. Tejido creppe de viscosa estampa exclusiva de Portsaid.",
//   },
//   {
//     id: 3,
//     categoria: "Sweater",
//     imagen: "Sweater1R",
//     imagenExpandida: "Sweater1",
//     title: "Sweater de lana",
//     precio: 3200,
//     description:
//       "Jersey de punto suave con cuello redondo, manga larga, color mostaza.",
//   },
//   {
//     id: 4,
//     categoria: "Pollera",
//     imagen: "Pollera1R",
//     imagenExpandida: "Pollera1",
//     title: "Pollera tiro alto",
//     precio: 2500,
//     description:
//       "Pollera de vegan leather tiro alto con recorte en bajo que forma un volado con piedritas plateadas en el final de la misma. Lleva un cierre en el lateral para su acceso.",
//   },
//   {
//     id: 5,
//     categoria: "Jeans",
//     imagen: "Jeans1R",
//     imagenExpandida: "Jeans1",
//     title: "Jeans Basic",
//     precio: 4800,
//     description:
//       "tura alta, bragueta con cremallera con botón y perneras ligeramente cónicas.",
//   },
//   {
//     id: 6,
//     categoria: "Abrigo",
//     imagen: "Abrigo2R",
//     imagenExpandida: "Abrigo2",
//     title: "Campera tipo parka",
//     precio: 5400,
//     description:
//       "Campera tipo parka, de calce recto, con jareta para ajustar en cintura. Bolsillos cargo. Piel de la capucha desmontable. Tela rasada e interior con piel y parte matelaseada, a contratono.",
//   },
//   {
//     id: 7,
//     categoria: "Sweater",
//     imagen: "Sweater2R",
//     imagenExpandida: "Sweater2",
//     title: "Sweater Primavera",
//     precio: 2600,
//     description:
//       "Jersey de punto suave con cuello redondo, manga larga y ribete de canalé.",
//   },
//   {
//     id: 8,
//     categoria: "Vestido",
//     imagen: "Vestido2R",
//     imagenExpandida: "Vestido2",
//     title: "Vestido estampa cuadros",
//     precio: 3400,
//     description:
//       "Vestido corto estampado de viscosa con escote de pico y costura bajo el busto. Modelo con mangas abullonadas cortas con elástico y ribete de volante, tiras cosidas en la parte posterior de la cintura y cremallera oculta detrás. Sin forrar.",
//   },
//   {
//     id: 9,
//     categoria: "Jeans",
//     imagen: "Jeans2R",
//     imagenExpandida: "Jeans2",
//     title: "Jeans Relax",
//     precio: 4800,
//     description:
//       "Vaqueros de 5 bolsillos ligeramente más holgados en denim elástico lavado. Cintura extra alta, bragueta con botones y perneras estrechas hasta los tobillos. El contenido de algodón se recicla parcialmente.",
//   },
//   {
//     id: 10,
//     categoria: "Abrigo",
//     imagen: "Abrigo3R",
//     imagenExpandida: "Abrigo3",
//     title: "Campera Liveana",
//     precio: 6300,
//     description:
//       "Campera de largo modular por debajo de la cadera. Con cuello alto y capucha. Matelaseado de bastones de 6 cm. Forrería a contratono. Es una prenda ultra liviana, con relleno de vellón siliconado.Trae una riñorera para su guardado.",
//   },
//   {
//     id: 11,
//     categoria: "Sweater",
//     imagen: "Sweater3R",
//     imagenExpandida: "Sweater3",
//     title: "Cardigan Basico texturado",
//     precio: 3100,
//     description:
//       "Cárdigan basico, suave de canalé con contenido de lana. Escote en v. ",
//   },
//   {
//     id: 12,
//     categoria: "Vestido",
//     imagen: "Vestido3R",
//     imagenExpandida: "Vestido3",
//     title: "Vestido largo volado",
//     precio: 3600,
//     description:
//       "Vestido fluido de cupro combinado con gasa creppe en espalda. Escote tipo halter con volados, tajos en laterales y abertura en espalda.",
//   },
//   {
//     id: 13,
//     categoria: "Abrigo",
//     imagen: "Abrigo4R",
//     imagenExpandida: "Abrigo4",
//     title: "Blazer Ligero",
//     precio: 3000,
//     description: "Blazer largo ligero lila",
//   },
//   {
//     id: 14,
//     categoria: "Sweater",
//     imagen: "Sweater4R",
//     imagenExpandida: "Sweater4",
//     title: "Cardigan suave de canalé",
//     precio: 2500,
//     description:
//       "Cárdigan suave de canalé con contenido de lana. Escote de pico, botones en la parte delantera y bolsillos delanteros. Hombros caídos, manga larga y puños y bajo de canalé estrecho. El contenido de poliéster se recicla.",
//   },
//   {
//     id: 15,
//     categoria: "Vestido",
//     imagen: "Vestido4R",
//     imagenExpandida: "Vestido4",
//     title: "Vestido Suelto",
//     precio: 3300,
//     description: "Vestido de tencel sostenible de fit holgado con estocte v.",
//   },
//   {
//     id: 16,
//     categoria: "Abrigo",
//     imagen: "Abrigo5R",
//     imagenExpandida: "Abrigo5",
//     title: "Campera holgada",
//     precio: 5100,
//     description:
//       "Campera de largo modular por encima de la rodilla. Calce holgado. Con capucha. bolsillos cargo. El interior es de piel muy suave y confortable y exterior con mano peach. Prenda super liviana.",
//   },
//   {
//     id: 17,
//     categoria: "Vestido",
//     imagen: "Vestido5R",
//     imagenExpandida: "Vestido5",
//     title: "Vestido Suelto",
//     precio: 3800,
//     description:
//       "Vestido oversize con manga corta y escote redondo, jersey de algodón",
//   },
// ];

// const getProductsMock = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(products);
//     }, 2000);
//   });
// };

// export const ItemListContainer = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const productsFromApi = await getProductsMock();
//       setProducts(productsFromApi);
//     };
//     getProducts();
//   }, []);

//   return (
//     <div className="ItemsListContainer">
//       <ItemsList className="list" products={products} />
//     </div>
//   );
// };

// {
//     id: 18,
//     categoria: "Abrigo",
//     imagen: "Abrigo6R",
//     imagenExpandida: "Abrigo6",
//     title: "Tapado de paño",
//     precio: 7300,
//     description: "Tapado de paño largo, con boton grande al centro.",
//   },
//   {
//     id: 19,
//     categoria: "Vestido",
//     imagen: "Vestido6R",
//     imagenExpandida: "Vestido6",
//     title: "Vestido Piedras",
//     precio: 4000,
//     description:
//       "Vestido de calce recto manga 3/4. Detalle de piedras engarzadas en puños. Tejido creppe.",
//   },
//   {
//     id: 20,
//     categoria: "Abrigo",
//     imagen: "Abrigo7R",
//     imagenExpandida: "Abrigo7",
//     title: "Abrigo de paño",
//     precio: 6800,
//     description:
//       "Abrigo de paño con solapa y cruce mediando un botón. Bolsillos en el frente , recorte en espalda. Largo modular : arriba de la rodilla.",
//   },
//   {
//     id: 21,
//     categoria: "Vestido",
//     imagen: "Vestido7R",
//     imagenExpandida: "Vestido7",
//     title: "Vestido con Broderie",
//     precio: 3300,
//     description:
//       "Vestido chemise corto entallado con evase en falda y manga corta . Detalle de broderie en prenda. Tejido lino viscosa.",
//   },
//   {
//     id: 22,
//     categoria: "Sweater",
//     imagen: "Sweater5R",
//     imagenExpandida: "Sweater5",
//     title: "Sweater puños ajustados",
//     precio: 3300,
//     description:
//       "Cárdigan de punto cuadrado en una mezcla de lana suave y lana de alpaca. Escote en pico y botones en la parte delantera, hombros caídos y mangas largas y voluminosas con puños ajustados. Canalé en escote, puños y bajo.",
//   },
//   {
//     id: 23,
//     categoria: "Vestido",
//     imagen: "Vestido8R",
//     imagenExpandida: "Vestido8",
//     title: "Vestido corto verano",
//     precio: 3300,
//     description:
//       "Vestido de calce amplio, escote a la base sin mangas. Tejido 100% lino en compromiso con la sustentabilidad.",
//   },
