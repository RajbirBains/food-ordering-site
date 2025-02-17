import './App.css';
import Navbar from './components/navbar/Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/cart' element = {<Cart/>}></Route>
        <Route path='/order' element = {<PlaceOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
