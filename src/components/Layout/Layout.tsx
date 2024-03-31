import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Suspense } from 'react';
import Preloader from '../ui/Preloader/Preloader';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Preloader isLoading={true} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
