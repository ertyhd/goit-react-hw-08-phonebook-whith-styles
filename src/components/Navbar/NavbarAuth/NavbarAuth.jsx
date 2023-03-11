import { NavLink } from 'react-router-dom';

import style from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <div className={style.navbarAuth}>
      <NavLink to="/goit-react-hw-08-phonebook/register" className={style.link}>
        Register
      </NavLink>
      <NavLink to="/goit-react-hw-08-phonebook/login" className={style.link}>
        Login
      </NavLink>
    </div>
  );
};

export default NavbarAuth;
