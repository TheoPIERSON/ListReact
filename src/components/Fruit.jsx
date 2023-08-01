export default function Fruit({ fruitInfo, onFruitDelete }) {
  //state
  //comportement
  //render
  return (
    <li key={fruitInfo.id}>
      {fruitInfo.nom}
      <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
    </li>
  );
}
