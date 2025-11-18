import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.nombre}</h3>
        <p className="product-description">{product.descripcion}</p>
        
        <div className="product-footer">
          <span className="product-price">S/ {product.precio.toFixed(2)}</span>
          <button 
            className="btn-add-cart"
            onClick={handleAddToCart}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
