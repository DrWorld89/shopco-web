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
import ProductDetail from './components/Product/ProductDetail';
import ProductMore from './components/Product/ProductMore';
import { ProductMoreContext } from './context/ProductMoreContext';
import Cart from './components/Cart/Cart';
import { EmptyCartContext } from './context/EmptyCartContext';
import { ProductDetailContext } from './context/ProductDetailContext'
import { CartProvider } from './context/CartContext';


function App() {


  const [productID, setProductID] = useState(() => {
    const savedID = localStorage.getItem('productID');
    return savedID;
  })

  const [productMore, setProductMore] = useState(() => {
    const savedProducts = localStorage.getItem('productMore');
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  console.log(productMore);

  const [emptyCart, setEmptyCart] = useState(true)

  const [productDetail, setProductDetail] = useState([])

  return (
    <div className="App">
      <ProductContext.Provider value={{ productID, setProductID }}>
        <ProductMoreContext.Provider value={{ productMore, setProductMore }}>
          <EmptyCartContext.Provider value={{ emptyCart, setEmptyCart }}>
            <ProductDetailContext.Provider value={{ productDetail, setProductDetail }}>
              <CartProvider>
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
                        <ProductDetail />
                        <ProductMore productMore={productMore} />
                        <LatestOffer />
                        <Footer />
                      </div>}>
                    </Route>
                    <Route path='/cart'
                      element={<div>
                        <TopNav />
                        <Cart emptyCart={emptyCart} productDetail={productDetail} />
                        <LatestOffer />
                        <Footer />
                      </div>}>
                    </Route>
                  </Routes>
                </Router>
              </CartProvider>
            </ProductDetailContext.Provider>
          </EmptyCartContext.Provider>
        </ProductMoreContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
