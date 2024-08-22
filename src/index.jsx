import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './style/global';
import { Header } from './componentes/Header';
import Footer from './componentes/Footer';
import AuthProvider from './componentes/produtosContext/ProdutosContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle/>
      <Header/>
      <App />
      <Footer/>
    </AuthProvider>
    
  </React.StrictMode>
);

