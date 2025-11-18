import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ user, onLogout }) => {
  const { getCartCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="w-full px-4 lg:px-10 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={handleLogoClick}
            className="flex items-center space-x-5 cursor-pointer"
          >
            <div className="w-28 h-28 bg-white rounded-full overflow-hidden flex items-center justify-center shadow-xl">
              <img
                src="https://proyecto-final-20252.s3.us-east-1.amazonaws.com/logopollerianofondo.png"
                alt="Logo pollería"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="font-spartan font-bold text-3xl tracking-wide">
                PARDOS CHICKEN
              </h1>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link
              to="/home"
              className="font-spartan font-semibold text-3xl hover:text-pardos-yellow transition-colors"
            >
              SEDE
            </Link>
            <Link
              to="/menu"
              className="font-spartan font-semibold text-3xl hover:text-pardos-yellow transition-colors"
            >
              NUESTRA CARTA
            </Link>
            <button
              onClick={handleCartClick}
              className="font-spartan font-semibold text-3xl hover:text-pardos-yellow transition-colors"
            >
              MI ORDEN
            </button>
          </nav>

          {/* User / Cart */}
          <div className="flex items-center space-x-8">
            {/* Carrito más grande */}
            <button
              onClick={handleCartClick}
              className="relative p-4 hover:bg-pardos-brown/20 rounded-full transition-colors"
            >
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-pardos-orange text-white text-sm font-bold rounded-full w-7 h-7 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>

            {user ? (
              // Saludo arriba, botón abajo
              <div className="flex flex-col items-end space-y-2">
                <span className="hidden md:inline-block font-lato text-4xl">
                  Hola, <span className="font-bold">{user.nombre}</span>
                </span>
                <button
                  onClick={onLogout}
                  className="bg-pardos-purple hover:bg-pardos-brown text-white px-6 py-1 rounded-full font-spartan font-semibold text-2xl transition-colors"
                >
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-pardos-purple hover:bg-pardos-brown text-white px-8 py-3 rounded-full font-spartan font-semibold text-2xl transition-colors"
              >
                Iniciar sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
