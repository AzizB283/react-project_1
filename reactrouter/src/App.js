import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Page404 from "./pages/404";
import AntDesign from "./pages/AntDesign1";
import Form from "./pages/Form";
import AntDesign1 from "./pages/AntDesign1";


function App() {

  return (
    <BrowserRouter>
    <Header1 />
    {/* <Header2 /> */}
    <Routes>
      <Route path="/" element={<Home  homePage="Home"/>}  />
      <Route path="/blogs" element={<Blogs blogs = "Blogs"/>} />
      <Route path="/about" element={<About about = "About"/>}/>
      <Route path="/contact" element={<Contact contact="Contact"/>}/>
      <Route path="/antdesign" element={<AntDesign1 />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
