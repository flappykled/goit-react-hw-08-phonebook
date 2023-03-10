import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { PrivateRoute } from '../Routs/PrivateRoute';
import { PublicRoute } from '../Routs/PublicRoute';
import { fetchContact } from '../../redux/contacts/contactsOperations';
import { fetchCurrentUser } from '../../redux/auth/authOperations';

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Upload = lazy(() => import('pages/Upload/Upload'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.auth.isFetching);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  useEffect(() => {
    isLoggedIn && dispatch(fetchContact());
  }, [dispatch, isLoggedIn]);

  return (
    !isFetching && (
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/update/:id"
            element={
              <PrivateRoute>
                <Upload />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    )
  );
};