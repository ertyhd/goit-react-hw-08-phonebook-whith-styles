import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selectors';

const PrivateRote = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (!isLogin && !token) {
    return <Navigate to="/goit-react-hw-08-phonebook-whith-styles/login" />;
  }
  return <Outlet />;
};

export default PrivateRote;
