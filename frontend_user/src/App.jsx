import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Checkout from './pages/Checkout';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Verificar si hay un usuario guardado en localStorage
    const savedUser = localStorage.getItem('pardos-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('pardos-user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('pardos-user');
    localStorage.removeItem('pardos-cart');
  };

  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen bg-pardos-cream">
          {user && <Header user={user} onLogout={handleLogout} />}
          <CartSidebar />
          
          <Routes>
            <Route 
              path="/" 
              element={user ? <Navigate to="/home" /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login onLogin={handleLogin} /> : <Navigate to="/home" />} 
            />
            <Route 
              path="/register" 
              element={!user ? <Register onLogin={handleLogin} /> : <Navigate to="/home" />} 
            />
            <Route 
              path="/home" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/menu" 
              element={user ? <Menu /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/checkout" 
              element={user ? <Checkout /> : <Navigate to="/login" />} 
            />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
