import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Orden.css';

const Orden = () => {
  const { cart, updateQuantity, removeFromCart, getTotal } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Tu carrito está vacío');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="orden-page">
        <div className="empty-cart">
          <h2>Tu orden está vacía</h2>
          <p>Agrega productos desde nuestra carta</p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/carta')}
          >
            Ver Carta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="orden-page">
      <div className="orden-container">
        <h1 className="orden-title">MI ORDEN</h1>

        <div className="orden-content">
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imagen} alt={item.nombre} className="item-image" />
                
                <div className="item-details">
                  <h3 className="item-name">{item.nombre}</h3>
                  <p className="item-price">S/ {item.precio.toFixed(2)}</p>
                </div>

                <div className="item-quantity">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className="qty-display">x{item.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="btn-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Eliminar"
                >
                  🗑️
                </button>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Resumen de Pedido</h3>
            
            <div className="summary-line">
              <span>Subtotal:</span>
              <span>S/ {getTotal().toFixed(2)}</span>
            </div>

            <div className="summary-line total">
              <span>Total general</span>
              <span>S/ {getTotal().toFixed(2)}</span>
            </div>

            <button 
              className="btn-primary btn-checkout"
              onClick={handleCheckout}
            >
              PROCESAR COMPRA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orden;
