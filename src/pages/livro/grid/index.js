import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../grid/index.css'
import CardBook from '../../../components/livro/card';
import NavBar from '../../../components/navBar/navBar';

const components = [];

function LivroGrid() {
    const navigate = useNavigate();

    return (
        <div>
            <NavBar tela='1 '></NavBar>
            <h1>Busca de Livros</h1>
            <div className='container-geral'>
                <CardBook titulo='Biblioteca da meia noite'></CardBook>
            </div>
        </div>
    )
};

export default LivroGrid;