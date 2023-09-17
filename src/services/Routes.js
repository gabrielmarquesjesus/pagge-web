
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/home/homePage';
import LivroGrid from '../pages/livro/grid/LivroGrid';
import LivroForm from '../pages/livro/form/LivroForm';

function RouteTeste() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomePage></HomePage>} />
                <Route path="/livros" element={<LivroGrid></LivroGrid>} />
                <Route path="/cadastroLivro" element={<LivroForm></LivroForm>} />
            </Routes>
        </BrowserRouter>
    )
};

export default RouteTeste;