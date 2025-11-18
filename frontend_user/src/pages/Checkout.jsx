import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [deliveryInfo, setDeliveryInfo] = useState({
    numero: '350',
    calle: 'Avenida Sergio Bernales',
    ciudad: 'Lima',
    distrito: 'Surquillo',
    telefono: '951595115',
    referencia: '',
  });

  const handleInputChange = (e) => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmarCompra = () => {
    // Aquí conectarías con tu API para procesar el pedido
    alert('¡Pedido confirmado! Gracias por tu compra.');
    clearCart();
    navigate('/home');
  };

  const handleVolver = () => {
    navigate('/menu');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-pardos-cream flex items-center justify-center">
        <div className="text-center">
          <svg className="w-32 h-32 text-pardos-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="font-spartan font-bold text-3xl text-pardos-dark mb-4">
            Tu carrito está vacío
          </h2>
          <button
            onClick={() => navigate('/menu')}
            className="btn-primary"
          >
            Ver menú
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pardos-cream py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center space-x-2 text-sm font-lato">
          <button onClick={handleVolver} className="text-pardos-rust hover:text-pardos-brown font-medium">
            ← Volver
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-pardos-dark font-bold">Mi Orden</span>
          <span className="text-gray-400">/</span>
          <span className="text-pardos-rust font-bold">CHECKOUT</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Delivery Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="font-spartan font-bold text-3xl text-pardos-dark mb-6">
                DIRECCIÓN DE ENTREGA
              </h2>
              
              <button className="text-pardos-rust hover:text-pardos-brown font-lato text-sm mb-6 font-medium">
                Cambiar mi dirección de entrega
              </button>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="numero"
                  value={deliveryInfo.numero}
                  onChange={handleInputChange}
                  placeholder="Número"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust"
                />
                <input
                  type="text"
                  name="calle"
                  value={deliveryInfo.calle}
                  onChange={handleInputChange}
                  placeholder="Calle"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust"
                />
                <input
                  type="text"
                  name="ciudad"
                  value={deliveryInfo.ciudad}
                  onChange={handleInputChange}
                  placeholder="Ciudad"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust"
                />
                <input
                  type="text"
                  name="distrito"
                  value={deliveryInfo.distrito}
                  onChange={handleInputChange}
                  placeholder="Distrito"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust"
                />
                <input
                  type="tel"
                  name="telefono"
                  value={deliveryInfo.telefono}
                  onChange={handleInputChange}
                  placeholder="Teléfono"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust md:col-span-2"
                />
                <input
                  type="text"
                  name="referencia"
                  value={deliveryInfo.referencia}
                  onChange={handleInputChange}
                  placeholder="Referencia (Opcional)"
                  className="px-4 py-3 bg-pardos-cream rounded-lg font-lato focus:outline-none focus:ring-2 focus:ring-pardos-rust md:col-span-2"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h2 className="font-spartan font-bold text-2xl text-pardos-dark mb-6">
                RESUMEN DE PEDIDO [1]
              </h2>

              <button className="text-pardos-rust hover:text-pardos-brown font-lato text-sm mb-6 font-medium">
                Editar pedido
              </button>

              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex items-start space-x-3">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-spartan font-bold text-sm text-pardos-dark line-clamp-2">
                        {item.nombre}
                      </h3>
                      <p className="text-xs font-lato text-gray-600 mt-1">
                        Cantidad x{item.cantidad}
                      </p>
                      <p className="text-pardos-rust font-bold mt-1">
                        S/ {(item.precio * item.cantidad).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between font-lato text-gray-600">
                  <span>Subtotal:</span>
                  <span className="font-bold">S/ {getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-spartan font-bold text-lg text-pardos-dark">
                  <span>Total general</span>
                  <span className="text-pardos-rust text-2xl">
                    S/ {getCartTotal().toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={handleConfirmarCompra}
                className="w-full mt-6 bg-pardos-purple hover:bg-pardos-brown text-white font-spartan font-bold py-4 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                CONFIRMAR COMPRA S/{getCartTotal().toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
