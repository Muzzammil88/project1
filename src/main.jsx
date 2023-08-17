import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Contact from './Pages/Contact';
import NoPage from './Pages/Home';
import Layout from './Layout'; // Import the Layout component
import Nav from './Nav'; // Import the Nav component

export default function Main() { // Renamed the function to Main
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Nav />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(<Main />); // Render the Main component
