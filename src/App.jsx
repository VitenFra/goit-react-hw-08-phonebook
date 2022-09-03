import React, { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Toaster } from 'react-hot-toast';
import AppBar from './views/AppBar';
import Container from './components/Container';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomeView = lazy(() =>
  import('./views/HomeView')
);

const LoginView = lazy(() =>
  import('./views/LoginView')
);

const RegisterView = lazy(() =>
  import('./views/RegisterView' )
);

const ContactsView = lazy(() =>
  import('./views/ContactsView' )
);

function App() {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingCurrentUser
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingCurrentUser && (
      <div>
        <AppBar />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Container>
                    <RegisterView />
                  </Container>
                </PublicRoute>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Container>
                    <LoginView />
                  </Container>
                </PublicRoute>
              }
            ></Route>

            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <ContactsView />
                </PrivateRoute>
              }
            ></Route>

            <Route
              path="*"
              element={<h2>404 помилка, ця сторінка не існує</h2>}
            ></Route>
          </Routes>
        </Suspense>

        <Toaster
          toastOptions={{
            className: '',
          }}
        />
      </div>
    )
  );
}

export default App;
