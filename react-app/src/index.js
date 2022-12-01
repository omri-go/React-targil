import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Waga from './components/Waga';
import Baga from './components/Baga';
import MrIlya from './components/MrIlya';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="waga" element={<Waga />} />
                    <Route path="baga" element={<Baga />} />
                    <Route path="boot" element={<MrIlya />} />
                </Route>
            </Routes>
        </BrowserRouter>

    </React.StrictMode>
);


