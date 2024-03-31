import { useCallback, useEffect, useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { userAPI } from '../utils/api/services/UserService';

import { userSignIn } from '../store/slices/UserSlice';
import { useAppDispatch } from '../hooks/redux';

import Preloader from './ui/Preloader/Preloader';
import Router from './Router/Router';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getCurrentUser] = userAPI.useLazyGetCurrentUserQuery();
  const dispatch = useAppDispatch();

  const getUser = useCallback(async () => {
    if (localStorage.getItem('token')) {
      try {
        const user = await getCurrentUser();
        if (user.data) {
          dispatch(userSignIn(user.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, [dispatch, getCurrentUser]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoading) {
    return <Preloader isLoading={isLoading} />;
  }

  return (
    <div
      className="app text-primary font-nunito scroll flex flex-col h-screen"
      style={{ wordBreak: 'break-word' }}
    >
      <Router />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
        pauseOnHover={false}
        transition={Slide}
      />
    </div>
  );
};

export default App;
