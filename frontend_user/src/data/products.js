// Mock data para los productos de Pardos Chicken
export const mockProducts = [
  // ===================== PROMOCIONES =====================
  {
    id: 1,
    categoria: "Promociones",
    subcategoria: null,
    nombre: "1/4 Pollo + Papas Fritas",
    descripcion: "1/4 de pollo a la brasa + papas fritas personales.",
    precio: 18.90,
    imagen: "https://via.placeholder.com/400x300/8B1A1A/ffffff?text=1/4+Pollo"
  },
  {
    id: 2,
    categoria: "Promociones",
    subcategoria: null,
    nombre: "1/2 Pollo + Papas Fritas",
    descripcion: "1/2 pollo a la brasa + papas fritas familiares.",
    precio: 35.90,
    imagen: "https://via.placeholder.com/400x300/8B1A1A/ffffff?text=1/2+Pollo"
  },
  {
    id: 3,
    categoria: "Promociones",
    subcategoria: null,
    nombre: "Pollo Entero + Papas Fritas",
    descripcion: "1 pollo entero a la brasa + papas fritas familiares.",
    precio: 65.90,
    imagen: "https://via.placeholder.com/400x300/8B1A1A/ffffff?text=Pollo+Entero"
  },
  
  // ===================== PARDOS BRASA =====================
  {
    id: 10,
    categoria: "Pardos Brasa",
    subcategoria: null,
    nombre: "1/4 Pollo a la Brasa",
    descripcion: "1/4 de pollo a la brasa. Incluye papas fritas y ensalada.",
    precio: 22.90,
    imagen: "https://via.placeholder.com/400x300/B34726/ffffff?text=1/4+Brasa"
  },
  {
    id: 11,
    categoria: "Pardos Brasa",
    subcategoria: null,
    nombre: "1/2 Pollo a la Brasa",
    descripcion: "1/2 pollo a la brasa. Incluye papas fritas y ensalada.",
    precio: 42.90,
    imagen: "https://via.placeholder.com/400x300/B34726/ffffff?text=1/2+Brasa"
  },
  {
    id: 12,
    categoria: "Pardos Brasa",
    subcategoria: null,
    nombre: "3/4 Pollo a la Brasa",
    descripcion: "3/4 de pollo a la brasa. Incluye papas fritas y ensalada.",
    precio: 59.90,
    imagen: "https://via.placeholder.com/400x300/B34726/ffffff?text=3/4+Brasa"
  },
  {
    id: 13,
    categoria: "Pardos Brasa",
    subcategoria: null,
    nombre: "Pollo Entero a la Brasa",
    descripcion: "1 pollo entero a la brasa. Incluye papas fritas y ensalada.",
    precio: 75.90,
    imagen: "https://via.placeholder.com/400x300/B34726/ffffff?text=Pollo+Entero"
  },

  // ===================== PARDOS PARRILLEROS =====================
  {
    id: 20,
    categoria: "Pardos Parrilleros",
    subcategoria: "Anticuchos",
    nombre: "Anticucho Personal (2 palos)",
    descripcion: "2 palos de anticucho con papa y choclo.",
    precio: 24.90,
    imagen: "https://via.placeholder.com/400x300/4C1F2F/ffffff?text=Anticucho+Personal"
  },
  {
    id: 21,
    categoria: "Pardos Parrilleros",
    subcategoria: "Anticuchos",
    nombre: "Anticucho Familiar (4 palos)",
    descripcion: "4 palos de anticucho con papa y choclo.",
    precio: 45.90,
    imagen: "https://via.placeholder.com/400x300/4C1F2F/ffffff?text=Anticucho+Familiar"
  },
  {
    id: 22,
    categoria: "Pardos Parrilleros",
    subcategoria: "Parrillas",
    nombre: "Parrilla Personal",
    descripcion: "Pollo, chorizo, anticucho, mollejitas, papas y ensalada.",
    precio: 32.90,
    imagen: "https://via.placeholder.com/400x300/4C1F2F/ffffff?text=Parrilla+Personal"
  },
  {
    id: 23,
    categoria: "Pardos Parrilleros",
    subcategoria: "Parrillas",
    nombre: "Parrilla Familiar",
    descripcion: "Pollo, chorizo, anticucho, mollejitas, papas y ensalada para 2-3 personas.",
    precio: 89.90,
    imagen: "https://via.placeholder.com/400x300/4C1F2F/ffffff?text=Parrilla+Familiar"
  },

  // ===================== SÁNGUCHES =====================
  {
    id: 30,
    categoria: "Sánguches",
    subcategoria: null,
    nombre: "Sánguche de Pollo",
    descripcion: "Pan artesanal con pechuga de pollo, lechuga, tomate y mayonesa.",
    precio: 16.90,
    imagen: "https://via.placeholder.com/400x300/F67C1F/ffffff?text=Sanguche+Pollo"
  },
  {
    id: 31,
    categoria: "Sánguches",
    subcategoria: null,
    nombre: "Sánguche de Chicharrón",
    descripcion: "Pan artesanal con chicharrón, camote frito y salsa criolla.",
    precio: 18.90,
    imagen: "https://via.placeholder.com/400x300/F67C1F/ffffff?text=Sanguche+Chicharron"
  },
  {
    id: 32,
    categoria: "Sánguches",
    subcategoria: null,
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne de res, queso cheddar, lechuga, tomate, cebolla y salsas.",
    precio: 22.90,
    imagen: "https://via.placeholder.com/400x300/F67C1F/ffffff?text=Hamburguesa"
  },

  // ===================== ADICIONALES =====================
  {
    id: 40,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Porción de Arroz",
    descripcion: "Porción de arroz.",
    precio: 8.50,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Arroz"
  },
  {
    id: 41,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Palo de anticucho",
    descripcion: "Un palo de anticucho, no incluye choclo ni papa. Este producto incluye salsas.",
    precio: 12.90,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Anticucho"
  },
  {
    id: 42,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Tequeño Brasa x3",
    descripcion: "3 tequeños brasa rellenos de Pardos Brasa más guacamole.",
    precio: 13.50,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Tequenos+x3"
  },
  {
    id: 43,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Tequeño Brasa x6",
    descripcion: "6 Tequeños Brasa + salsa guacamole.",
    precio: 20.50,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Tequenos+x6"
  },
  {
    id: 44,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Piqueo Mini Pollitos Panko x 6",
    descripcion: "6 unidades de Mini Pollitos Panko + salsa Honey Mustard.",
    precio: 15.50,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Pollitos+x6"
  },
  {
    id: 45,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Piqueo Chicharrón de pollo x6",
    descripcion: "6 unidades de Chicharrón + salsa Honey Mustard.",
    precio: 22.90,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Chicharron+x6"
  },
  {
    id: 46,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Piqueo Mini Pollitos Panko x 12",
    descripcion: "12 unidades de Mini Pollitos Panko + salsa Honey Mustard.",
    precio: 22.90,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Pollitos+x12"
  },
  {
    id: 47,
    categoria: "Adicionales",
    subcategoria: null,
    nombre: "Piqueo Chicharrón de pollo x12",
    descripcion: "12 unidades de Chicharrón + salsa Honey Mustard.",
    precio: 35.90,
    imagen: "https://via.placeholder.com/400x300/6C7A3F/ffffff?text=Chicharron+x12"
  },

  // ===================== BEBIDAS =====================
  {
    id: 50,
    categoria: "Bebidas",
    subcategoria: null,
    nombre: "Inca Kola 500ml",
    descripcion: "Inca Kola personal 500ml.",
    precio: 5.50,
    imagen: "https://via.placeholder.com/400x300/F2B10C/000000?text=Inca+Kola"
  },
  {
    id: 51,
    categoria: "Bebidas",
    subcategoria: null,
    nombre: "Coca Cola 500ml",
    descripcion: "Coca Cola personal 500ml.",
    precio: 5.50,
    imagen: "https://via.placeholder.com/400x300/F2B10C/000000?text=Coca+Cola"
  },
  {
    id: 52,
    categoria: "Bebidas",
    subcategoria: null,
    nombre: "Chicha Morada 1L",
    descripcion: "Chicha morada artesanal 1 litro.",
    precio: 12.90,
    imagen: "https://via.placeholder.com/400x300/F2B10C/000000?text=Chicha+Morada"
  }
];

// Función para obtener categorías únicas
export const getCategories = () => {
  const categories = [...new Set(mockProducts.map(p => p.categoria))];
  return categories;
};

// Función para obtener productos por categoría
export const getProductsByCategory = (category) => {
  return mockProducts.filter(p => p.categoria === category);
};
