import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";

function App() {
  //State (état, données)

  const [fruits, setfruits] = useState([
    { id: 1, nom: "Abricot" },
    { id: 2, nom: "Banane" },
    { id: 3, nom: "Cerise" },
  ]);

  //Comportement

  const handleDelete = (id) => {
    //1. copie du state
    const fruitsCopy = [...fruits];
    //2. manipuler mon state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    //3. modifier mon state avec le setter
    setfruits(fruitsCopyUpdated);
  };

  //Affichage (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit fruitInfo={fruit} onFruitDelete={handleDelete} />
        ))}
      </ul>
      <FruitForm fruits={fruits} setfruits={setfruits} />
    </div>
  );
}

export default App;
