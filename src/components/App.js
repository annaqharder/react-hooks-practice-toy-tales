import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [ showForm, setShowForm ] = useState(false);
  const [ toys, setToys ] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(response => response.json())
      .then((allToys) => {
        setToys(allToys)
      })
  }, [])

  function handleNewToy(newToy){
    setToys([...toys, newToy])
  }

  function handleDonatedToy(donatedToy) {
    const updatedToys = toys.filter((toy) => toy.id !== donatedToy.id); 
    setToys(updatedToys)
  }
  
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm 
        onHandleNewToy={handleNewToy}
      /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        toys={toys}
        onHandleDonatedToy={handleDonatedToy}
      />
    </>
  );
}

export default App;
