import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Listings.css';

const Listings = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
       axios.get('http://127.0.0.1:8000/api/products/')
           .then(response => setProducts(response.data))
           .catch(error => console.error(error));
   }, []);

   return (
       <div className="listings">
           {products.map(product => (
               <Link key={product.id} to={`/product/${product.id}`} className="product-card">
                   <img src={product.image} alt={product.name} />
                   <h3>{product.name}</h3>
                   <p>${product.price}</p>
               </Link>
           ))}
       </div>
   );
};

export default Listings;
