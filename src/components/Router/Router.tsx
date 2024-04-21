import { FC, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../../pages/CatalogPage/CatalogPage'));
const BlogPage = lazy(() => import('../../pages/BlogPage/BlogPage'));
const ProductPage = lazy(() => import('../../pages/ProductPage/ProductPage'));
const WishlistPage = lazy(() => import('../../pages/WishlistPage/WishlistPage'));
const CartPage = lazy(() => import('../../pages/CartPage/CartPage'));
const CheckoutPage = lazy(() => import('../../pages/CheckoutPage/CheckoutPage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('../../pages/SignInPage/SignInPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'));
const BlogPostPage = lazy(() => import('../../pages/BlogPage/BlogPostPage/BlogPostPage'));

import Layout from '../Layout/Layout';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import ScrollToTop from '../ui/ScrollToTop/ScrollToTop';

import { RootState } from '../../store/store';
import { useAppSelector } from '../../hooks/redux';

const Router: FC = () => {
  const currentUser = useAppSelector((state: RootState) => state.userReducer.currentUser);
  const cartProducts = useAppSelector((state: RootState) => state.cartReducer.products);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<ProductPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostPage />} />

          {/* protected routes */}
          <Route element={<ProtectedRoute currentUser={currentUser} />}>
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/checkout"
              element={
                cartProducts && cartProducts.length ? <CheckoutPage /> : <Navigate to="/cart" />
              }
            />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/wishlist" element={<WishlistPage />} />
          </Route>

          <Route path="/signin" element={currentUser ? <Navigate to="/" /> : <SignInPage />} />
          <Route path="/signup" element={currentUser ? <Navigate to="/" /> : <SignUpPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
