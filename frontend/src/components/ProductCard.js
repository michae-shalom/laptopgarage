import React from "react";
import "../styles/ProductCard.css";
import { FaShoppingCart, FaWhatsapp, FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        console.log(`Added ${product.name} to cart`);
    };

    const handleWhatsAppChat = () => {
        const whatsappUrl = `https://wa.me/+1234567890?text=Hello, I'm interested in ${product.name}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleOnsiteChat = () => {
        console.log(`Started chat about ${product.name}`);
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>
            <Link to={`/product/${product.id}`}>
                <button className="view-btn">View Description</button>
            </Link>
            <div className="icons">
                <FaShoppingCart className="icon cart" onClick={handleAddToCart} />
                <FaWhatsapp className="icon whatsapp" onClick={handleWhatsAppChat} />
                <FaCommentDots className="icon chat" onClick={handleOnsiteChat} />
            </div>
        </div>
    );
};

export default ProductCard;
