import logo from './logo.svg';
import './App.css';

function App() {
  const sr="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  const element="Office Space"
  const jsxatt=<img src={sr} width="25%" height="25%" alt="Office Space"/>
  const ItemName = {Name:"DBS",Rent:50000,Address:'Chennai'}
  var textRed = {
    "color":"red"
  }
  var textGreen = {
    "color":"green"
  }
  
  return (
    <div className="App">
      <div className="lol">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}
      <h1>Name:{ItemName.Name}</h1>
      <h3 style={ItemName.Rent>50000?textRed:textGreen}>Rent Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>
      </div>
    </div>
  );
}

export default App;
