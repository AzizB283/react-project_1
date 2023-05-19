import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainComp from "./component/main/MainComp";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainComp />
      </BrowserRouter>
    </>
  );
}

export default App;
