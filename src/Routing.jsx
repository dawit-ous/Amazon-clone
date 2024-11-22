import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Landing from './components/pages/Landing/Landing'
import SignUP from './components/pages/Auth/SignUp'
import Payment from './components/pages/Payment/Payment'
import Orders from './components/pages/Orders/Orders'
import Cart from './components/pages/Cart/Cart'
import Results from './components/pages/Results/Results'
import ProductDetail from './components/pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUP />} />
        <Route path="/Payments" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing
