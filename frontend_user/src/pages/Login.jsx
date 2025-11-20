import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginAPI, saveAuthData } from '../config/api';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setLoading(true);
    setError('');

    try {
      // 🔌 CONEXIÓN CON API REAL - CLIENTE
      const data = await loginAPI(email, password, 'client');
      
      // Verificar que el usuario sea cliente
      if (data.user.user_type !== 'cliente') {
        throw new Error('Acceso denegado. Este portal es solo para clientes.');
      }

      const userData = {
        email: data.user.email,
        nombre: data.user.name || data.user.email.split('@')[0],
        rol: 'cliente',
        id: data.user.user_id,
        user_type: data.user.user_type,
        is_verified: data.user.is_verified
      };

      // Guardar token y datos en localStorage
      saveAuthData(data.token, userData);
      
      onLogin(userData);
      navigate('/home');

    } catch (err) {
      console.error('Error en login:', err);
      
      if (err.message.includes('Credenciales inválidas')) {
        setError('Email o contraseña incorrectos. Verifica tus credenciales.');
      } else if (err.message.includes('Acceso denegado')) {
        setError('No tienes permisos para acceder a este portal.');
      } else if (err.message.includes('Cuenta desactivada')) {
        setError('Tu cuenta está desactivada. Contacta al administrador.');
      } else {
        setError(err.message || 'Error al iniciar sesión. Intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pardos-cream via-white to-pardos-cream flex items-center justify-center p-10">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Logo & Tagline */}
        <div className="flex flex-col items-center justify-center space-y-10 p-10">
          <div className="w-80 h-80 rounded-full overflow-hidden flex items-center justify-center shadow-2xl bg-black/10">
            <img
              src="https://proyecto-final-20252.s3.us-east-1.amazonaws.com/logopollerianofondo.png"
              alt="Logo pollería"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <h1 className="font-spartan font-black text-4xl mb-3 border-t-4 border-b-4 border-black py-3 tracking-wide">
              A BRASA LO NUESTRO
            </h1>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-pardos-purple rounded-[2.7rem] p-12 shadow-2xl">
          <h2 className="text-white font-spartan font-bold text-5xl mb-10 text-center">
            ¡Bienvenido de nuevo!
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-8 py-6 rounded-full font-lato text-xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange"
                required
                disabled={loading}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-8 py-6 rounded-full font-lato text-xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange pr-16"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 hover:text-white"
                disabled={loading}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  )}
                </svg>
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-pardos-rust hover:bg-pardos-brown text-white font-spartan font-bold py-6 text-2xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !email || !password}
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </div>
              ) : (
                'Iniciar sesión'
              )}
            </button>
          </form>

          {error && (
            <p className="text-center text-red-200 text-lg mt-6 font-lato bg-red-500/20 py-3 px-4 rounded-lg">
              ⚠️ {error}
            </p>
          )}

          <div className="mt-8 text-center">
            <p className="text-white font-lato text-lg">
              No tienes cuenta?{' '}
              <Link 
                to="/register" 
                className="text-pardos-yellow hover:text-pardos-orange font-bold underline transition-colors"
              >
                REGÍSTRATE AQUÍ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;