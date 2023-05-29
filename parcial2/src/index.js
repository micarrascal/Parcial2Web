import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ListaCafe from './components/ListaCafeComponent/ListaCafe';
import LoginForm from './components/Login';
import {IntlProvider} from 'react-intl';
import translate from '../src/translate'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale= {navigator.language} messages={translate[navigator.language]}>
  <div className="root-container">
<BrowserRouter>
  <Routes>
      <Route
          path="/cafes"
          element={
          <ListaCafe />
          }
        />
        <Route
          path="/login"
          element={
          <LoginForm/>
          }
        />
          <Route path="*" element={<Navigate to="/login" replace />} />
     
  </Routes>
</BrowserRouter>
</div>
</IntlProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
