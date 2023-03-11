import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selectors';

const PublicRote = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <p>...Loading</p>;
  }

  if (isLogin) {
    return <Navigate to="/goit-react-hw-08-phonebook-whith-styles/" />;
  }
  return <Outlet />;
};

export default PublicRote;
