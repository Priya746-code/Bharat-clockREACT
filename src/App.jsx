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

