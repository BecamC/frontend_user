import { useState } from 'react';
import { mockProducts, getCategories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Carta.css';

const Carta = () => {
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = mockProducts.filter(
    product => product.categoria === selectedCategory
  );

  return (
    <div className="carta-page">
      <div className="carta-header">
        <h1 className="carta-title">Nuestra Carta</h1>
      </div>

      <div className="carta-container">
        <div className="categories-sidebar">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          <h2 className="category-title">{selectedCategory}</h2>
          <div className="products-container">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carta;
