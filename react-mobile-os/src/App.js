// import logo from './logo.svg';
import './App.css';

function App() {
  const system = ["Android", "Blackberry", "iphone", "windows-phone"];
  const manufacturer = [{ name: "samsung", style: "Square" },
  { name: "HTC", style: "Square" },
  { name: "micromax", style: "circle" },
  { name: "Apple", style: "circle" }];

  return (
    <div className="App">

      <h1>Mobile Operating System</h1>
      <ul>{system.map((e) => {
        return <li><Mobile system={e} /></li>
      })}</ul>



      <h1>Mobile Manufacturer</h1>
      <ul>{manufacturer.map((e) => {
        return <li className={e.style}><Mobile system={e.name} /></li>
      })}</ul>
    </div>
  );
}
function Mobile(probe) {
  return <p>{probe.system}</p>
}

export default App;
