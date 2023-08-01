import { useState } from "react";

function App() {
  //State (état, données)

  const [fruits, setfruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  //Comportement

  const handleDelete = (id) => {
    console.log(id);
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
    </div>
  );
}

export default App;
