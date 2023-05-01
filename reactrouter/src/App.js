import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Page404 from "./pages/404";
import AntDesign from "./pages/AntDesign";


function App() {
  return (
    <BrowserRouter>
    <Header2 />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blogs" element={<Blogs />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/antdesign" element={<AntDesign />}/>
      <Route path="*" element={<Page404 />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
