import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import style from './headerWraper.module.css';

const HeaderWraper = () => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderWraper;
