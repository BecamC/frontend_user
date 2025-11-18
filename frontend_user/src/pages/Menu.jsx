import { useState } from 'react';
import { productos, categorias } from '../data/productos';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('Promociones');
  const { addToCart } = useCart();

  const productosFiltrados = productos.filter(
    producto => producto.categoria === selectedCategory
  );

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  return (
    <div className="min-h-screen bg-pardos-cream">
      {/* Hero Banner */}
      <div className="bg-pardos-brown py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-spartan font-black text-white text-4xl md:text-5xl text-center">
            NUESTRA CARTA
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-4 sticky top-24">
              <h2 className="font-spartan font-bold text-xl text-pardos-dark mb-4 px-2">
                Categorías
              </h2>
              <nav className="space-y-2">
                {categorias.map(categoria => (
                  <button
                    key={categoria}
                    onClick={() => setSelectedCategory(categoria)}
                    className={`w-full text-left px-4 py-3 rounded-xl font-spartan font-medium transition-all duration-300 ${
                      selectedCategory === categoria
                        ? 'bg-pardos-rust text-white shadow-md'
                        : 'text-pardos-dark hover:bg-pardos-cream'
                    }`}
                  >
                    {categoria}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content - Products */}
          <main className="flex-1">
            {/* Category Header */}
            <div className="mb-6">
              <h2 className="font-spartan font-black text-3xl md:text-4xl text-pardos-dark">
                {selectedCategory}
              </h2>
              <div className="h-1 w-32 bg-pardos-yellow mt-2" />
              <p className="text-gray-600 font-lato mt-2">
                {productosFiltrados.length} productos disponibles
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {productosFiltrados.map(producto => (
                <div
                  key={producto.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {producto.subcategoria && (
                      <span className="absolute top-3 right-3 bg-pardos-yellow text-pardos-dark px-3 py-1 rounded-full text-xs font-spartan font-bold">
                        {producto.subcategoria}
                      </span>
                    )}
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-spartan font-bold text-lg text-pardos-dark mb-2 line-clamp-2">
                      {producto.nombre}
                    </h3>
                    
                    {producto.descripcion && (
                      <p className="text-gray-600 font-lato text-sm mb-4 line-clamp-2">
                        {producto.descripcion}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="font-spartan font-black text-2xl text-pardos-rust">
                        S/ {producto.precio.toFixed(2)}
                      </span>
                      
                      <button
                        onClick={() => handleAddToCart(producto)}
                        className="bg-pardos-rust hover:bg-pardos-brown text-white px-5 py-2 rounded-full font-spartan font-bold text-sm transition-all duration-300 transform hover:scale-105"
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {productosFiltrados.length === 0 && (
              <div className="text-center py-20">
                <svg className="w-24 h-24 text-pardos-gray mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500 font-lato text-xl">
                  No hay productos disponibles en esta categoría
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Menu;
