import React from "react";
import '../livro/style.css'

function CardBook(props) {
    var isVazio = true;
    return (
        <div className="container">
            <div className='container-center-img'>
                <div className='container-img'></div>
            </div>
            <div className='container-info'>
                <h3>{props.titulo}</h3>
            </div>
            <div className='container-buttons'>
                <button className='btn-editar'>Editar</button>
                <button className='btn-excluir'>Excluir</button>
            </div>
        </div>
    )
}

export default CardBook;