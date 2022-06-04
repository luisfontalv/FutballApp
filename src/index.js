import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './assets/css/index.css';
import FutballApp from './components/FutballApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <FutballApp />
        <ToastContainer />
    </>
);

