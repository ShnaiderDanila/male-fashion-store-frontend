import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './sections/Header';
import Footer from './sections/Footer';
import Main from '../pages/Main';
import Catalog from '../pages/Catalog';

const App = () => {
  return (
    <div className="app text-primary font-nunito">
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
