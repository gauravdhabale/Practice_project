//import logo from "./logo.svg";
import "./App.css";
import Classcounter from "./components/useEffect/Classcounter";
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterFour from "./components/useState/HookCounterFour";
import HookCounterThree from "./components/useState/HookCounterThree";
import HookCounterTwo from "./components/useState/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <HookMouse />
      {/* <HookCounterOne /> */}
      {/* <Classcounter /> */}
      {/* <HookCounterFour />
      <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounter />
      <ClassCounter /> */}
    </div>
  );
}

export default App;
