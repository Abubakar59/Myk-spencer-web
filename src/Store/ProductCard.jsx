import { useNavigate } from "react-router-dom";
import { useCart } from "../store/cartStore";   // adjust path if needed

export default function ProductCard({ product }) {
  const add = useCart((s) => s.add);
  const navigate = useNavigate();

  const handleClick = () => {
    add(product);          // 1️⃣ put product in cart
    navigate("/cart");     // 2️⃣ jump to cart page
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {/* your existing product UI */}
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}
