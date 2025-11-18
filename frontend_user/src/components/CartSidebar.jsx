import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartSidebar = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="bg-pardos-purple text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="font-spartan font-bold text-xl">MI ORDEN [{cart.length}]</h2>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-24 h-24 text-pardos-gray mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="text-gray-500 font-lato text-lg">Tu carrito está vacío</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/menu');
                }}
                className="mt-4 btn-secondary"
              >
                Ver menú
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="bg-pardos-cream rounded-lg p-4 shadow">
                  <div className="flex space-x-3">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-spartan font-bold text-sm text-pardos-dark">
                        {item.nombre}
                      </h3>
                      <p className="text-pardos-rust font-bold text-lg">
                        S/ {item.precio.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-pardos-brown hover:text-red-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-sm font-lato text-gray-600">Cantidad x{item.cantidad}</span>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.cantidad - 1)}
                        className="w-8 h-8 rounded-full bg-pardos-brown text-white flex items-center justify-center hover:bg-pardos-purple transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <span className="font-spartan font-bold text-lg w-8 text-center">
                        {item.cantidad}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.cantidad + 1)}
                        className="w-8 h-8 rounded-full bg-pardos-brown text-white flex items-center justify-center hover:bg-pardos-purple transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-lato text-gray-600">Subtotal:</span>
              <span className="font-spartan font-bold text-xl">
                S/ {getCartTotal().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-lg">
              <span className="font-spartan font-bold text-pardos-dark">Total general</span>
              <span className="font-spartan font-bold text-2xl text-pardos-rust">
                S/ {getCartTotal().toFixed(2)}
              </span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-pardos-rust hover:bg-pardos-brown text-white font-spartan font-bold py-4 rounded-full transition-colors text-lg"
            >
              PROCESAR COMPRA
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
