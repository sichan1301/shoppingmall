import {Routes, Route} from "react-router-dom";
import './App.css';
import Basket from "./pages/basket/Basket";
import ClothesDetail from "./pages/detail/ClothesDetail";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/detail/:id" element={<ClothesDetail />} />
        <Route path="/basket" element={<Basket />} />
      </Routes >
    </>
  );
}

export default App;
