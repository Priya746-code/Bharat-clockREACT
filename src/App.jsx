<<<<<<< HEAD
import Display from "./Components/Display";
import Button from "./Components/Button";
import { useState } from "react";

function App() {
  const [calval, setCalVal] = useState("");

const onButtonClicked = (buttonText) => {
  if (buttonText === "C") {
    setCalVal(""); // Clear the state when "C" is clicked
  } else if (buttonText === "=") {
    const result= eval(calval);
    setCalVal(result);
    // You can handle calculation here, like using eval or a proper calculator logic
  } else {
    const newValue = calval + buttonText;
    setCalVal(newValue); // Corrected the state update
  }
};

  return (
<center>
    <div className="flex flex-col items-center justify-center min-h-screen p-4 m-4 bg-zinc-300 bg rounded-xl w-80">
      <Display displayValue={calval}></Display>
      <Button onButtonClicked={onButtonClicked}></Button>
    </div>
    </center>
  );
}

export default App;
=======
import ClockHeading from "./components/ClockHeading";
import Slogan from "./components/Slogan";
import Clock from "./components/currentClock";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <ClockHeading />
      <Slogan />
      <Clock />
    </div>
  );
}

export default App;

>>>>>>> 75e773a08fdcbbef899cd09db6e6770b53d966b0
