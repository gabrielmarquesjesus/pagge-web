import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../navBar/style.css'
import { LIVROS, TELA_INICIAL } from '../../utils/constants/Telas';

function NavBar(props) {

    useEffect(()=>{
        var tela = props.tela;
        if(tela == TELA_INICIAL){
            document.querySelector('.tab-inicial').style.backgroundColor = "#03223f"
            document.querySelector('.navlink-home h1').style.color = "#fccb6f"
        }else if(tela == LIVROS){
            document.querySelector('.tab-livros').style.backgroundColor = "#03223f"
            document.querySelector('.navlink-livros h1').style.color = "#fccb6f"
        }
    },[])

    return (
        <nav className='container-nav'>
            <div className='tab-nav tab-inicial'>
                <NavLink className={'navlink navlink-home'} to='/'>
                    <h1>Tela Inicial</h1>
                </NavLink>
            </div>
            <div className='tab-nav tab-livros'>
                <NavLink className={'navlink navlink-livros'} to='/livros'>
                    <h1>Livros</h1>
                </NavLink>
            </div>
            <div className='tab-nav tab-usuarios'>
                <NavLink className={'navlink navlink-usuarios'} to='/usuarios'>
                    <h1>Usuários</h1>
                </NavLink>
            </div>
            <div className='tab-nav tab-emprestimos'>
                <NavLink className={'navlink navlink-emprestimos'} to='/emprestimos'>
                    <h1>Empréstimos</h1>
                </NavLink>
            </div>
        </nav>
    )
};

export default NavBar;