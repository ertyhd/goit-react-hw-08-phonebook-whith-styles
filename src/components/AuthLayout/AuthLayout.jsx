import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { current } from 'redux/auth/auth-operations';
import styles from './auhLayaut.module.scss';

const AuthLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return <div className={styles.conainer}>{children}</div>;
};

export default AuthLayout;
