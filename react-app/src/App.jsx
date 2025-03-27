import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './authContext'; // Import the AuthProvider
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <AuthProvider> {/* Wrap your routes in AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
