// 🔌 Configuración de Endpoints API
// Basado en tu arquitectura AWS

// ============================================
// 📍 ENDPOINTS DEL BACKEND (API Gateway)
// ============================================

// Base URL del API Gateway (reemplaza con tu URL real de AWS)
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://tu-api-gateway.execute-api.us-east-1.amazonaws.com/prod';

export const API_ENDPOINTS = {
  
  // 👤 AUTENTICACIÓN (Cognito via API Gateway)
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,           // POST - Login de usuario
    REGISTER: `${API_BASE_URL}/auth/register`,     // POST - Registro de usuario
    LOGOUT: `${API_BASE_URL}/auth/logout`,         // POST - Cerrar sesión
    REFRESH: `${API_BASE_URL}/auth/refresh`,       // POST - Refrescar token
    VERIFY: `${API_BASE_URL}/auth/verify`,         // POST - Verificar email
  },

  // 🍽️ PRODUCTOS (DynamoDB via Lambda)
  PRODUCTS: {
    GET_ALL: `${API_BASE_URL}/products`,                        // GET - Obtener todos los productos
    GET_BY_CATEGORY: `${API_BASE_URL}/products/category`,       // GET - Filtrar por categoría
    GET_BY_ID: (id) => `${API_BASE_URL}/products/${id}`,       // GET - Obtener un producto
    CREATE: `${API_BASE_URL}/products`,                         // POST - Crear producto (admin)
    UPDATE: (id) => `${API_BASE_URL}/products/${id}`,          // PUT - Actualizar producto (admin)
    DELETE: (id) => `${API_BASE_URL}/products/${id}`,          // DELETE - Eliminar producto (admin)
  },

  // 📂 CATEGORÍAS
  CATEGORIES: {
    GET_ALL: `${API_BASE_URL}/categories`,                      // GET - Obtener todas las categorías
  },

  // 🛒 CARRITO (DynamoDB via Lambda)
  CART: {
    GET: `${API_BASE_URL}/cart`,                                // GET - Obtener carrito del usuario
    ADD_ITEM: `${API_BASE_URL}/cart/items`,                     // POST - Agregar item al carrito
    UPDATE_ITEM: (itemId) => `${API_BASE_URL}/cart/items/${itemId}`, // PUT - Actualizar cantidad
    REMOVE_ITEM: (itemId) => `${API_BASE_URL}/cart/items/${itemId}`, // DELETE - Eliminar item
    CLEAR: `${API_BASE_URL}/cart`,                              // DELETE - Vaciar carrito
  },

  // 📦 ÓRDENES (DynamoDB via Lambda)
  ORDERS: {
    CREATE: `${API_BASE_URL}/orders`,                           // POST - Crear orden
    GET_ALL: `${API_BASE_URL}/orders`,                          // GET - Obtener órdenes del usuario
    GET_BY_ID: (id) => `${API_BASE_URL}/orders/${id}`,        // GET - Obtener una orden
    UPDATE_STATUS: (id) => `${API_BASE_URL}/orders/${id}/status`, // PUT - Actualizar estado (admin)
    CANCEL: (id) => `${API_BASE_URL}/orders/${id}/cancel`,    // POST - Cancelar orden
  },

  // 📍 SEDES (DynamoDB via Lambda)
  LOCATIONS: {
    GET_ALL: `${API_BASE_URL}/locations`,                       // GET - Obtener todas las sedes
    GET_BY_ID: (id) => `${API_BASE_URL}/locations/${id}`,     // GET - Obtener una sede
  },

  // 👤 USUARIO (Cognito + DynamoDB via Lambda)
  USER: {
    GET_PROFILE: `${API_BASE_URL}/user/profile`,               // GET - Obtener perfil
    UPDATE_PROFILE: `${API_BASE_URL}/user/profile`,            // PUT - Actualizar perfil
    GET_ADDRESSES: `${API_BASE_URL}/user/addresses`,           // GET - Obtener direcciones
    ADD_ADDRESS: `${API_BASE_URL}/user/addresses`,             // POST - Agregar dirección
    UPDATE_ADDRESS: (id) => `${API_BASE_URL}/user/addresses/${id}`, // PUT - Actualizar dirección
    DELETE_ADDRESS: (id) => `${API_BASE_URL}/user/addresses/${id}`, // DELETE - Eliminar dirección
  },

  // 🖼️ IMÁGENES (S3 via CloudFront)
  IMAGES: {
    BASE_URL: 'https://tu-distribucion.cloudfront.net',        // URL de CloudFront
    PRODUCTS: 'https://tu-distribucion.cloudfront.net/products', // Imágenes de productos
    BANNERS: 'https://tu-distribucion.cloudfront.net/banners',  // Banners/Hero images
    LOGOS: 'https://tu-distribucion.cloudfront.net/logos',      // Logos
  },
};

// ============================================
// 🔧 CONFIGURACIÓN DE HEADERS
// ============================================

export const getAuthHeaders = () => {
  const token = localStorage.getItem('pardos-auth-token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
};

export const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

// ============================================
// 📝 EJEMPLO DE USO EN COMPONENTES
// ============================================

/*
import { API_ENDPOINTS, getAuthHeaders } from '../config/api';

// Ejemplo 1: Login
const handleLogin = async (email, password) => {
  try {
    const response = await fetch(API_ENDPOINTS.AUTH.LOGIN, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    localStorage.setItem('pardos-auth-token', data.token);
    return data;
  } catch (error) {
    console.error('Error en login:', error);
  }
};

// Ejemplo 2: Obtener productos por categoría
const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(
      `${API_ENDPOINTS.PRODUCTS.GET_BY_CATEGORY}?category=${category}`,
      {
        method: 'GET',
        headers: getHeaders(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error obteniendo productos:', error);
  }
};

// Ejemplo 3: Crear orden
const createOrder = async (orderData) => {
  try {
    const response = await fetch(API_ENDPOINTS.ORDERS.CREATE, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(orderData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error creando orden:', error);
  }
};

// Ejemplo 4: Agregar al carrito
const addToCart = async (productId, quantity) => {
  try {
    const response = await fetch(API_ENDPOINTS.CART.ADD_ITEM, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify({ productId, quantity })
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error agregando al carrito:', error);
  }
};
*/

export default API_ENDPOINTS;
