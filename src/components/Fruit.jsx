export default function Fruit({ fruitInfo, actionClick }) {
  //state
  //comportement
  //render
  return (
    <li>
      {fruitInfo.nom}
      <button onClick={actionClick}>X</button>
    </li>
  );
}
