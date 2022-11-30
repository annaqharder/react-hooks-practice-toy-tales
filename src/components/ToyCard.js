import React from "react";

function ToyCard({toy, onHandleDonatedToy}) {
  const {name, image, likes, id} = toy


  function handleDonateClick(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE", 
    })
    .then((response) => response.json())
    .then(() => onHandleDonatedToy(toy))
  }; 


  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button 
        className="del-btn"
        onClick={handleDonateClick}
      >
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
