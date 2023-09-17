import React, { useState } from 'react';
import '../grid/LivroGridStyle.css';
import NavBar from '../../../components/navBar/navBar';
import { LIVROS } from '../../../utils/constants/Telas';
import LivroForm from '../form/LivroForm';
import { exibirForm, ocultarForm } from '../LivroService';

const components = [];

function LivroGrid() {
    const [formVisible, setFormVisible] = useState(false);
    
    function exibirOcultarForm() {
        const formLivro = document.querySelector('.livro-container');
        if(formVisible)
            ocultarForm(formLivro, setFormVisible)
        else
            exibirForm(formLivro, setFormVisible)
    }
    
    return (
        <div>
            <LivroForm setFormVisible={setFormVisible} ></LivroForm>
            <NavBar tela={LIVROS} ></NavBar>
            <div className='toolbar'>
                <h1>Busca de Livros</h1>
                <button className='btnNovo' onClick={() => exibirOcultarForm()}>NOVO</button>
            </div>
            <div className='container-geral'>
            </div>
        </div>
    )
};

export default LivroGrid;