import logo from './logo.svg';
import './App.css';
import Buttoncustomecomp from './Buttoncustomcomp';


function Button(){

  const handler = () =>{
    alert("Custome Button is clicked")
  }

  return (
    <button onClick={handler}>Custome Button</button>
  )
}

function App() {
  return (
    <div className="App">
      <br></br>
      <Button />
      <br></br>
      <br></br>
      <Buttoncustomecomp />
    </div>
  );
}

export default App;
