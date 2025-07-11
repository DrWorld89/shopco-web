import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DressStyle from './components/Home/DressStyle';
import Footer from './components/Home/Footer';
import HappyCustomer from './components/Home/HappyCustomer';
import Hero from './components/Home/Hero';
import LatestOffer from './components/Home/LatestOffer';
import NewArrival from './components/Home/NewArrival';
import TopNav from './components/Home/TopNav';
import TopSelling from './components/Home/TopSelling';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import { useState } from 'react';
import { ProductContext } from './context/ProductContext';


function App() {


  const [productID, setProductID] = useState('')


  return (
    <div className="App">
      <ProductContext.Provider value={{ productID, setProductID }}>
        <Router>
          <Routes>
            <Route path='/'
              element={<div>
                <TopNav />
                <Hero />
                <NewArrival />
                <TopSelling />
                <DressStyle />
                <HappyCustomer />
                <LatestOffer />
                <Footer />
              </div>}>
            </Route>
            <Route path='/shop'
              element={<div>
                <TopNav />
                <Shop />
                <LatestOffer />
                <Footer />
              </div>}>
            </Route>
            <Route path='/shop/product'
              element={<div>
                <TopNav />
                <Product productID={productID} />
                <LatestOffer />
                <Footer />
              </div>}>
            </Route>
          </Routes>
        </Router>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
