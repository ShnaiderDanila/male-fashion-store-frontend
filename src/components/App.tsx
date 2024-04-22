import { useCallback, useEffect, useState } from 'react';
import { Slide, ToastContainer } from 'react-toastify';
import { userAPI } from '../utils/api/services/UserService';

import { updateUser } from '../store/slices/userSlice.ts';
import { useAppDispatch } from '../hooks/redux';

import Preloader from './ui/Preloader/Preloader';
import Router from './Router/Router';

import 'react-toastify/dist/ReactToastify.css';
import { setCartState } from '../store/slices/cartSlice';
import { getLocalStorageItem } from '../utils/functions/localStorageItem';

import aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [getCurrentUser] = userAPI.useLazyGetCurrentUserQuery();
  const dispatch = useAppDispatch();

  // aos animation library
  useEffect(() => {
    aos.init({
      duration: 500,
    });
  }, []);

  const getUser = useCallback(async () => {
    if (localStorage.getItem('token')) {
      try {
        const user = await getCurrentUser();
        if (user.data) {
          dispatch(updateUser(user.data));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }

    if (localStorage.getItem('cart')) {
      dispatch(setCartState(getLocalStorageItem('cart')));
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
      <div>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          theme="light"
          pauseOnHover={false}
          transition={Slide}
          newestOnTop={true}
          rtl={false}
          draggable
          style={{
            paddingLeft: '5px',
            paddingRight: '20px',
            textAlign: 'center',
          }}
        />
      </div>
    </div>
  );
};

export default App;
