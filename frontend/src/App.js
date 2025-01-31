import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing";
import About from "./pages/About";
import Listings from "./pages/Listings";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/listings" element={<Listings />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
