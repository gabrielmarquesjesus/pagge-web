
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import LivroGrid from '../pages/livro/grid';

function RouteTeste() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage></HomePage>} />
                <Route path="/livros" element={<LivroGrid></LivroGrid>} />
            </Routes>
        </BrowserRouter>
    )
};

export default RouteTeste;