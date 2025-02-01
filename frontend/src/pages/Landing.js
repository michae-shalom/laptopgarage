import { Link } from 'react-router-dom';
import '../styles/Landing.css';

const Landing = () => {
    return (
        <div className="landing">
            <h1>Welcome to LaptopGarage</h1>
            <p>Your one-stop shop for the best electronics!</p>
            <Link to="/listings" className="btn">Shop Now</Link>
        </div>
    );
};

export default Landing;
