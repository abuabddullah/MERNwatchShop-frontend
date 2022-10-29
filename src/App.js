import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/Shared/NotFound";
import Nav from "./Components/Shared/Nav";

function App() {
  return (
    <div className="mainApp">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="cart" element={<Cart />} />




        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
