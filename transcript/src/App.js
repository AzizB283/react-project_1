import { BrowserRouter } from "react-router-dom";
import "./App.css";
import CompA from "./component/CompA";
import MainComp from "./component/main/MainComp";
import Output from "./component/Output";

function App() {
  return (
    <>
      {/* <CompA /> */}
      {/* <Output /> */}
      <BrowserRouter>
        <MainComp />
      </BrowserRouter>
    </>
  );
}

export default App;
