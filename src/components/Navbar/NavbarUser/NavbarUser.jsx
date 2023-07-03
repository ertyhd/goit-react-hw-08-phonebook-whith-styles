import style from './navbarUser.module.scss';
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
    <div className={style.userLog}>
      {name}
      <button className={style.btnUserLog} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
