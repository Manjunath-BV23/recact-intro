import logo from './logo.svg';
import './App.css';


function App() {
  const mobiles = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const manu = ["Samsung", "HTC", "Micromax", "Apple"]
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <div className='box'>
      {mobiles.map((e) => (
        <li>{e}</li>
      ))}
      </div>

      <h1>Mobile Manufacturers</h1>
      <div className='box'>
      {manu.map((e) => (
        <li>{e}</li>
      ))}
      </div>
    </div>
  );
}

// {data.map( (user) => UserDisplay(user))}
// function UserDisplay({name, age}) {
//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <h3>Your age is: {age}</h3>
//     </div>
//   )
// }

export default App;
