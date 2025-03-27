import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import RegisterPage from './pages/RegisterPage'; 



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
