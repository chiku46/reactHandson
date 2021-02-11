import logo from './logo.svg';
import './App.css';
import { ListofPlayers } from './Components/ListofPlayers';
import { EvenPlayers, mergePlayers, OddPlayers } from './Components/IndianPlayers';

function App() {
  
const players=[
"Dhoni",
"Kohli",
"Rohit",
"Sachin",
"Sehwag",
"Rishabh",
 
];
  var flag = true;
  if(flag == true)
  {
    return (
      <div>
        <ListofPlayers/>
      </div>
    )
  }
  else{
  return (
    <div >
      <h1> Odd Players </h1>
      {OddPlayers(players)}
      <hr/>
      <h1> Even Players </h1>
      {EvenPlayers(players)}
      <hr/>
      <h1> List of Indian Players merged: </h1>
      {mergePlayers()}
    </div>
  );
}
}
export default App;
