import React, {useState} from "react";

function ToyForm({onHandleNewToy}) {

  const [formData, setFormData] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); 
    
    const newToy ={
      name: formData.name, 
      image:formData.image,
      likes:formData.likes = 0
    }

    fetch("http://localhost:3001/toys", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToy)
    })
    
    onHandleNewToy(newToy)
  }

  function handleChange(event) {
    setFormData(prevFormData => {
      return {...prevFormData, [event.target.name]: event.target.value}
    });
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleChange}
          value={formData.name}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleChange}
          value={formData.image}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default ToyForm;
