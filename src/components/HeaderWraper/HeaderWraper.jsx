import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar/Navbar';

import style from './headerWraper.module.scss';

const HeaderWraper = () => {
  return (
    <div className={style.layout}>
      <header className={style.header}>
        <h1 className={style.header_text}>PHONE BooK</h1>
        <h1 className={style.header_textShadow}>PHONE BooK</h1>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HeaderWraper;
