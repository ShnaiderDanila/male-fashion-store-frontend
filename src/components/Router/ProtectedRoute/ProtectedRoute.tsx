import { FC } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { TUser } from '../../../types/entities/user-entity';

interface ProtectedRouteProps {
  currentUser: TUser | null;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ currentUser }) => {
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to={'/signin'} state={{ from: location }} replace={true} />
  );
};

export default ProtectedRoute;
