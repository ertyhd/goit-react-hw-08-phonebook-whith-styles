import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRote from 'modules/PrivateRote/PrivateRote';
import PublicRote from 'modules/PublicRote/PublicRote';
import HeaderWraper from 'components/HeaderWraper/HeaderWraper';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));

const RegisterPage = lazy(() => import('./pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route element={<HeaderWraper />}>
          <Route element={<PublicRote />}>
            <Route
              path="/goit-react-hw-08-phonebook-whith-styles/register"
              element={<RegisterPage />}
            />
            <Route
              path="/goit-react-hw-08-phonebook-whith-styles/login"
              element={<LoginPage />}
            />
          </Route>
          <Route element={<PrivateRote />}>
            <Route
              path="/goit-react-hw-08-phonebook-whith-styles"
              element={<HomePage />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
