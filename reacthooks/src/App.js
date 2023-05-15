import React, { createContext } from "react";
import CompA from "./component/CompA";
import ContextA from "./ContextA";
import Ref from "./component/Ref";
import UseRef from "./component/UseRef";
import Calc from "./component/Calc";
import './styles.css'

const name = createContext();

function App() {
  
  return <>
  {/* <name.Provider value = {"Aziz"}>
    <h1>useContext Hook</h1>
    <CompA />
    <ContextA />
    <Ref />
    <UseRef />
  </name.Provider> */}

  <Calc />
  </>;
}

export default App;
export {name}
