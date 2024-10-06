import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS should be imported first
import 'bootstrap/dist/js/bootstrap.bundle.js'; // Import Bootstrap JS after CSS
import { BrowserRouter } from 'react-router-dom';

// Create the root element and render the application
createRoot(document.getElementById('root')).render(
    <React.StrictMode>  {/* Optional, can help with highlighting potential issues */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
