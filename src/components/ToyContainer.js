import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, onHandleDonatedToy}) {
  const mappedToys = toys.map((toy) => {
    return <ToyCard 
      key={toy.id} 
      toy={toy}
      onHandleDonatedToy={onHandleDonatedToy}
    />
  })

  return (
    <div id="toy-collection">{mappedToys}</div>
  );
}

export default ToyContainer;
