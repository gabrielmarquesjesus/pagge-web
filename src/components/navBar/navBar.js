import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../navBar/style.css'

function NavBar(props) {

    useEffect(()=>{
        var tela = props.tela;
        if(tela == 0){
            document.querySelector('.tab-inicial').style.backgroundColor = "rgb(112, 112, 112)"
            document.querySelector('.navlink-home').style.color = "rgb(0, 183, 255)"
        }else if(tela == 1){
            document.querySelector('.tab-livros').style.backgroundColor = "rgb(112, 112, 112)"
            document.querySelector('.navlink-livros').style.color = "rgb(0, 183, 255)"
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