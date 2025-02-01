import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetail.css";

function ProductDetail() {
    const { id } = useParams(); // Get product ID from URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}/`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Price: ${product.price}</p>
            <button className="button">Add to Cart</button>
        </div>
    );
}

export default ProductDetail;
