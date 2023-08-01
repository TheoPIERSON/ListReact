import { useState } from "react";

function App() {
  //State (état, données)

  const [fruits, setfruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  const [nouveauFruit, setNouveauFruit] = useState("");
  //Comportement

  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];

    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. modifier mon state avec le setter

    setfruits(fruitsCopyUpdated);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fruitsCopy = [...fruits];
    const id = new Date().getTime();
    const nom = nouveauFruit;
    fruitsCopy.push({ id, nom });
    setfruits(fruitsCopy);
    setNouveauFruit("");
  };

  const handleChange = (event) => {
    setNouveauFruit(event.target.value);
  };
  //Affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.nom} <button onClick={() => handleDelete(fruit.id)}>X</button>
          </li>
        ))}
      </ul>
      <form action="submit" onSubmit={handleSubmit}>
        <input value={nouveauFruit} type="text" placeholder="Ajouter un fruit" onChange={handleChange} />
        <button>Ajouter + </button>
      </form>
    </div>
  );
}

export default App;
