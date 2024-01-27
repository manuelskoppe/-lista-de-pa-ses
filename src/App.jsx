// App.jsx

import './App.css';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CountriesPage } from './pages/CountriesPage';
import { CountryDetailPage } from './pages/CountryDetailPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<HomePage />} />
        <Route path="countries" element={<CountriesPage />} />
        <Route path="countries/:id" element={<CountryDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
