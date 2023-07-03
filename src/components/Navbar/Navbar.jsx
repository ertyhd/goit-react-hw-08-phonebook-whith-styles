import style from './navbar.module.scss';
import { useSelector } from 'react-redux';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from 'redux/auth/auth-selectors';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={style.navbar}>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
