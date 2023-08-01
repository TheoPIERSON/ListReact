import { useState } from "react";

export default function FruitForm({ fruits, setfruits }) {
  //state
  const [nouveauFruit, setNouveauFruit] = useState("");
  //comportement
  const handleSubmit = (event) => {
    event.preventDefault();
    const fruitsCopy = [...fruits];
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAAjouter = { id, nom };
    fruitsCopy.push(fruitAAjouter);
    setfruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //render
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input value={nouveauFruit} type="text" placeholder="Ajouter un fruit" onChange={handleChange} />
      <button>Ajouter + </button>
    </form>
  );
}
