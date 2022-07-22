import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Menu from "./pages/Menu";
import { useState } from "react";
import "./components/style.css";
import Login from "./pages/Login";
import { useEffect } from "react";
import axios from "axios";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cateogries, setCateogries] = useState([]);
  // calling Be
  useEffect(() => {
    const fetchData = async () => {
      const { data: catData } = await axios.get(
        "http://localhost:3000/categories"
      );
      setCateogries(catData);

      const { data: proData } = await axios.get(
        "http://localhost:3000/products"
      );
      setProducts(proData);
    };
    fetchData();
  }, []);

  const increment = (productName) => {
    let newProducts = [...products];
    let index = newProducts.findIndex((item) => item.name === productName);
    newProducts[index].number = newProducts[index].number + 1;
    setProducts(newProducts);
  };

  const decremnt = (productName) => {
    const newProducts = [...products];
    const index = newProducts.findIndex((x) => x.name === productName);
    if (newProducts[index].number > 0)
      newProducts[index].number = newProducts[index].number - 1;
    setProducts(newProducts);
  };

  const del = (product) => {
    const newProducts = [...products];

    const index = newProducts.filter((x) => x.name !== product);

    setProducts(index);
  };
  const reset = () => {
    let newProducts = [...products];
    newProducts = newProducts.map((x) => {
      return { ...x, number: 0 };
    });
    setProducts(newProducts);
  };
  const handleAddToCart = (productId) => {
    // clone
    let newProducts = [...products];
    // update
    let index = newProducts.findIndex((p) => p.id === productId);
    newProducts[index].isInCart = !newProducts[index].isInCart;
    newProducts[index].number = 1;
    setProducts(newProducts);
  };
  return (
    <>
      <Router>
        <Header />
        <div className="container" style={{ backgroundColor: "#eee" }}>
          <Routes>
            <Route
              path="/menu"
              element={
                <Menu
                  products={products}
                  cateogries={cateogries}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products.filter((x) => x.isInCart)}
                  Increment={increment}
                  decremnt={decremnt}
                  reset={reset}
                  del={del}
                />
              }
            />
            <Route path="/product/:name/:id" element={<ProductPage />} />
            <Route path="/about/*" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin products={products} />} />
            <Route path="/product/add" element={<AddProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
