import { NavLink } from 'react-router-dom';

import style from './navbarAuth.module.scss';

const NavbarAuth = () => {
  return (
    <div className={style.navbarAuth}>
      <NavLink
        to="/goit-react-hw-08-phonebook-whith-styles/register"
        className={style.link}
      >
        Register
      </NavLink>
      <NavLink
        to="/goit-react-hw-08-phonebook-whith-styles/login"
        className={style.link}
      >
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
