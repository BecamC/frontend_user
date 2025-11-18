import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    // Simulación de registro
    onLogin({
      email: formData.email,
      nombre: formData.nombre,
    });
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pardos-cream via-white to-pardos-cream flex items-center justify-center p-15">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-20 items-center">
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

        {/* Right Side - Register Form */}
        <div className="bg-pardos-rust rounded-[2.7rem] p-10 shadow-2xl w-full max-w-3xl mx-auto">
          <h2 className="text-white font-spartan font-bold text-4xl mb-8 text-center">
            Crea tu cuenta:
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="text-white font-spartan font-bold text-sm mb-3 block">
                NOMBRE
              </label>
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-8 py-5 rounded-full font-lato text-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange"
                required
              />
            </div>

            <div>
              <label className="text-white font-spartan font-bold text-sm mb-3 block">
                APELLIDO
              </label>
              <input
                type="text"
                name="apellido"
                placeholder="Tu apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full px-8 py-5 rounded-full font-lato text-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange"
                required
              />
            </div>

            <div>
              <label className="text-white font-spartan font-bold text-sm mb-3 block">
                CORREO ELECTRÓNICO
              </label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-8 py-5 rounded-full font-lato text-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange"
                required
              />
            </div>

            <div>
              <label className="text-white font-spartan font-bold text-sm mb-3 block">
                CONTRASEÑA
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-8 py-5 rounded-full font-lato text-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange pr-16"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 hover:text-white"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div>
              <label className="text-white font-spartan font-bold text-sm mb-3 block">
                CONFIRMAR CONTRASEÑA
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Contraseña"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-8 py-5 rounded-full font-lato text-lg text-gray-700 focus:outline-none focus:ring-4 focus:ring-pardos-orange pr-16"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-200 hover:text-white"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showConfirmPassword ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268-2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-pardos-brown hover:bg-pardos-purple text-white font-spartan font-bold py-6 text-2xl rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg mt-8"
            >
              Crear cuenta
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-white font-lato text-base">
              Ya tienes cuenta?{' '}
              <Link 
                to="/login" 
                className="text-pardos-yellow hover:text-pardos-orange font-bold underline transition-colors"
              >
                INICIA SESIÓN AQUÍ
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;
