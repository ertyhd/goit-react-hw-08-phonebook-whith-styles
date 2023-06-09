import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import UserRoutes from './UserRoutes';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import StartPage from 'pages/StartPage/StartPage';

import { store, persistor } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StartPage />
        <AuthLayout>
          <BrowserRouter>
            <UserRoutes />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
}

export default App;
