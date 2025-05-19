import { useNavigate } from 'react-router-dom';
import { useCart } from './Cartcontext';

const products = [
    { id: 1, name: "iPhone 15", price: 1200 },
    { id: 2, name: "Samsung S24", price: 1000 },
];

function ProductList() {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const handleProductClick = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    return (
        <div>
            <h2>Products</h2>
            {products.map(product => (
                <div key={product.id} onClick={() => handleProductClick(product)} style={{ cursor: 'pointer' }}>
                    <h4>{product.name}</h4>
                    <p>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
