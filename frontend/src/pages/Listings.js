// // 


// import React, { useEffect, useState } from "react";

// const Listings = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("http://127.0.0.1:8000/api/products/")  // Fetch from Django API
//             .then(response => response.json())
//             .then(data => setProducts(data))
//             .catch(error => console.error("Error fetching products:", error));
//     }, []);

//     return (
//         <div>
//             <h2>Available Products</h2>
//             <ul>
//                 {products.map((product) => (
//                     <li key={product.id}>
//                         <h3>{product.name}</h3>
//                         <p>Price: ${product.price}</p>
//                         <p>{product.description}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Listings;



import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../styles/Listings.css";

const Listings = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/") // Adjust this to your backend URL
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    return (
        <div className="listings-container">
            <h2>Available Products</h2>
            <div className="product-list">
                {products.length > 0 ? (
                    products.map((product) => <ProductCard key={product.id} product={product} />)
                ) : (
                    <p>No products available.</p>
                )}
            </div>
        </div>
    );
};

export default Listings;
