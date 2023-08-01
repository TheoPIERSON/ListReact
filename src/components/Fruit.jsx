export default function Fruit({ fruitInfo, actionClick, favClick }) {
  //state
  //comportement
  //render
  return (
    <li>
      {fruitInfo.nom}
      <button onClick={actionClick}>X</button>
      <button onClick={favClick}>V</button>
    </li>
  );
}
