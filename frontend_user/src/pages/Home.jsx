import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSedeSelection = (sede) => {
    // Guardar la sede seleccionada
    localStorage.setItem('sede-seleccionada', sede);
    navigate('/menu');
  };

  return (
    <div
      className="relative bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url(https://images-frontent-user-pardos.s3.us-east-1.amazonaws.com/fondo_pollo_sede.png)',
        // ↓ antes era 90px, ahora recortamos un poco más
        height: 'calc(97vh - 111px)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="text-center mb-16">
          <h1 className="font-pacifico text-white text-6xl md:text-7xl mb-4 drop-shadow-lg">
            Seleccionar sede
          </h1>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Sede 1 */}
          <button
            onClick={() => handleSedeSelection('SEDE 1')}
            className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pardos-orange to-pardos-rust opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-16 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-12 h-12 text-pardos-rust"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="font-spartan font-black text-white text-5xl mb-2">
                SEDE 1
              </h2>
              <p className="text-white font-lato text-lg">San Isidro, Lima</p>
            </div>
          </button>

          {/* Sede 2 */}
          <button
            onClick={() => handleSedeSelection('SEDE 2')}
            className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pardos-yellow to-pardos-orange opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="relative p-16 flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-12 h-12 text-pardos-rust"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h2 className="font-spartan font-black text-white text-5xl mb-2">
                SEDE 2
              </h2>
              <p className="text-white font-lato text-lg">
                Miraflores, Lima
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
