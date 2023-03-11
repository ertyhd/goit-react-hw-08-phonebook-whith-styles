// import style from './navbarUser.module.css';
import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const disputch = useDispatch();

  const onLogout = () => {
    disputch(logout());
  };

  return (
    <div>
      {name}, <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
