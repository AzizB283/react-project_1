import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Shop from './component/Shop';
import Thunk from './component/Thunk';

function App() {
  return (
    <>
    <BrowserRouter>

     <Header />
     <Routes>
     <Route path='/' element={<Shop />}/>
      <Route path="/thunk" element={<Thunk />} />
     </Routes>
    </BrowserRouter>
    {/* <Shop /> */}
    
    </>
  );
}

export default App;
