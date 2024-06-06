import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import LoginInterface from './pages/Users/LoginInterface';
import Form from './pages/Form';


function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Excelia Dashboard |Excelia" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Excelia  " />
              <Calendar />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Excelia " />
              <Profile />
            </>
          }
        />
        <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Excelia " />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Excelia " />
              <FormLayout />
            </>
          }
        />
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Excelia  " />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Excelia  " />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Excelia " />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Excelia  " />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Excelia " />
              <Buttons />
            </>
          }
        />
       <Route
          path="/login"
          element={
            <>
              <PageTitle title="Basic Chart | Excelia " />
              <LoginInterface/>
            </>
          }
        />
         <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Excelia  " />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Excelia  " />
              <SignUp />
            </>
          }
        />
         <Route
          path="/wassim"
          element={
            <>
              <PageTitle title="Signup | Excelia  " />
              <Form />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
