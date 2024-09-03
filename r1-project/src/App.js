import { useState } from 'react';
import './App.css';
import { Button } from './components/button/Button';
import { Input } from './components/inputBx';

function BCA(){
console.log("BCA")
}
function App() {
  BCA();
  let [input, setInut] = useState();

  let showValue = () => {
    let input=document.getElementById("userInput");
    setInut(input.value);
    input.value="";
    input.focus();
  }
  return (
    <div className="App">
      <Input type="text" inputID="userInput" />
      <Button text="Click" click={showValue} />
      <h1>hello {input}</h1>
    </div>
  );
}

export default App;

