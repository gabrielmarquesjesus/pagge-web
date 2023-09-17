import React, { useEffect } from 'react';
import './LivroFormStyle.css';
import { AiFillCaretLeft } from 'react-icons/ai'
import { BiCheck } from 'react-icons/bi'
import { ocultarForm } from '../LivroService';
import SquareButton from '../../../components/botoes/SquareButton';
import { FormField } from '../../../components/campos/FormField/FormField';

function LivroForm(props) {
    var setFormVisible = props.setFormVisible;

    const salvar = (event) => {
        event.preventDefault();
        alert("Salvou caralho")
    }

    return (
        <div className='livro-container'>
            <div className='etiqueta-titulo'>
                <h2>Cadastrar Livro</h2>
            </div>
            <form className='livro-form'>
                <div className='containerUm'>
                    <FormField label="Título:" className="tituloLivro" type="text" required={true}/>
                    <FormField label="Sub Título:" className="subtituloLivro" type="text" />
                    <FormField label="Autor:" className="autorLivro" type="text" required={true}/>
                    <FormField label="Editora:" className="editoraLivro" type="text" required={true}/>
                </div>
                <div className='containerDois'>
                    <FormField label="ISBN:" className="isbnLivro" type="text" required={true}/>
                    <FormField label="Data Lançamento:" className="dataLivro" type="text" required={true}   />
                </div>
                
                <FormField label="Descrição:" className="descricaoLivro" type="textarea" />

                <SquareButton
                    icon={<BiCheck color='white' size={45} />}
                    className='btn-salvar'
                    type='submit'
                    callback={salvar}
                />
            </form>
            <div className='btnSairContainer'>
                <button className='btn-sair' onClick={() => ocultarForm(document.querySelector('.livro-container'), setFormVisible)}>
                    <AiFillCaretLeft />
                </button>
                <div className='btn-sair-outline'/>
            </div>
        </div>
    )
};

export default LivroForm;