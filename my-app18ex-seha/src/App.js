import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import CartSummary from "./Component/CartSummary";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>쇼핑몰</h2>
        <Link to="/product">상품 목록</Link> | &nbsp;
        <Link to="/cart">장바구니</Link> | &nbsp;
        <Link to="/summary">가격확인</Link>
        <hr/>
        <Routes>
          <Route path="/product" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/summary" element={<CartSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
