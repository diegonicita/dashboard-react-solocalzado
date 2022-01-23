import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";

let cards = [{
  title: "Total de Productos",
  color: "primary",
  cuantity: "?",
  icon: "fa-clipboard-list",
},
 {
  title: "Total de Categorias",
  color: "warning",
  cuantity: "?",
  icon: "fa-award",
},
{
  title: "Total de Usuarios",
  color: "primary",
  cuantity: "?",
  icon: "fa-clipboard-list",
}];

function ContentRowMovies() {
  const [smallCardLists1, setSmallCardLists1] = useState([ cards[0], cards[1]]);
  const [smallCardLists2, setSmallCardLists2] = useState([ cards[2] ]);

  let callApi = (url, consecuencia) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        consecuencia(data);        
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {    
    callApi("/api/products", mostrarTotalProductos);
  }, []);

  useEffect(() => {    
    callApi("/api/users", mostrarTotalUsuarios);
  }, []);

  let mostrarTotalProductos = (data) => {
    cards[0].cuantity = data.meta.count;
    cards[1].cuantity = Object.keys(data.meta.countByCategory).length;
    setSmallCardLists1([ cards[0], cards[1] ]);
  }; 

  let mostrarTotalUsuarios = (data) => {
    cards[2].cuantity = data.meta.count;    
    setSmallCardLists2([cards[2]]);
  };

  return (
    <div className="row">
      {smallCardLists1.map((item, i) => {
        return <SmallCard {...item} key={new Date().getTime() + i}
        />;
      })}

      {smallCardLists2.map((item, i) => {
        return <SmallCard {...item} key={new Date().getTime() + i}
        />;
      })}
    </div>
  );
}

export default ContentRowMovies;
